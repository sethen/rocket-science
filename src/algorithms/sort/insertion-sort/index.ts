// Insertion Sort
// Time: O(n^2)
// Space: O(1)
export function insertionSort(arrOfValues: Array<number>): Array<number> {
  // loop through all values but start at 1
  // since we assume the first element is already sorted
  for (let i = 1; i < arrOfValues.length; i += 1) {
    // set j to equal i and work backwards to compare
    for (let j = i; j >= 0; j -= 1) {
      // if the value to left of j is greater than j
      if (arrOfValues[ j - 1 ] > arrOfValues[ j ]) {
        // swap values
        [ arrOfValues[ j - 1 ], arrOfValues[ j ] ] = [ arrOfValues[ j ], arrOfValues[ j - 1 ] ];
      }
      else {
        break;
      }
    }
  }

  return arrOfValues;
}
