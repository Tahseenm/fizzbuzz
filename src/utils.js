/**
 * Util function to throw error. Useful for ensuring all arguments are provided
 */
export const required = () => {
  throw new Error('Please provide all the required arguments')
}

/**
 * Check if `x` is a multiple of given factors
 *
 * @param {number} factors
 * @param {number} x
 * @return {boolean}
 */
export const multipleOf = (...factors) =>
  x => factors.every(factor => x % factor === 0)
