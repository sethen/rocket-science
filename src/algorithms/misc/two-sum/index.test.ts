import { describe, expect, test } from '@jest/globals';
import { twoSum } from './';

describe('twoSum', () => {
  it('should be able to find two number indexes in an array that equal the target in an unsorted list', () => {
      expect(twoSum([ 2, 7, 11, 15 ], 9)).toEqual([ 0, 1 ]);
  })
})
