/** Throw error when required arguments are not provided */
export const required = () => {
  throw new Error('Please provide all the required arguments')
}

/**
 * Check if `x` is a multiple of given factors
 *
 * @example
 *   multipleOf(5, 7)(35) -> true
 *   multipleOf(9)(36)    -> true
 *   multipleOf(9)(30)    -> false
 */
/** :: (...number) -> (x: number) -> boolean */
export const multipleOf = (...factors) =>
  x => factors.every(factor => x % factor === 0)
