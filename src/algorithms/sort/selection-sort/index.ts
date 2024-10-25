// Selection Sort
// Time: O(n^2)
// Space O(1)
export function selectionSort(arrOfValues: Array<number>): Array<number> {
  for (let i = 0; i < arrOfValues.length; i += 1) {
    let minIndex = i;

    for (let j = (i + 1); j < arrOfValues.length; j += 1) {
      if (arrOfValues[ j ] < arrOfValues[ minIndex ]) {
        minIndex = j;
      }
    }

    [ arrOfValues[ i ], arrOfValues[ minIndex ] ] = [ arrOfValues[ minIndex ], arrOfValues[ i ] ];
  }

  return arrOfValues;
}
