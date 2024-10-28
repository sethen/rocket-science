export function lengthOfLongestSubstring(str: string): number {
  // initialize left in the slide window
  let left = 0;
  // hold longest value found
  let longest = 0;
  // new set for unique values
  const set = new Set();

  // loop through string
  for (let right = 0; right < str.length; right += 1) {
    // look at the letter at the right position
    const currentLetter = str[ right ];

    // if the set has the current letter
    while (set.has(currentLetter)) {
      // delete the letter at the left position
      set.delete(str[ left ]);
      // increase left
      left += 1;
    }

    // the formula for figuring out how big the sliding window is
    let width = (right - left) + 1;

    // save the longest value
    longest = Math.max(longest, width);
    // add the current letter to the set
    set.add(currentLetter);
  }

  return longest;
}
