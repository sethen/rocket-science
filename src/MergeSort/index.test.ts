import { describe, expect } from '@jest/globals';
import { Merge, MergeSort } from './';

describe('MergeSort', () => {
  it('should be able to sort numbers in an unsorted list', () => {
     expect(MergeSort([ 2, 10, 4, 3 ])).toEqual([ 2, 3, 4, 10 ]);
  })
})

describe('Merge', () => {
  it('should be able to sort numbers and merge', () => {
     expect(Merge([ 2 ], [ 3 ])).toEqual([ 2, 3 ]);
     expect(Merge([ 10 ], [ 4 ])).toEqual([ 4, 10 ]);
     expect(Merge([ 2, 10 ], [ 4, 3 ])).toEqual([ 2, 4, 3, 10 ]);
  })
})
