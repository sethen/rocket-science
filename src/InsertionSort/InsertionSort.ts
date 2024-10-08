export function InsertionSort(arrOfNums: Array<number>): Array<number> {
  // loop over entire array but start at 1
  // since we assume first value is in the correct spot
  for (let i = 1; i < arrOfNums.length; i += 1) {
    // current value in the array
    const current = arrOfNums[ i ];
    // value for us to compare to left of i
    let j = i - 1;

    // while j is greater than or equal to zero (will always be true)
    // and the array index at j is greater than current value
    while (j >= 0 && arrOfNums[ j ] > current) {
      // assign the next index to the current value of j
      // shifting to the right of the array
      arrOfNums[ j + 1 ] = arrOfNums[ j ];
      j -= 1;
    }

    arrOfNums[ j + 1 ] = current;
  }

  return arrOfNums;
}
