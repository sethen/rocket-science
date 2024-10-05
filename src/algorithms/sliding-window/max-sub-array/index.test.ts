import { describe, expect } from '@jest/globals';
import { maxSubArray } from './';

describe('maxSubArray', () => {
  it('should be able to find max sub array of a sorted array of values', () => {
    expect(maxSubArray([ 1, 2, 3, 4, 5, 6, 7 ])).toEqual(28);
  })

  it('should be able to find max sub array of an unsorted array of values', () => {
    expect(maxSubArray([ -1, 2, 3, -4, -5, 6, 7 ])).toEqual(13);
  });
});
