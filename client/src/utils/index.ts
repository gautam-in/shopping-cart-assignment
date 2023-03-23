export * from "./TestUtils"

export * from "./firebase"

export * from "./validationSchema"

export const pluralize = (
  word: string,
  suffix: string,
  quantity: number
): string => (quantity === 1 ? `${word}` : `${word}${suffix}`)
