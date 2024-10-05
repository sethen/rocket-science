export function binarySearch(arrOfValues: number[], targetValue: number) {
  // start low at zero
  let low = 0;
  // start high at the length of the array - 1
  let high = arrOfValues.length - 1;

  // while low is less than or equal to high
  while (low <= high) {
    // find the middle of the array and round down
    let mid = Math.floor((low + high) / 2);
    // take a guess at the middle value
    const guess = arrOfValues[mid];

    // if guess is equal to the target value to find you're done
    if (guess === targetValue) {
      // return the index that targetValue is at
      return mid;
    }
    else if (guess > targetValue) {
      // if guess is greater than the target value to find
      // change high to the middle - 1 eliminating 
      // all of the lower numbers
      high = mid - 1;
    }
    else if (guess < targetValue) {
      // if guess is less than the target value to find
      // change high to the middle + 1 eliminating
      // all of the higher numbers
      low = mid + 1;
    }
  }

  // if you can't find the target value return -1
  return -1;
}
