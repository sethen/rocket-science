"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const BinarySearch_1 = require("./BinarySearch");
(0, globals_1.describe)('BinarySearch', () => {
    it('should be able to find numbers in a sorted list', () => {
        (0, globals_1.expect)((0, BinarySearch_1.BinarySearch)([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual(2);
    });
});
//# sourceMappingURL=BinarySearch.test.js.map