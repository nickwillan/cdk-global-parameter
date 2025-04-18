# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalStringParameter <a name="GlobalStringParameter" id="cdk-global-parameter.GlobalStringParameter"></a>

Creates an SSM Parameter in multiple regions using Custom Resources.

#### Initializers <a name="Initializers" id="cdk-global-parameter.GlobalStringParameter.Initializer"></a>

```typescript
import { GlobalStringParameter } from 'cdk-global-parameter'

new GlobalStringParameter(scope: Construct, id: string, props: GlobalStringParameterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-global-parameter.GlobalStringParameter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-global-parameter.GlobalStringParameter.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-global-parameter.GlobalStringParameter.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-global-parameter.GlobalStringParameterProps">GlobalStringParameterProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-global-parameter.GlobalStringParameter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-global-parameter.GlobalStringParameter.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-global-parameter.GlobalStringParameter.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-global-parameter.GlobalStringParameterProps">GlobalStringParameterProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-global-parameter.GlobalStringParameter.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-global-parameter.GlobalStringParameter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-global-parameter.GlobalStringParameter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-global-parameter.GlobalStringParameter.isConstruct"></a>

```typescript
import { GlobalStringParameter } from 'cdk-global-parameter'

GlobalStringParameter.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-global-parameter.GlobalStringParameter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-global-parameter.GlobalStringParameter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-global-parameter.GlobalStringParameter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### GlobalStringParameterProps <a name="GlobalStringParameterProps" id="cdk-global-parameter.GlobalStringParameterProps"></a>

GlobalStringParameterProps defines the properties for the GlobalStringParameter construct.

#### Initializer <a name="Initializer" id="cdk-global-parameter.GlobalStringParameterProps.Initializer"></a>

```typescript
import { GlobalStringParameterProps } from 'cdk-global-parameter'

const globalStringParameterProps: GlobalStringParameterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-global-parameter.GlobalStringParameterProps.property.parameterProps">parameterProps</a></code> | <code>aws-cdk-lib.aws_ssm.StringParameterProps</code> | *No description.* |
| <code><a href="#cdk-global-parameter.GlobalStringParameterProps.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-global-parameter.GlobalStringParameterProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}[]</code> | *No description.* |

---

##### `parameterProps`<sup>Required</sup> <a name="parameterProps" id="cdk-global-parameter.GlobalStringParameterProps.property.parameterProps"></a>

```typescript
public readonly parameterProps: StringParameterProps;
```

- *Type:* aws-cdk-lib.aws_ssm.StringParameterProps

---

##### `regions`<sup>Required</sup> <a name="regions" id="cdk-global-parameter.GlobalStringParameterProps.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-global-parameter.GlobalStringParameterProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string}[];
```

- *Type:* {[ key: string ]: string}[]

---



