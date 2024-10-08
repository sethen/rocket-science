"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertionSort = InsertionSort;
function InsertionSort(arrOfNums) {
    for (let i = 1; i < arrOfNums.length; i += 1) {
        const current = arrOfNums[i];
        let j = i - 1;
        while (j >= 0 && arrOfNums[j] > current) {
            arrOfNums[j + 1] = arrOfNums[j];
            j -= 1;
        }
        arrOfNums[j + 1] = current;
    }
    return arrOfNums;
}
//# sourceMappingURL=InsertionSort.js.map