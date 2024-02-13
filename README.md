# nanopang-eslint-plugin

A custom ESLint plugin to sync the Typeorm, NestJs Graphql and NestJs Query decorators nullable with the TypeScript type.

## Installation

You can install the plugin using npm:

```bash
npm install nanopang-eslint-plugin --save-dev
```

## Usage

Add the plugin to the `plugins` section of your ESLint configuration file:

```json
{
  "plugins": ["@nanopang/eslint-plugin"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "@nanopang/nullable-sync": "error", // all rules
    "@nanopang/graphql-nullable-sync'": "error",
    "@nanopang/typeorm-nullable-sync'": "error",
    "@nanopang/nestjs-query-nullable-sync": "error",
  }
}
```