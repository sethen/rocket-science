/*
https://leetcode.com/problems/maximum-subarray/description/

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
*/

export function maxSubArray(arrOfValues: Array<number>): number {
  // keep track of current sum
  let currentSum = 0;
  // we can sum the max is the first element for now
  let maxSub = arrOfValues[ 0 ];

  // loop through all values
  for (let i = 0; i < arrOfValues.length; i += 1) {
    // look at the current value
    const currentValue = arrOfValues[ i ];

    // if the current sum is negative
    if (currentSum < 0) {
      // reset to zero
      currentSum = 0;
    }

    // add the current value to the current sum
    currentSum += currentValue;

    // compare and replace
    maxSub = Math.max(currentSum, maxSub);
  }

  return maxSub;
}
