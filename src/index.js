import { required, multipleOf } from './utils'


/* eslint-disable */
/** (x: number) -> string | number */
export const fizzBuzz = x => multipleOf(3, 5)(x) ? 'FizzBuzz'
  : multipleOf(3)(x) ? 'Fizz'
  : multipleOf(5)(x) ? 'Buzz'
  : x
/* eslint-enable */


/** :: (print: Function, max: number?) -> void */
const play = (print = required(), max = 100) => {
  for (let number = 1; number <= max; number += 1) {
    print(fizzBuzz(number))
  }
}


export default play
