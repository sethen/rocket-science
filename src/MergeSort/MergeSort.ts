export function MergeSort(arrOfNums: Array<number>): Array<number> {
  // get the length of the array
  const arrOfNumsLength = arrOfNums.length;

  // if the length of the array is less than or equal to 1
  if (arrOfNumsLength <= 1) {
    // return the array
    return arrOfNums;
  }

  // find the middle of the array
  // with odd numbers we need to round down
  const middle = Math.floor(arrOfNums.length / 2);
  // copy the array from zero to the middle of the array
  const leftArr: Array<number> = MergeSort(arrOfNums.slice(0, middle));
  // copy the array from the middle to the end
  const rightArr: Array<number> = MergeSort(arrOfNums.slice(middle));

  // use merge to merge the arrays back together
  return Merge(leftArr, rightArr);
}

export function Merge(leftArr: Array<number>, rightArr: Array<number>): Array<number> {
  const arr: Array<number> = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // while the left index is less than the left array length
  // and while the right index is less than the right array length
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    // if the current index in the left array is less than the 
    // current index in the right array
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      // "merge" that into the array
      arr.push(leftArr[leftIndex]);

      // move on
      leftIndex += 1;
    }
    else {
      // if the current index in the left array is more than the 
      // "merge" that into the array
      arr.push(rightArr[rightIndex]);

      // move on
      rightIndex += 1;
    }
  }

  // merge the arrays together
  return arr
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
}

