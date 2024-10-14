"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSort = BubbleSort;
function BubbleSort(arrOfNums) {
    for (let i = 0; i < arrOfNums.length; i += 1) {
        for (let j = 0; j < arrOfNums.length; j += 1) {
            if (arrOfNums[j] > arrOfNums[j + 1]) {
                [arrOfNums[j], arrOfNums[j + 1]] = [arrOfNums[j + 1], arrOfNums[j]];
            }
        }
    }
    return arrOfNums;
}
//# sourceMappingURL=index.js.map