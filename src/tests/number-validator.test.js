import { test, expect } from 'vitest';
import { numberValidator } from '../utils/number-validator.js';

test('should return a string as a number', () => {
  const string = '123';
  const expected = 123;

  const result = numberValidator(string);

  expect(result).toBe(expected);
});

test('"patata" should return undefined', () => {
  const string = 'patata';

  const result = numberValidator(string);

  expect(result).toBeUndefined();
});

test('"123patata" should return undefined', () => {
  const string = '123patata';

  const result = numberValidator(string);

  expect(result).toBeUndefined();
});
