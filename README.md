# NodeJS Typescript Boilerplate

## Using package

```sh
npm i --save @nextjsvietnam/nodejs-typescript-boilerplate
```

```ts
import JSBase, { JSBASE_VERSION } from "@nextjsvietnam/nodejs-typescript-boilerplate/src";

console.log(JSBase, JSBASE_VERSION);

console.log(new JSBase().helloWorld('ABC'));

```


## Development

- [x] Typescript Builder
- [x] Jest for test

```sh
npm install --save reflect-metadata typescript
npm install --save-dev @babel/preset-env @babel/preset-typescript @types/jest @types/node @typescript-eslint/eslint-plugin @tsconfig/node20 @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-google eslint-config-prettier husky jest ts-node ts-node-dev
```

## Publish package

```sh
npm init --scope=@nextjsvietnam
npm adduser
npm publish --access public
```
