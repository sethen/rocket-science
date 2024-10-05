export function insertionSort(arrOfValues: Array<number>): Array<number> {
  // loop through all values but start at 1
  // since we assume the first element is already sorted
  for (let i = 1; i < arrOfValues.length; i += 1) {
    // start with the value to sort at index of 1
    const valueToSort = arrOfValues[ i ];

    // if the value to the left of the value in the array is greater
    // and the index i is greater than 0
    // this will fail with i eventually gets to 0 - 1 and turns into -1
    // and the for loop continues on
    while (arrOfValues[ i - 1 ] > valueToSort && i > 0) {
      // swap values
      [ arrOfValues[ i ], arrOfValues[ i - 1 ] ] = [ arrOfValues[ i - 1 ], arrOfValues [ i ] ];
      // walk up the list to keep comparing
      i = i - 1;
    }
  }

  return arrOfValues;
}
