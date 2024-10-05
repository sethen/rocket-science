import { describe, expect, test } from '@jest/globals';
import { quickSort } from './';

describe('quickSort', () => {
  it('should be able to sort numbers in an unsorted list', () => {
      expect(quickSort([10, 30, 29, 100, 8, 3])).toEqual([3, 8, 10, 29, 30, 100]);
  })
})
