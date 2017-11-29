<!-- REPO BADGES -->
<p align="center">
  <!-- Travis Build Status -->
  <a href="https://travis-ci.org/Tahseenm/fizzbuzz">
    <img
      height="25"
      src="https://img.shields.io/travis/Tahseenm/fizzbuzz.svg?style=flat-square"
      alt="Travis Build">
  </a>

  <!-- Code coverage report -->
  <a href="https://codecov.io/github/Tahseenm/fizzbuzz">
    <img
      height="25"
      src="https://img.shields.io/codecov/c/github/Tahseenm/fizzbuzz.svg?style=flat-square"
      alt="Codecov Coverage" >
  </a>

  <!-- NPM version -->
  <a href="http://npm.im/fizz_buzz">
    <img
      height="25"
      src="https://img.shields.io/npm/v/fizz_buzz.svg?style=flat-square"
      alt="Version" >
  </a>

  <!-- LICENSE -->
  <a href="http://opensource.org/licenses/MIT">
    <img
      height="25"
      src="https://img.shields.io/npm/l/fizz_buzz.svg?style=flat-square"
      alt="MIT License">
  </a>
</p><!-- ./REPO BADGES -->



# Fizz Buzz ✨
Play the classic interview Fizz Buzz game

<img width="300" src="http://gifimage.net/wp-content/uploads/2017/07/but-why-gif-11.gif" alt="MIT License">

Why not? A great **template** for opensource javascript 
projects. This was inspired by @kentcdodds awesome course on [egghead](https://egghead.io/courses/how-to-write-an-open-source-javascript-library)


## Table of Contents
* [Requirements](#requirements)
* [Browser Support](#browser-support)
* [Installation](#installation)
* [Documentation](#documentation)
  * [Example 1](#example-1)
  * [Example 2](#example-2)
* [Contributors](#contributors)
* [License](#license)


## Requirements
[NodeJS](https://nodejs.org/en/)


## Browser Support

| Chrome | Safari | IE / Edge | Firefox | Opera |
| ------ | ------ | --------- | ------- | ----- |
| Yes    | Yes    | 9+        | Yes     | Yes   |


## Installation
Using [npm](https://www.npmjs.com/)
```bash
> npm install --save fizz_buzz
```

Using [yarn](https://yarnpkg.com/en/)
```bash
> yarn add fizz_buzz
```


## Documentation
### Example 1
```javascript
import playFizzBuzz from 'fizz_buzz'
import isString from './utils'


/**
 * Sexy `Fizz` / `Buzz` / `FizzBuzz` console logging ✨
 */
const printToConsole = (val) => {
  const styles = {
    reg: 'font-size: 14px',
    fancy: `
      padding: 3px;
      font-size: 14px;
      font-weight: bold;
      color: tomato;
      background-color: #000;
    `,
  }

  console.log(`%c${val}`, isString(val) ? styles.fancy : styles.reg)
}


playFizzBuzz(printToConsole)
```


### Example 2
```javascript
import playFizzBuzz from 'fizz_buzz'
import isString from './utils'


const wrapper = document.getElementById('fizzbuzz-wrapper')

const printToPage = (val) => {
  const elem = document.createElement('li')
  const className = isString(val) ? 'fizzbuzz' : 'number'

  elem.innerHTML = `<span class="${className}">
    ${val}
  </span>`

  wrapper.appendChild(elem)
}


playFizzBuzz(printToPage)
```


## Contributors
[Tahseen Malik](https://tahseenmalik.com)


## License
MIT