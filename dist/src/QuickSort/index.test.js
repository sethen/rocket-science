"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const _1 = require("./");
(0, globals_1.describe)('QuickSort', () => {
    it('should be able to sort numbers in an unsorted list', () => {
        (0, globals_1.expect)((0, _1.QuickSort)([10, 30, 29, 100, 8, 3])).toEqual([3, 8, 10, 29, 30, 100]);
    });
});
//# sourceMappingURL=index.test.js.map