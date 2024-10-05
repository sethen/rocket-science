"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const QuickSort_1 = require("./QuickSort");
(0, globals_1.describe)('QuickSort', () => {
    it('should be able to sort unsorted numbers', () => {
        (0, globals_1.expect)((0, QuickSort_1.QuickSort)([10, 30, 29, 100, 8, 3])).toEqual([3, 8, 10, 29, 30, 100]);
    });
});
//# sourceMappingURL=QuickSort.test.js.map