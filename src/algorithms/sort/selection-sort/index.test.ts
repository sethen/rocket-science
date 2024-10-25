import { describe, expect } from '@jest/globals';
import { selectionSort } from './';

describe('selectionSort', () => {
  it('should be able to sort numbers in an unsorted list', () => {
     expect(selectionSort([ 2, 10, 4, 3 ])).toEqual([ 2, 3, 4, 10 ]);
  });
});
