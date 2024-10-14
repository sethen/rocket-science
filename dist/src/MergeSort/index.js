"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeSort = MergeSort;
exports.Merge = Merge;
function MergeSort(arrOfNums) {
    const arrOfNumsLength = arrOfNums.length;
    if (arrOfNumsLength <= 1) {
        return arrOfNums;
    }
    const middle = Math.floor(arrOfNums.length / 2);
    const leftArr = MergeSort(arrOfNums.slice(0, middle));
    const rightArr = MergeSort(arrOfNums.slice(middle));
    return Merge(leftArr, rightArr);
}
function Merge(leftArr, rightArr) {
    const arr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            arr.push(leftArr[leftIndex]);
            leftIndex += 1;
        }
        else {
            arr.push(rightArr[rightIndex]);
            rightIndex += 1;
        }
    }
    return arr
        .concat(leftArr.slice(leftIndex))
        .concat(rightArr.slice(rightIndex));
}
//# sourceMappingURL=index.js.map