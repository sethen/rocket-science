import { describe, expect, test } from '@jest/globals';
import { countingSort } from './';

describe('quickSort', () => {
  it('should be able to sort numbers in an unsorted list', () => {
      expect(countingSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  })
})
