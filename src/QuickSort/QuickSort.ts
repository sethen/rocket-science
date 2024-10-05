// When looping through you must exclude the pivot
// this is why you see arrOfNums.length - 1 in the length
// so it doesn't include that number
// NOTE: You can pick any number to be the pivot
export function QuickSort(arrOfNums: number[]): number[] {
  if (arrOfNums.length <= 1) {
    return arrOfNums;
  }

  const pivot = arrOfNums[arrOfNums.length - 1];
  const leftOfPivot = [];
  const rightOfPivot = [];

  for (let i = 0; i < arrOfNums.length - 1; i += 1) {
    const currentNum = arrOfNums[ i ];

    if (currentNum < pivot) {
      leftOfPivot.push(currentNum);
    }
    else {
      rightOfPivot.push(currentNum);
    }
  }

  return [ ...QuickSort(leftOfPivot), pivot, ...QuickSort(rightOfPivot) ];
}
