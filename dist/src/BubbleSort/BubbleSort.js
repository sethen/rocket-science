"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSort = BubbleSort;
function BubbleSort(arrOfNums) {
    for (let i = 0; i < arrOfNums.length; i += 1) {
        for (let j = 1; j < arrOfNums.length; j += 1) {
            if (arrOfNums[i] > arrOfNums[j]) {
                [arrOfNums[i], arrOfNums[j]] = [arrOfNums[j], arrOfNums[i]];
            }
        }
    }
    return arrOfNums;
}
//# sourceMappingURL=BubbleSort.js.map