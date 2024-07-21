import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Nick Willan',
  authorAddress: 'nickwillan@gmail.com',
  cdkVersion: '2.149.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: 'cdk-global-parameter',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/nickwillan/cdk-global-parameter.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();