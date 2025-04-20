import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Nick Willan',
  authorAddress: 'https://github.com/nickwillan',
  keywords: ['aws', 'cdk', 'parameter', 'serverless,', 'ssm'],
  description: 'CDK Contstruct that creates a globally replicated Systems Manager String Parameter.',
  majorVersion: 2,
  cdkVersion: '2.190.0',
  constructsVersion: '10.4.2',
  defaultReleaseBranch: 'main',
  jsiiVersion: '5.8.x',
  name: 'cdk-global-parameter',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/nickwillan/cdk-global-parameter.git',

  /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: ['aws-sdk-client-mock'] /* Build dependencies for this module. */,
  // packageName: undefined,  /* The "name" in package.json. */
  eslint: true,
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['nickwillan'],
  },
  gitignore: [
    'cdk.out',
    '.cdk.staging',
    // For Mavn GPG
    'public.pem',
    'private.pem',
    // For Python demo
    '*.swp',
    'package-lock.json',
    '__pycache__',
    '.pytest_cache',
    '.env',
    '.venv',
    '*.egg-info',
    // For Java demo
    '.classpath.txt',
    'target/',
    '.classpath',
    '.project',
    '.idea',
    '.settings',
    '*.iml',
  ],
  releaseToNpm: true,
});
project.synth();
