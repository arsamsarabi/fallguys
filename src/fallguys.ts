import firstnames from './constants/firstnames'
import middlenames from './constants/middlenames'
import lastnames from './constants/lastnames'

import { getRandomArrayValue, mergeNames } from './utils'

export type NamesModifiers = {
  firstnames?: string[]
  middlenames?: string[]
  lastnames?: string[]
}

export type FGConfig = {
  numberOfNames?: number
  mix?: NamesModifiers
  replace?: NamesModifiers
}

const getRandomName = (fn: string[], mn: string[], ln: string[]): string => {
  return `${getRandomArrayValue(fn)} ${getRandomArrayValue(
    mn
  )} ${getRandomArrayValue(ln)}`
}

const main = (args?: FGConfig): string | string[] => {
  const result: string[] = []

  if (args) {
    const { numberOfNames = 1, mix = undefined, replace = undefined } = args
    const fn = mergeNames(firstnames, replace?.firstnames, mix?.firstnames)
    const mn = mergeNames(middlenames, replace?.middlenames, mix?.middlenames)
    const ln = mergeNames(lastnames, replace?.lastnames, mix?.lastnames)

    for (let i = 0; i < numberOfNames; i++) {
      result.push(getRandomName(fn, mn, ln))
    }

    return result
  } else {
    return getRandomName(firstnames, middlenames, lastnames)
  }
}

export default main
