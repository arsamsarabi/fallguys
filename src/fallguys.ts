import { DEFAULT_FIRSTS, DEFAULT_SECONDS, DEFAULT_THIRDS } from './constants'
import { getRandomWords, mergeNames } from './utils'

export type WordModifiers = {
  firsts?: string[]
  seconds?: string[]
  thirds?: string[]
}

export type FGConfig = {
  quantity?: number
  mix?: WordModifiers
  replace?: WordModifiers
}

const main = (args?: FGConfig): string | string[] => {
  const result: string[] = []

  if (args) {
    const { quantity = 1, mix = undefined, replace = undefined } = args
    const firsts = mergeNames(DEFAULT_FIRSTS, replace?.firsts, mix?.firsts)
    const seconds = mergeNames(DEFAULT_SECONDS, replace?.seconds, mix?.seconds)
    const thirds = mergeNames(DEFAULT_THIRDS, replace?.thirds, mix?.thirds)

    for (let i = 0; i < quantity; i++) {
      result.push(getRandomWords(firsts, seconds, thirds))
    }

    return result
  } else {
    return getRandomWords(DEFAULT_FIRSTS, DEFAULT_SECONDS, DEFAULT_THIRDS)
  }
}

export default main
