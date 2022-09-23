import { test, expect } from 'vitest';
import { numberValidator } from '../utils/number-validator.js';

test('should return a string as a number', () => {
  const number = numberValidator('123');
  expect(number).toBe(123);
});

test('"patata" should return undefined', () => {
  const result = numberValidator('patata');
  expect(result).toBeUndefined();
});

test(' "123patata" should return undefined', () => {
  const result = numberValidator('123patata');
  expect(result).toBeUndefined();
});
