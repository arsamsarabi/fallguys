import { getRandomArrayValue } from './getRandomArrayValue'

export const getRandomWords = (
  first: string[],
  second: string[],
  third: string[],
  separator: string
): string => {
  return `${getRandomArrayValue(first)}${separator}${getRandomArrayValue(
    second
  )}${separator}${getRandomArrayValue(third)}`
}
