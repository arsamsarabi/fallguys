export const getRandomArrayValue = (names: string[]): string => {
  return names[Math.floor(Math.random() * names.length)]
}
