# minify-hex-code

[![Build Status](https://travis-ci.org/nielse63/minify-hex-code.svg?branch=master)](https://travis-ci.org/nielse63/minify-hex-code)
[![Coverage Status](https://coveralls.io/repos/github/nielse63/minify-hex-code/badge.svg?branch=master)](https://coveralls.io/github/nielse63/minify-hex-code?branch=master)
[![devDependencies Status](https://david-dm.org/nielse63/minify-hex-code/dev-status.svg)](https://david-dm.org/nielse63/minify-hex-code?type=dev)
[![Code Climate](https://codeclimate.com/github/nielse63/minify-hex-code/badges/gpa.svg)](https://codeclimate.com/github/nielse63/minify-hex-code)
[![NPM version](https://badge.fury.io/js/minify-hex-code.svg)](http://badge.fury.io/js/minify-hex-code)
[![npm](https://img.shields.io/npm/dt/minify-hex-code.svg?style=flat-square)](https://www.npmjs.com/package/minify-hex-code)

Convert 6-character hex codes to 3-characters

## Installation

### With `npm`

```sh
npm install minify-hex-code
```

### With `yarn`

```sh
yarn add minify-hex-code
```

## Usage

### In a node project

Import the script to your project

```js
import minifyHexCode from 'minify-hex-code';
```

or using ES5 syntax:

```js
const minifyHexCode = require('minify-hex-code');
```

And execute the script:

```js
const shortHexCode = minifyHexCode('#000000');
// #000
```

### In the browser

Reference your local script:

```html
<script src="node_modules/minify-hex-code/dist/minify-hex-code.min.js"></script>
```

Or load the script via jsdelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/minify-hex-code@latest/dist/minify-hex-code.min.js"></script>
```

And execute the script:

```js
const shortHexCode = minifyHexCode('#000000');
// #000
```

## Contributing

Fork the repo and clone locally, then run:

```sh
yarn install
```

This will install the `devDependencies` packages and build the `dist` folder.

Once you've made your desired changes, make sure to write any new tests for
your feature and run the tests:

```sh
yarn run lint # lints js

yarn test     # runs test suite
```

If all tests pass, [create a pull request](https://github.com/nielse63/minify-hex-code/pulls).

