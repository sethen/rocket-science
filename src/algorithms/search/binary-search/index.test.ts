import { describe, expect, test } from '@jest/globals';
import { binarySearch } from './';

describe('BinarySearch', () => {
  it('should be able to find numbers in a sorted list', () => {
      expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual(2);
  })
})
