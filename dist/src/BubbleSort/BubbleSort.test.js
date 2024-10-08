"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const BubbleSort_1 = require("./BubbleSort");
(0, globals_1.describe)('BubbleSort', () => {
    it('should be able to sort numbers in an unsorted list', () => {
        (0, globals_1.expect)((0, BubbleSort_1.BubbleSort)([2, 5, 3, 1, 7])).toEqual([1, 2, 3, 5, 7]);
    });
});
//# sourceMappingURL=BubbleSort.test.js.map