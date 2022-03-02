import fallguys from '../src/fallguys'
import {
  DEFAULT_FIRSTS,
  DEFAULT_SECONDS,
  DEFAULT_THIRDS,
} from '../src/constants'

describe('fallguys', () => {
  it('should generate 1 string with default configs', () => {
    const result = fallguys()

    expect(typeof result).toBe('string')
  })

  it('Should return the correct number of required strings', () => {
    const quantity = 3
    const result = fallguys({ quantity })

    expect(Array.isArray(result)).toBeTruthy()
    expect(result.length).toBe(quantity)
  })
})
