"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const _1 = require("./");
(0, globals_1.describe)('MergeSort', () => {
    it('should be able to sort numbers in an unsorted list', () => {
        (0, globals_1.expect)((0, _1.MergeSort)([2, 10, 4, 3])).toEqual([2, 3, 4, 10]);
    });
});
(0, globals_1.describe)('Merge', () => {
    it('should be able to sort numbers and merge', () => {
        (0, globals_1.expect)((0, _1.Merge)([2], [3])).toEqual([2, 3]);
        (0, globals_1.expect)((0, _1.Merge)([10], [4])).toEqual([4, 10]);
        (0, globals_1.expect)((0, _1.Merge)([2, 10], [4, 3])).toEqual([2, 4, 3, 10]);
    });
});
//# sourceMappingURL=index.test.js.map