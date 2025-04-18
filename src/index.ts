import { PolicyStatement, Effect } from 'aws-cdk-lib/aws-iam';
import { StringParameterProps } from 'aws-cdk-lib/aws-ssm';
import { AwsCustomResource, AwsCustomResourcePolicy, PhysicalResourceId } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

/**
 * GlobalStringParameterProps defines the properties for the GlobalStringParameter construct.
 *
 * @interface GlobalStringParameterProps
 * @property {StringParameterProps} parameterProps - The properties for the SSM String Parameter to be created.
 * @property {{ [key: string]: string }} [tags] - Optional tags to be added to the SSM Parameter.
 * @property {string[]} regions - The list of AWS regions where the SSM Parameter should be created.
 */
export interface GlobalStringParameterProps {
  readonly parameterProps: StringParameterProps;
  readonly tags?: { [key: string]: string }[];
  readonly regions: string[];
}

/**
 * Creates an SSM Parameter in multiple regions using Custom Resources
 */
export class GlobalStringParameter extends Construct {
  constructor(scope: Construct, id: string, props: GlobalStringParameterProps) {
    super(scope, id);

    if (!props.parameterProps.parameterName) {
      throw new Error('parameterName must be specified');
    }

    if (!props.parameterProps.stringValue) {
      throw new Error('stringValue must be specified');
    }

    if (!props.regions || props.regions.length === 0) {
      throw new Error('At least one region must be specified');
    }

    props.regions.forEach((region) => {
      const resource = new AwsCustomResource(this, `GlobalSSMParameter-${region}`, {
        onCreate: {
          service: 'SSM',
          action: 'putParameter',
          parameters: {
            Name: props.parameterProps.parameterName,
            Value: props.parameterProps.stringValue,
            Type: 'String',
            Description: props.parameterProps.description,
            Tier: props.parameterProps.tier,
            DataType: props.parameterProps.dataType,
            AllowedPattern: props.parameterProps.allowedPattern,
            Tags: props.tags,
          },
          region,
          physicalResourceId: PhysicalResourceId.of(`${props.parameterProps.parameterName}-${region}`),
        },
        onUpdate: {
          service: 'SSM',
          action: 'putParameter',
          parameters: {
            Name: props.parameterProps.parameterName,
            Value: props.parameterProps.stringValue,
            Type: 'String',
            Description: props.parameterProps.description,
            Tier: props.parameterProps.tier,
            DataType: props.parameterProps.dataType,
            AllowedPattern: props.parameterProps.allowedPattern,
            Overwrite: true,
          },
          region,
          physicalResourceId: PhysicalResourceId.of(`${props.parameterProps.parameterName}-${region}`),
        },
        onDelete: {
          service: 'SSM',
          action: 'deleteParameter',
          parameters: {
            Name: props.parameterProps.parameterName,
          },
          region,
        },
        policy: AwsCustomResourcePolicy.fromSdkCalls({
          resources: AwsCustomResourcePolicy.ANY_RESOURCE,
        }),
      });
      resource.grantPrincipal.addToPrincipalPolicy(
        new PolicyStatement({
          actions: ['ssm:PutParameter', 'ssm:DeleteParameter', 'ssm:AddTagsToResource'],
          resources: ['*'],
          effect: Effect.ALLOW,
        }),
      );
    });
  }
}
