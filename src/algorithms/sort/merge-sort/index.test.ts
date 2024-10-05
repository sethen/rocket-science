import { describe, expect } from '@jest/globals';
import { merge, mergeSort } from './';

describe('mergeSort', () => {
  it('should be able to sort numbers in an unsorted list', () => {
     expect(mergeSort([ 2, 10, 4, 3 ])).toEqual([ 2, 3, 4, 10 ]);
  })
})

describe('merge', () => {
  it('should be able to sort numbers and merge', () => {
     expect(merge([ 2 ], [ 3 ])).toEqual([ 2, 3 ]);
     expect(merge([ 10 ], [ 4 ])).toEqual([ 4, 10 ]);
     expect(merge([ 2, 10 ], [ 4, 3 ])).toEqual([ 2, 4, 3, 10 ]);
  })
})
