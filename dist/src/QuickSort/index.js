"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickSort = QuickSort;
function QuickSort(arrOfNums) {
    debugger;
    if (arrOfNums.length <= 1) {
        return arrOfNums;
    }
    const pivot = arrOfNums[arrOfNums.length - 1];
    const leftOfPivot = [];
    const rightOfPivot = [];
    for (let i = 0; i < arrOfNums.length - 1; i += 1) {
        const currentNum = arrOfNums[i];
        if (currentNum < pivot) {
            leftOfPivot.push(currentNum);
        }
        else {
            rightOfPivot.push(currentNum);
        }
    }
    return [...QuickSort(leftOfPivot), pivot, ...QuickSort(rightOfPivot)];
}
//# sourceMappingURL=index.js.map