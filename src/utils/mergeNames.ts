export const mergeNames = (
  originals: string[],
  replacements?: string[],
  mixins?: string[]
): string[] => {
  if (replacements) return replacements
  if (mixins) return [...originals, ...mixins]
  return originals
}
