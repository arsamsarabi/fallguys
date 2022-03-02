import { getRandomArrayValue } from './getRandomArrayValue'

export const getRandomWords = (
  first: string[],
  second: string[],
  third: string[]
): string => {
  return `${getRandomArrayValue(first)} ${getRandomArrayValue(
    second
  )} ${getRandomArrayValue(third)}`
}
