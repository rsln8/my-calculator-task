import { describe, it, expect } from 'vitest';
import calculator from '../src/index.js';

describe('calculator', () => {
  it('should add two numbers', () => {
    expect(calculator(2, '+', 3)).toBe(5);
  });

  it('should subtract two numbers', () => {
    expect(calculator(10, '-', 4)).toBe(6);
  });

  it('should multiply two numbers', () => {
    expect(calculator(3, '*', 4)).toBe(12);
  });

  it('should divide two numbers', () => {
    expect(calculator(10, '/', 2)).toBe(5);
  });

  it('should throw error on division by zero', () => {
    expect(() => calculator(10, '/', 0)).toThrow('Division by zero');
  });

  it('should throw error on unknown operator', () => {
    expect(() => calculator(10, '%', 2)).toThrow('Unknown operator');
  });
});
