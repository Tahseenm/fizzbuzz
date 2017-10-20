import { multipleOf, required } from '../src/utils'


describe('required', () => {
  it('should trow when called', () => {
    expect(() => required()).toThrow()
  })
})

describe('multipleOf util function', () => {
  it('should return a function', () => {
    const expected = 'function'
    const actual = typeof multipleOf()

    expect(actual).toBe(expected)
  })

  describe('single factor', () => {
    const multipleOf2 = multipleOf(2)

    it('should return true for multiples of 2', () => {
      const expected = Array(5).fill(true)
      const actual = [2, 4, 16, 20, 22].map(multipleOf2)

      expect(actual).toEqual(expected)
    })

    it('should return false for non multiples of 2', () => {
      const expected = Array(5).fill(false)
      const actual = [1, 5, 7, 11, 17].map(multipleOf2)

      expect(actual).toEqual(expected)
    })
  })

  describe('multiple factors', () => {
    const multipleOfNums = multipleOf(2, 3, 5)

    it('should return true for multiples of 2, 3 & 5', () => {
      const expected = Array(3).fill(true)
      const actual = [30, 60, 90].map(multipleOfNums)

      expect(actual).toEqual(expected)
    })

    it('should return false for non multiples of 2, 3 & 5', () => {
      const expected = Array(3).fill(false)
      const actual = [6, 18, 24].map(multipleOfNums)

      expect(actual).toEqual(expected)
    })
  })
})
