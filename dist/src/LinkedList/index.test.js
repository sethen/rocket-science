"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const _1 = require("./");
(0, globals_1.describe)('LinkedList', () => {
    (0, globals_1.describe)('clear', () => {
        it('should be able to clear list', () => {
            var _a, _b;
            const testLinkedList = new _1.LinkedList(1);
            (0, globals_1.expect)(testLinkedList.size).toEqual(1);
            (0, globals_1.expect)((_a = testLinkedList.head) === null || _a === void 0 ? void 0 : _a.data).toEqual(1);
            (0, globals_1.expect)((_b = testLinkedList.tail) === null || _b === void 0 ? void 0 : _b.data).toEqual(1);
            testLinkedList.clear();
            (0, globals_1.expect)(testLinkedList.size).toEqual(0);
            (0, globals_1.expect)(testLinkedList.head).toEqual(null);
            (0, globals_1.expect)(testLinkedList.tail).toEqual(null);
        });
    });
    (0, globals_1.describe)('pop', () => {
        it('should be able to remove list nodes from the end of the list', () => {
            const testLinkedList = new _1.LinkedList();
            testLinkedList.push(2);
            testLinkedList.pop();
            (0, globals_1.expect)(testLinkedList.size).toEqual(0);
        });
    });
    (0, globals_1.describe)('push', () => {
        it('should be able to add new list nodes to the end of the list when head is not present', () => {
            var _a, _b, _c, _d;
            const testLinkedList = new _1.LinkedList();
            testLinkedList.push(2);
            (0, globals_1.expect)(testLinkedList.size).toEqual(1);
            (0, globals_1.expect)((_a = testLinkedList.head) === null || _a === void 0 ? void 0 : _a.data).toEqual(2);
            (0, globals_1.expect)((_b = testLinkedList.tail) === null || _b === void 0 ? void 0 : _b.data).toEqual(2);
            testLinkedList.push(3);
            (0, globals_1.expect)(testLinkedList.size).toEqual(2);
            (0, globals_1.expect)((_c = testLinkedList.head) === null || _c === void 0 ? void 0 : _c.data).toEqual(2);
            (0, globals_1.expect)((_d = testLinkedList.tail) === null || _d === void 0 ? void 0 : _d.data).toEqual(3);
        });
        it('should be able to add new list nodes to the end of the list when head is present', () => {
            var _a, _b;
            const testLinkedList = new _1.LinkedList(1);
            testLinkedList.push(2);
            (0, globals_1.expect)(testLinkedList.size).toEqual(2);
            (0, globals_1.expect)((_a = testLinkedList.tail) === null || _a === void 0 ? void 0 : _a.data).toEqual(2);
            testLinkedList.push(3);
            (0, globals_1.expect)(testLinkedList.size).toEqual(3);
            (0, globals_1.expect)((_b = testLinkedList.tail) === null || _b === void 0 ? void 0 : _b.data).toEqual(3);
        });
    });
    (0, globals_1.describe)('shift', () => {
        it('should be able to remove list nodes from the beginning of the list when head is not present', () => {
            var _a;
            const testLinkedList = new _1.LinkedList();
            testLinkedList.push(1);
            testLinkedList.push(2);
            testLinkedList.shift();
            (0, globals_1.expect)((_a = testLinkedList.head) === null || _a === void 0 ? void 0 : _a.data).toEqual(2);
            (0, globals_1.expect)(testLinkedList.size).toEqual(1);
            testLinkedList.shift();
            (0, globals_1.expect)(testLinkedList.head).toEqual(null);
            (0, globals_1.expect)(testLinkedList.size).toEqual(0);
        });
        it('should be able to remove list nodes from the beginning of the list when head is present', () => {
            var _a, _b;
            const testLinkedList = new _1.LinkedList(1);
            testLinkedList.push(2);
            testLinkedList.push(3);
            testLinkedList.shift();
            (0, globals_1.expect)((_a = testLinkedList.head) === null || _a === void 0 ? void 0 : _a.data).toEqual(2);
            (0, globals_1.expect)(testLinkedList.size).toEqual(2);
            testLinkedList.shift();
            (0, globals_1.expect)((_b = testLinkedList.head) === null || _b === void 0 ? void 0 : _b.data).toEqual(3);
            (0, globals_1.expect)(testLinkedList.size).toEqual(1);
        });
    });
    (0, globals_1.describe)('unshift', () => {
        it('should be able to add list nodes to the beginning of the list when head is not present', () => {
            var _a;
            const testLinkedList = new _1.LinkedList();
            testLinkedList.unshift(1);
            testLinkedList.unshift(2);
            (0, globals_1.expect)((_a = testLinkedList.head) === null || _a === void 0 ? void 0 : _a.data).toEqual(2);
            (0, globals_1.expect)(testLinkedList.size).toEqual(2);
        });
        it('should be able to add list nodes to the beginning of the list when head is present', () => {
            var _a;
            const testLinkedList = new _1.LinkedList(1);
            testLinkedList.unshift(2);
            testLinkedList.unshift(3);
            (0, globals_1.expect)((_a = testLinkedList.head) === null || _a === void 0 ? void 0 : _a.data).toEqual(3);
            (0, globals_1.expect)(testLinkedList.size).toEqual(3);
        });
    });
});
//# sourceMappingURL=index.test.js.map