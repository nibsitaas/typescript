import { createCalculator } from './calculator';

describe('Calculator', () => {
  it('should add two numbers correctly', () => {
    const result = createCalculator(0).add(5).add(10).equals();
    expect(result).toBe(15);
  });

  it('should subtract two numbers correctly', () => {
    const result = createCalculator(0).subtract(5).subtract(10).equals();
    expect(result).toBe(-15);
  });

  it('should multiply two numbers correctly', () => {
    const result = createCalculator(1).multiply(5).multiply(10).equals();
    expect(result).toBe(50);
  });

  it('should divide two numbers correctly', () => {
    const result = createCalculator(100).divide(5).divide(2).equals();
    expect(result).toBe(10);
  });

  it('should allow starting value to be negative', () => {
    const result = createCalculator(-10).add(25).subtract(5).equals();
    expect(result).toBe(15);
  });

  it('should return the same value if no operations are performed', () => {
    const result = createCalculator(10).equals();
    expect(result).toBe(10);
  });
});
