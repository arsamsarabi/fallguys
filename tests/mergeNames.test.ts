import { mergeNames } from '../src/utils'

describe('mergeNames', () => {
  it('Should merge two string arrays', () => {
    const originals = ['John', 'Jane']
    const mixins = ['is', 'was']
    const result = mergeNames(originals, undefined, mixins)

    expect(result).toEqual(['John', 'Jane', 'is', 'was'])
  })

  it('Should replace originals by replacements', () => {
    const originals = ['John', 'Jane']
    const replacements = ['Joe']
    const result = mergeNames(originals, replacements)

    expect(result).toEqual(['Joe'])
  })

  it('Shoud return originals if mixins or replacements are not defined', () => {
    const originals = ['John', 'Jane']
    const result = mergeNames(originals)

    expect(result).toEqual(['John', 'Jane'])
  })
})
