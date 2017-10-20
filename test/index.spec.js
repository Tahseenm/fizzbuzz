import playFizzBuzz, { fizzBuzz } from '../src'


test('Jest Works', () => {
  expect(true).toBe(true)
})

describe('Fizz Buzz Game', () => {
  it('should throw an error when no print function is provided', () => {
    const msg = 'Please provide all the required arguments'

    expect(() => playFizzBuzz()).toThrow(msg)
  })

  it('should call the print function correct number of times', () => {
    const mockPrint = jest.fn()
    playFizzBuzz(mockPrint, 10)

    const expected = 10
    const actual = mockPrint.mock.calls.length

    expect(actual).toBe(expected)
  })

  it('should run for a total of 100 times by default', () => {
    const mockPrint = jest.fn()
    playFizzBuzz(mockPrint)

    const expected = 100
    const actual = mockPrint.mock.calls.length

    expect(actual).toBe(expected)
  })

  describe('Fizz Buzz', () => {
    it('should return `Fizz` for multiples of 3 but not 5', () => {
      const validate = x => x === 'Fizz'

      const expected = true
      const actual = [3, 9, 12, 21, 57].map(fizzBuzz).every(validate)

      expect(actual).toBe(expected)
    })

    it('should return `Buzz` for multiples of 5 but not 3', () => {
      const validate = x => x === 'Buzz'

      const expected = true
      const actual = [5, 20, 25, 55, 70].map(fizzBuzz).every(validate)

      expect(actual).toBe(expected)
    })

    it('should return `FizzBuzz` for multiples of 3 and 5', () => {
      const validate = x => x === 'FizzBuzz'

      const expected = true
      const actual = [15, 30, 45, 60, 90].map(fizzBuzz).every(validate)

      expect(actual).toBe(expected)
    })

    it('should return input when its not a multiple of 3 or 5', () => {
      const expected = [2, 7, 13, 19, 32]
      const actual = [2, 7, 13, 19, 32].map(fizzBuzz)

      expect(actual).toEqual(expected)
    })
  })

  it('should call print with fizzBuzz output', () => {
    const mockPrint = jest.fn()
    const total = 100
    playFizzBuzz(mockPrint, total)

    // [[1], [2], ['Fizz'], [4], ['Buzz'], ['Fizz'], [7] ...]
    const expected = Array(total).fill().map((_, i) => [fizzBuzz(i + 1)])
    const actual = mockPrint.mock.calls

    expect(actual).toEqual(expected)
  })
})
