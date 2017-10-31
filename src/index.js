import { required, multipleOf } from './utils'


/* eslint-disable */
/** (x: number) -> string | number */
export const fizzBuzz = x => multipleOf(3, 5)(x) ? 'FizzBuzz'
  : multipleOf(3)(x) ? 'Fizz'
  : multipleOf(5)(x) ? 'Buzz'
  : x
/* eslint-enable */


/** :: (print: Function, max: number?) -> void */
const play = (print = required(), min = 1, max = 100) => {
  for (let num = min; num <= max; num += 1) {
    print(fizzBuzz(num))
  }
}


export default play
