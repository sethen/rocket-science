"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoSum = TwoSum;
function TwoSum(arrOfNums, numToFind) {
    const numsToIndex = {};
    let result = [];
    for (let i = 0; i < arrOfNums.length; i += 1) {
        const currentNum = arrOfNums[i];
        const diff = numToFind - currentNum;
        if (diff in numsToIndex) {
            result = [numsToIndex[diff], i];
            break;
        }
        else {
            numsToIndex[currentNum] = i;
        }
    }
    return result;
}
//# sourceMappingURL=index.js.map