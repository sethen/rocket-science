export function InsertionSort(arrOfNums: Array<number>): Array<number> {
  // loop through all values but start at 1
  for (let i = 1; i < arrOfNums.length; i += 1) {
    // start with the value to sort at index of 1
    const valueToSort = arrOfNums[ i ];

    // if the index to the left of the value to sort is greater than value to sort
    // and the index i is greater than 0
    while (arrOfNums[ i - 1 ] > valueToSort && i > 0) {
      // swap values
      [ arrOfNums[ i ], arrOfNums[ i - 1 ] ] = [ arrOfNums[ i - 1 ], arrOfNums [ i ] ];
      // walk down the list
      i = i - 1;
    }
  }

  return arrOfNums;
}
