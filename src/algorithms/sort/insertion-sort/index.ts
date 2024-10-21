export function insertionSort(arrOfValues: Array<number>): Array<number> {
  // loop through all values but start at 1
  // since we assume the first element is already sorted
  for (let i = 1; i < arrOfValues.length; i += 1) {
    // start with the value to sort at index of 1
    const valueToSort = arrOfValues[ i ];
    let valueToLeft = i - 1;

    // if the value to the left of the value in the array is greater
    // then the value we are trying to sort 
    // and value to left is greater than or equal to 0
    while (arrOfValues[ valueToLeft ] > valueToSort && valueToLeft >= 0) {
      // swap value to the left plus 1 with value to left 
      arrOfValues[ valueToLeft + 1 ] = arrOfValues[ valueToLeft ];
      // decrement value to the left by 1
      // and continue looking at numbers to sort
      valueToLeft -= 1;
    }

    // add 1 to value to the left (next value) and put in the value to sort
    arrOfValues[ valueToLeft + 1 ] = valueToSort;
  }

  return arrOfValues;
}
