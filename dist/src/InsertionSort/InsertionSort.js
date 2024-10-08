"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertionSort = InsertionSort;
function InsertionSort(arrOfNums, explain) {
    for (let i = 1; i < arrOfNums.length; i += 1) {
        const valueToSort = arrOfNums[i];
        while (arrOfNums[i - 1] > valueToSort && i > 0) {
            [arrOfNums[i], arrOfNums[i - 1]] = [arrOfNums[i - 1], arrOfNums[i]];
            i = i - 1;
        }
    }
    return arrOfNums;
}
//# sourceMappingURL=InsertionSort.js.map