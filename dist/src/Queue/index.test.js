"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const _1 = require("./");
(0, globals_1.describe)('queue', () => {
    it('should be able to act like a queue', () => {
        const queue = new _1.Queue();
        queue.enqueue(1);
        (0, globals_1.expect)(queue.size()).toBe(1);
        (0, globals_1.expect)(queue.toString()).toEqual('1');
        queue.enqueue(2);
        (0, globals_1.expect)(queue.size()).toBe(2);
        (0, globals_1.expect)(queue.toString()).toEqual('1,2');
        queue.dequeue();
        (0, globals_1.expect)(queue.size()).toBe(1);
        (0, globals_1.expect)(queue.toString()).toEqual('2');
        queue.dequeue();
        (0, globals_1.expect)(queue.size()).toBe(0);
        (0, globals_1.expect)(queue.toString()).toEqual('');
    });
});
//# sourceMappingURL=index.test.js.map