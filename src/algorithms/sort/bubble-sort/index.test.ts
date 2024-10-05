import { describe, expect } from '@jest/globals';
import { bubbleSort } from './';

describe('bubbleSort', () => {
  it('should be able to sort numbers in an unsorted list', () => {
      expect(bubbleSort([2, 5, 3, 1, 7])).toEqual([1, 2, 3, 5, 7]);
  })
})
