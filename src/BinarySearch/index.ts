export function BinarySearch(arrOfNums: number[], numToFind: number) {
  // start low at zero
  let low = 0;
  // start high at the length of the array - 1
  let high = arrOfNums.length - 1;

  // while low is less than or equal to high
  while (low <= high) {
    // find the middle of the array and round down
    let mid = Math.floor((low + high) / 2);
    // take a guess at the middle value
    const guess = arrOfNums[mid];

    // if guess is equal to the number to find you're done
    if (guess === numToFind) {
      return mid;
    }
    else if (guess > numToFind) {
      // if guess is greater than the number to find
      // change high to the middle - 1 eliminating 
      // all of the lower numbers
      high = mid - 1;
    }
    else if (guess < numToFind) {
      // if guess is less than the number to find
      // change high to the middle + 1 eliminating
      // all of the higher numbers
      low = mid + 1;
    }
  }

  // if you can't find the number return -1
  return -1;
}
