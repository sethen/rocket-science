export function BinarySearch(arrOfNums: number[], numToFind: number) {
  let low = 0;
  let high = arrOfNums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    const guess = arrOfNums[mid];

    if (guess === numToFind) {
      return mid;
    }
    else if (guess > numToFind) {
      high = mid - 1;
    }
    else if (guess < numToFind) {
      low = mid + 1;
    }
  }

  return -1;
}
