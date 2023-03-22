export * from "./TestUtils"

export const pluralize = (
  word: string,
  suffix: string,
  quantity: number
): string => (quantity === 1 ? `${word}` : `${word}${suffix}`)
