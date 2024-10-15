"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const _1 = require("./");
(0, globals_1.describe)('Stack', () => {
    it('should be able to act like a stack', () => {
        const stack = new _1.Stack();
        stack.push(1);
        (0, globals_1.expect)(stack.size()).toBe(1);
        (0, globals_1.expect)(stack.toString()).toEqual('1');
        stack.push(2);
        (0, globals_1.expect)(stack.size()).toBe(2);
        (0, globals_1.expect)(stack.toString()).toEqual('1,2');
        stack.pop();
        (0, globals_1.expect)(stack.size()).toBe(1);
        (0, globals_1.expect)(stack.toString()).toEqual('1');
        stack.pop();
        (0, globals_1.expect)(stack.size()).toBe(0);
        (0, globals_1.expect)(stack.toString()).toEqual('');
    });
});
//# sourceMappingURL=index.test.js.map