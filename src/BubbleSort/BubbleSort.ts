// Just swap the numbers in the array if the first one
// is bigger than the second one
export function BubbleSort(arrOfNums: number[]) {
  for (let i = 0; i < arrOfNums.length; i += 1) {
    for (let j = 0; j < arrOfNums.length; j += 1) {
      if (arrOfNums[ j ] > arrOfNums[ j + 1 ]) {
        [arrOfNums[ j ], arrOfNums[ j + 1 ]] = [arrOfNums[ j + 1 ], arrOfNums[ j ]];
      }
    }
  }

  return arrOfNums;
}
