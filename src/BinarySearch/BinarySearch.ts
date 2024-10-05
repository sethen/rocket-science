// BinarySearch used log2 n to solve for instance if you had
// 8 numbers you would only need to ever look at 3 numbers
// to find the correct number -- thats because log2 8 equals 3
// NOTE: BinarySearch will need a sorted list to work properly
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
