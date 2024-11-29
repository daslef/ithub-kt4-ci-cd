import { calculateSum } from "../index";

test("works with correct numbers", () => {
  expect(calculateSum(2, -5)).toBe(-3);
});

test("throws error on cases with incorrent params quantity", () => {
  // @ts-ignore
  expect(() => calculateSum(2)).toThrow("Incorrect input values");
});
