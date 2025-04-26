# CDK Global Parameter

[![State: GA](https://img.shields.io/badge/state-GA-22BC22?logo=npm)](https://github.com/nickwillan/cdk-global-parameter/pkgs/npm/cdk-global-parameter)
[![Maintainer: Nick Willan](https://img.shields.io/badge/maintainer-%40nick_willan-0046FF?&logo=github)](https://github.com/nickwillan)
[![AWS: CDK Construct](https://img.shields.io/badge/aws-cdk_construct-FF9900?&logo=AmazonAWS)](.)
[![Test Coverage](https://img.shields.io/badge/coverage-100%25-22BC22?style=flat&logo=jest)](.)

The `cdk-global-parameter` is a CDK (AWS Cloud Development Kit) Construct that allows users to create a Systems Manager String Parameter and replicated to additional AWS regions.

## Table of Contents

- [CDK Global Parameter](#cdk-global-parameter)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Configuration Options](#configuration-options)
  - [FAQs](#faqs)
  - [Contributing](#contributing)

## Installation

```bash
npm i cdk-global-parameter --save-dev
```

## Usage

In your CDK application, you can create a `GlobalStringParameter` using the following example:

```typescript
const globalParameter = new GlobalStringParameter(this, 'MyGlobalParameter', {
  parameterProps: {
    parameterName: '/my/global/parameter',
    stringValue: 'my-value',
    description: 'A global parameter example',
  },
  tags: [{ Key: 'key1', Value: 'value1' }],
  replicaRegions: ['us-east-1', 'us-west-2'],
});
```

This will create a Systems Manager String Parameter with the specified name, value, and tags in the provided AWS regions.

## Configuration Options

The `GlobalStringParameter` construct supports the following configuration options:

- `parameterProps`: [StringParameterProps](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ssm.StringParameterProps.html) - The properties for the parameter to be created.
- `tags`: { [key: string]: string }[]; - Optional tags to be added to the regional replicated string parameter.
- `replicaRegions`: `string[]` - The list of AWS regions where the string parameter should be created.

## FAQs

1. **Can I update the parameter value after creation?**

   Yes, you can update the parameter value by modifying the `stringValue` property in `parameterProps` and redeploying your stack.

2. **What happens if a parameter with the same name already exists in a region?**

   The construct will attempt to update the existing parameter with the new value.

3. **Can I delete the parameter?**

   Yes, the construct includes a delete operation that removes the parameter from all specified regions when the stack is destroyed.

## Contributing

I :heart: contributions!

Please refer to the [Contributing Guide](contributing.md)
