export function bubbleSort(arrOfValues: number[]) {
  // loop through all numbers in array
  for (let i = 0; i < arrOfValues.length; i += 1) {
    // again loop through all numbers in the array
    for (let j = 0; j < arrOfValues.length; j += 1) {
      // if the current index value is greater than the next index value
      if (arrOfValues[ j ] > arrOfValues[ j + 1 ]) {
        // swap the current index value with the next index value
        [arrOfValues[ j ], arrOfValues[ j + 1 ]] = [arrOfValues[ j + 1 ], arrOfValues[ j ]];
      }
    }
  }

  return arrOfValues;
}
