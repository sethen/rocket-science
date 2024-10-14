"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const TwoSum_1 = require("./TwoSum");
(0, globals_1.describe)('TwoSum', () => {
    it('should be able to find two number indexes in an array that equal the target in an unsorted list', () => {
        (0, globals_1.expect)((0, TwoSum_1.TwoSum)([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });
});
//# sourceMappingURL=TwoSum.test.js.map