import { required, multipleOf } from './utils'


/**
 * @param {number} x
 * @returns {string | number}
 */
/* eslint-disable */
export const fizzBuzz = x => multipleOf(3, 5)(x) ? 'FizzBuzz'
  : multipleOf(3)(x) ? 'Fizz'
  : multipleOf(5)(x) ? 'Buzz'
  : x
/* eslint-enable */

/**
 * Play as many times as you like
 *
 * @param {Function} print
 * @param {number?} max
 */
const playFizzBuzz = (print = required(), max = 100) => {
  for (let number = 1; number <= max; number += 1) {
    print(fizzBuzz(number))
  }
}


export default playFizzBuzz
