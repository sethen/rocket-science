export function BubbleSort(arrOfNums: number[]) {
  // loop through all numbers in array
  for (let i = 0; i < arrOfNums.length; i += 1) {
    // again loop through all numbers in the array
    for (let j = 0; j < arrOfNums.length; j += 1) {
      // if the current index value is greater than the next index value
      if (arrOfNums[ j ] > arrOfNums[ j + 1 ]) {
        // swap the current index value with the next index value
        [arrOfNums[ j ], arrOfNums[ j + 1 ]] = [arrOfNums[ j + 1 ], arrOfNums[ j ]];
      }
    }
  }

  return arrOfNums;
}
