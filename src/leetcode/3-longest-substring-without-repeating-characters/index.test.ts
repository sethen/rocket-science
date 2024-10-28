import { describe, expect } from '@jest/globals';
import { lengthOfLongestSubstring } from '../../leetcode/3-longest-substring-without-repeating-characters';

describe('lengthOfLongestSubstring', () => {
  it('should be able add find the longest substring without repeating characters', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
    expect(lengthOfLongestSubstring('bbbbbbbb')).toEqual(1);
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
    expect(lengthOfLongestSubstring('b')).toEqual(1);
    expect(lengthOfLongestSubstring('au')).toEqual(2);
    expect(lengthOfLongestSubstring('')).toEqual(0);
    expect(lengthOfLongestSubstring('dvdf')).toEqual(3);
  })
})
