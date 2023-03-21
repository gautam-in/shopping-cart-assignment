export const sum = (...numbers: number[]) =>
  numbers.reduce((acc, num) => (acc += num), 0)
