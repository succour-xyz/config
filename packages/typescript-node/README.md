# `@piyush97/typescript-node`

Create NodeJs Express Typescript API instantly

## Install

```bash
npm install @piyush97/typescript-node
npm install express
```

Rest is already handled for you

## Usage

```
//#Root
//.babelrc
{
  "presets": ["@babel/preset-env", "@babel/preset-typescript"]
}
```

```
//#Root
//index.dev.ts

import "./src/index";
```

```
// Add this in your package.json and start using it according to your project structure

"scripts": {
        "watch": "ts-node-dev --respawn index.dev.ts",
        "format": "prettier --write .",
        "dev": "tsnd --respawn --files -r @babel/register --inspect -- src/index.ts",
        "build": "babel ./src -d ./dist --extensions .ts --copy-files",
        "typecheck": "tsc",
        "start": "node dist/index.js",
        "lint:base": "eslint --ext .js,.json,.ts",
        "lint": "yarn lint:base src"
}
```
