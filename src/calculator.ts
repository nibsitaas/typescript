export type Operation = (x: number, y: number) => number;

const add: Operation = (x, y) => x + y;
const subtract: Operation = (x, y) => x - y;
const multiply: Operation = (x, y) => x * y;
const divide: Operation = (x, y) => x / y;

interface Calculator {
  currentValue: number;
  add: (value: number) => Calculator;
  subtract: (value: number) => Calculator;
  multiply: (value: number) => Calculator;
  divide: (value: number) => Calculator;
  equals: () => number;
}

export const createCalculator = (initialValue: number): Calculator => {
  let currentValue = initialValue;

  const calculator: Calculator = {
    currentValue,
    add: (val) => createCalculator(add(currentValue, val)),
    subtract: (val) => createCalculator(subtract(currentValue, val)),
    multiply: (val) => createCalculator(multiply(currentValue, val)),
    divide: (val) => createCalculator(divide(currentValue, val)),
    equals: () => currentValue,
  };

  return calculator;
};
