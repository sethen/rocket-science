import { describe, expect, test } from '@jest/globals';
import { BinarySearch } from './';

describe('BinarySearch', () => {
  it('should be able to find numbers in a sorted list', () => {
      expect(BinarySearch([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual(2);
  })
})
