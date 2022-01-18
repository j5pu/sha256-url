# shaurl 

Generate sha256 for url

## CLI 

### Install
`npm install -g shaurl`

### Usage
`shaurl https://github.com/python/cpython/archive/refs/tags/v3.9.10.tar.gz`

## Module

### Install
`npm install --save shaurl`

### Usage: js
```js 
const { shaurl } = require("shaurl");
console.log(shaurl("https://github.com/python/cpython/archive/refs/tags/v3.9.10.tar.gz"))
```

### Usage: ts
```ts
import { shaurl } from "shaurl"
console.log(shaurl("https://github.com/python/cpython/archive/refs/tags/v3.9.10.tar.gz"))
```
