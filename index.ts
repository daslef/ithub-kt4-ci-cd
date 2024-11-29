export function calculateSum(value1: number, value2: number): number {
  if (isNaN(+value1) || isNaN(+value2)) {
    throw new Error("Incorrect input values");
  }

  return value1 + value2;
}
