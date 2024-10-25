// Quick Sort
// Time: O(n log n)
// Space: O(n)
export function quickSort(arrOfValues: number[]): number[] {
  // if the array is less than or equal to 1
  // it is already sorted
  if (arrOfValues.length <= 1) {
    return arrOfValues;
  }

  // we use the last number as the pivot
  // any number can be used as the pivot but implementation
  // would be different
  const pivot = arrOfValues[arrOfValues.length - 1];
  // array for all numbers less than pivot
  const leftOfPivot = [];
  // array of all numbers greater than pivot
  const rightOfPivot = [];

  // loop through all numbers in array but exclude last number
  // which we are using as our pivot (arrOfValues.length -1)
  for (let i = 0; i < arrOfValues.length - 1; i += 1) {
    const currentValue = arrOfValues[ i ];

    // if the current number is less than the pivot
    if (currentValue < pivot) {
      // add it to the left pivot array
      leftOfPivot.push(currentValue);
    }
    else {
      // add it to the right pivot array
      rightOfPivot.push(currentValue);
    }
  }

  // recurse with quickSort to break down the array into smaller pieces
  // until the base case is reached
  // since we're using the last number as the pivot with an array
  // like [ 1, 2, 3, 4 ] it would look like [ 1, 2, 3 ], 4, [ ]
  return [ ...quickSort(leftOfPivot), pivot, ...quickSort(rightOfPivot) ];
}
