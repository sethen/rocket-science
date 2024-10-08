"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const InsertionSort_1 = require("./InsertionSort");
(0, globals_1.describe)('InsertionSort', () => {
    it('should be able to sort numbers in an unsorted list', () => {
        (0, globals_1.expect)((0, InsertionSort_1.InsertionSort)([2, 10, 9, 3, 4, 1, 5, 6, 12, 8, 7, 11])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    });
});
//# sourceMappingURL=InsertionSort.test.js.map