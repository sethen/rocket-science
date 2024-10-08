import { describe, expect, test } from '@jest/globals';
import { BubbleSort } from './BubbleSort';

describe('BubbleSort', () => {
  it('should be able to sort numbers in an unsorted list', () => {
      expect(BubbleSort([2, 5, 3, 1, 7])).toEqual([1, 2, 3, 5, 7]);
  })
})
