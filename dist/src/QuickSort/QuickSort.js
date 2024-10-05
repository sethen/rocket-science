"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickSort = QuickSort;
function QuickSort(arrOfNums) {
    if (arrOfNums.length <= 1) {
        return arrOfNums;
    }
    const pivot = Math.floor(Math.random() * (arrOfNums.length - 1));
    const leftOfPivot = [];
    const rightOfPivot = [];
    console.log(pivot);
    for (let i = 0; i < arrOfNums.length; i += 1) {
        const currentNum = arrOfNums[i];
        if (currentNum === pivot) {
            continue;
        }
        else if (currentNum < pivot) {
            leftOfPivot.push(currentNum);
        }
        else {
            rightOfPivot.push(currentNum);
        }
    }
    return [...QuickSort(leftOfPivot), pivot, ...QuickSort(rightOfPivot)];
}
//# sourceMappingURL=QuickSort.js.map