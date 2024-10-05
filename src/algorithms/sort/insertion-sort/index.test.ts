import { describe, expect } from '@jest/globals';
import { insertionSort } from './';

describe('insertionSort', () => {
  it('should be able to sort numbers in an unsorted list', () => {
     expect(insertionSort([2, 10, 9, 3, 4, 1, 5, 6, 12, 8, 7, 11])).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]);
  })
})
