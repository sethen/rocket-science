export function twoSum(arrOfValues: number[], targetValue: number): Array<number> {
  // start with a record to keep track of values and indexes
  // for instance { '2': 0 } -> means the value of 2 is in the 0 index
  const numsToIndex: Record<number, number> = {};
  // result array when we find a match
  let result: Array<number> = [];

  // loop through all numbers in the array
  for (let i = 0; i < arrOfValues.length; i += 1) {
    // current number to loop through
    const currentNum = arrOfValues[ i ];
    // the difference between the number your trying to find
    // and the current number you're evaluating in the loop
    const diff = targetValue - currentNum;

    // if the difference has already been added to the map
    if (diff in numsToIndex) {
      // since we are looking for the indexes that adds up
      // to the sum we look up the value using the map with diff
      // and the current index we are on
      result = [ numsToIndex[ diff ], i ];

      break;
    }
    else {
      // if we do not find a match then we are
      // taking the current num and giving its
      // index a value
      numsToIndex[ currentNum ] = i;
    }
  } 

  return result;
}
