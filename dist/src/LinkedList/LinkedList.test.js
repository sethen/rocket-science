"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const LinkedList_1 = require("./LinkedList");
(0, globals_1.describe)('LinkedList', () => {
    (0, globals_1.describe)('shift', () => {
        it('should be able to shift list nodes', () => {
            var _a;
            const testLinkedList = new LinkedList_1.LinkedList();
            testLinkedList.push(1);
            testLinkedList.push(2);
            testLinkedList.shift();
            (0, globals_1.expect)((_a = testLinkedList.head) === null || _a === void 0 ? void 0 : _a.data).toEqual(2);
            (0, globals_1.expect)(testLinkedList.size).toEqual(1);
            testLinkedList.shift();
            (0, globals_1.expect)(testLinkedList.head).toEqual(null);
            (0, globals_1.expect)(testLinkedList.size).toEqual(0);
        });
    });
    (0, globals_1.describe)('push', () => {
        it('should be able to push new list nodes', () => {
            var _a, _b, _c;
            const testLinkedList = new LinkedList_1.LinkedList();
            testLinkedList.push(1);
            (0, globals_1.expect)((_a = testLinkedList.head) === null || _a === void 0 ? void 0 : _a.data).toEqual(1);
            (0, globals_1.expect)(testLinkedList.size).toEqual(1);
            testLinkedList.push(2);
            (0, globals_1.expect)((_c = (_b = testLinkedList.head) === null || _b === void 0 ? void 0 : _b.next) === null || _c === void 0 ? void 0 : _c.data).toEqual(2);
            (0, globals_1.expect)(testLinkedList.size).toEqual(2);
        });
    });
});
//# sourceMappingURL=LinkedList.test.js.map