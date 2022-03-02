import { getRandomWords } from '../src/utils'

describe('getRandomWords()', () => {
  it('should return a random value from an array', () => {
    const firsts = ['John', 'Jane']
    const seconds = ['is', 'was']
    const thirds = ['here', 'there']
    const result = getRandomWords(firsts, seconds, thirds, ' ')

    const [first, second, third] = result.split(' ')
    expect(firsts).toContain(first)
    expect(seconds).toContain(second)
    expect(thirds).toContain(third)
  })

  it('Should use custom separator correctly', () => {
    const firsts = ['John', 'Jane']
    const seconds = ['is', 'was']
    const thirds = ['here', 'there']
    const separator = '---'
    const result = getRandomWords(firsts, seconds, thirds, separator)

    expect(result.includes(separator)).toBeTruthy()

    const [first, second, third] = result.split(separator)
    expect(firsts).toContain(first)
    expect(seconds).toContain(second)
    expect(thirds).toContain(third)
  })
})
