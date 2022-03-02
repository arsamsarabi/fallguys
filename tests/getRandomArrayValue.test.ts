import { getRandomArrayValue } from '../src/utils'

describe('getRandomArrayValue()', () => {
  it('should return a random value from an array', () => {
    const names = ['John', 'Jane', 'Joe']
    const result = getRandomArrayValue(names)
    expect(names).toContain(result)
  })
})
