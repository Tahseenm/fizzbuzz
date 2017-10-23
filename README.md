[![travis build](https://img.shields.io/travis/Tahseenm/fizzbuzz.svg?style=flat-square)](https://travis-ci.org/Tahseenm/fizzbuzz)
[![codecov coverage](https://img.shields.io/codecov/c/github/Tahseenm/fizzbuzz.svg?style=flat-square)](https://codecov.io/github/Tahseenm/fizzbuzz)
[![version](https://img.shields.io/npm/v/fizz_buzz.svg?style=flat-square)](http://npm.im/fizz_buzz)
[![MIT License](https://img.shields.io/npm/l/fizz_buzz.svg?style=flat-square)](http://opensource.org/licenses/MIT)


# Fizz Buzz
Play the classic interview Fizz Buzz game ✨

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/makes-people-smile.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/you-didnt-ask-for-this.svg)](http://forthebadge.com)


![Why Fizz Buzz](http://gifimage.net/wp-content/uploads/2017/07/but-why-gif-11.gif)

Why not? A great **template** for opensource javascript 
projects. This was inspired by @kentcdodds awesome course on [egghead](https://egghead.io/courses/how-to-write-an-open-source-javascript-library)


## Table of Contents
* [Requirements](#requirements)
* [Installation](#installation)
* Documentation
  * [Example 1](#example-1)
  * [Example 2](#example-2)
* [Contributors](#contributors)
* [License](#license)


## Requirements
[NodeJS](https://nodejs.org/en/)

#### Browser Support

| Chrome | Safari | IE / Edge | Firefox | Opera |
| ------ | ------ | --------- | ------- | ----- |
| Yes    | Yes    | 9+        | Yes     | Yes   |


## Installation
Using npm
```bash
> npm install --save fizz_buzz
```

Using yarn
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