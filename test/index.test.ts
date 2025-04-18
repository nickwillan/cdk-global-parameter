import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { ParameterTier, ParameterDataType } from 'aws-cdk-lib/aws-ssm';
import { GlobalStringParameter } from '../src/index';

describe('GlobalParameter', () => {
  it('throws an error if parameterName is not specified', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');

    expect(() => {
      new GlobalStringParameter(stack, 'TestGlobalParameter', {
        parameterProps: {
          stringValue: 'testValue',
        } as any,
        regions: ['us-east-1'],
      });
    }).toThrow('parameterName must be specified');
  });

  it('throws an error if stringValue is not specified', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');

    expect(() => {
      new GlobalStringParameter(stack, 'TestGlobalParameter', {
        parameterProps: {
          parameterName: 'testParameter',
        } as any,
        regions: ['us-east-1'],
      });
    }).toThrow('stringValue must be specified');
  });

  it('throws an error if no regions are specified', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');

    expect(() => {
      new GlobalStringParameter(stack, 'TestGlobalParameter', {
        parameterProps: {
          parameterName: 'testParameter',
          stringValue: 'testValue',
        },
        regions: [],
      });
    }).toThrow('At least one region must be specified');
  });

  it('creates an SSM parameter with additional properties', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');

    new GlobalStringParameter(stack, 'TestGlobalParameter', {
      parameterProps: {
        parameterName: 'testParameter',
        stringValue: 'testValue',
        description: 'Test description',
        tier: ParameterTier.STANDARD,
        dataType: ParameterDataType.TEXT,
        allowedPattern: '.*',
      },
      regions: ['us-east-1'],
    });

    const template = Template.fromStack(stack);

    console.log(JSON.stringify(template.toJSON(), null, 2));

    template.hasResourceProperties('Custom::AWS', {});
  });
});

it('creates, updates, and deletes SSM parameters in multiple regions', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');

  new GlobalStringParameter(stack, 'TestGlobalParameter', {
    parameterProps: {
      parameterName: 'testParameter',
      stringValue: 'testValue',
    },
    regions: ['us-east-1', 'us-west-2'],
  });

  const template = Template.fromStack(stack);

  template.resourceCountIs('Custom::AWS', 2);
  template.hasResourceProperties('Custom::AWS', {});
});

it('adds a policy to the grantPrincipal', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');

  new GlobalStringParameter(stack, 'TestGlobalParameter', {
    parameterProps: {
      parameterName: 'testParameter',
      stringValue: 'testValue',
    },
    regions: ['us-east-1'],
  });

  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::IAM::Policy', {
    PolicyDocument: {
      Statement: [
        {
          Action: ['ssm:PutParameter', 'ssm:DeleteParameter', 'ssm:AddTagsToResource'],
          Effect: 'Allow',
          Resource: '*',
        },
      ],
    },
  });
});
