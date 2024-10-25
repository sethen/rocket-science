// countArring Sort
// Time: O(n + k) where k is the range of the data
// Space: O(k)
// NOTE: Only supports positive numbers
export function countingSort(arrOfValues: number[]): number[] {
  // find the max value in the array
  const max = Math.max(...arrOfValues);
  // max a counts array with the max number + 1 and fill with zeroes
  let countsArr: Array<number> = Array(max + 1).fill(0);

  // loop through array of values and increment
  for (let i = 0; i < arrOfValues.length; i += 1) {
    // get the current value in the array of values
    const currentValue = arrOfValues[ i ];

    // find the index of the current value
    // for instance if the current value is 5 you
    // want to increase the value at the index of 5
    countsArr[ currentValue ] += 1;
  }

  let k = 0;

  // loop until the max value we found
  for (let j = 0; j <= max; j += 1) {
    // if the value at the j index is great than zero
    while (countsArr[ j ] > 0) {
      // modify the original array at the k position with j
      arrOfValues[ k ] = j;
      k += 1;

      // decrement the counts array at j
      countsArr[ j ] -= 1;
    }
  }

  return arrOfValues;
}
