import { log } from 'console';

export function QuickSort(arrOfNums: number[]): number[] {
  debugger;
  // if the array is less than or equal to 1
  // it is already sorted
  if (arrOfNums.length <= 1) {
    return arrOfNums;
  }

  // we use the last number as the pivot
  // any number can be used as the pivot but implementation
  // would be different
  const pivot = arrOfNums[arrOfNums.length - 1];
  // array for all numbers less than pivot
  const leftOfPivot = [];
  // array of all numbers greater than pivot
  const rightOfPivot = [];

  // loop through all numbers in array but exclude last number
  // which we are using as our pivot (arrOfNums.length -1)
  for (let i = 0; i < arrOfNums.length - 1; i += 1) {
    const currentNum = arrOfNums[ i ];

    // if the current number is less than the pivot
    if (currentNum < pivot) {
      // add it to the left pivot array
      leftOfPivot.push(currentNum);
    }
    else {
      // add it to the right pivot array
      rightOfPivot.push(currentNum);
    }
  }

  // recurse with quicksort to break down the array into smaller pieces
  // until the base case is reached
  // since we're using the last number as the pivot with an array
  // like [ 1, 2, 3, 4 ] it would look like [ 1, 2, 3 ], 4, [ ]
  return [ ...QuickSort(leftOfPivot), pivot, ...QuickSort(rightOfPivot) ];
}
