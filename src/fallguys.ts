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
  separator?: string
}

const main = (args?: FGConfig): string | string[] => {
  const quantity = args?.quantity || 1
  const mix = args?.mix
  const replace = args?.replace
  const separator = args?.separator || ' '
  const result: string[] = []

  const firsts = mergeNames(DEFAULT_FIRSTS, replace?.firsts, mix?.firsts)
  const seconds = mergeNames(DEFAULT_SECONDS, replace?.seconds, mix?.seconds)
  const thirds = mergeNames(DEFAULT_THIRDS, replace?.thirds, mix?.thirds)

  while (result.length < quantity) {
    result.push(getRandomWords(firsts, seconds, thirds, separator))
  }

  return result.length === 1 ? result[0] : result
}

export default main
