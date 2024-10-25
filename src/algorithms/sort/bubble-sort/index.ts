// Bubble Sort
// Time: O(n^2),
// Space: O(1)
export function bubbleSort(arrOfValues: number[]) {
  let swap = true;

  // start loop
  while (swap) {
    // assume we are not done
    swap = false;

    // loop through all numbers in the array
    for (let i = 1; i < arrOfValues.length; i += 1) {
      // if the current index value is greater than the next index value
      if (arrOfValues[ i - 1 ] > arrOfValues[ i ]) {
        // we have more work to do
        swap = true;

        // swap the current index value with the next index value
        [ arrOfValues[ i - 1 ], arrOfValues[ i ] ] = [arrOfValues[ i ], arrOfValues[ i - 1 ] ];
      }
    }
  }

  return arrOfValues;
}
