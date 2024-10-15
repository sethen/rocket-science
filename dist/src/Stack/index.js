"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor() {
        this.storage = [];
    }
    pop() {
        return this.storage.pop();
    }
    push(item) {
        this.storage.push(item);
    }
    size() {
        return this.storage.length;
    }
    toString() {
        return this.storage.toString();
    }
}
exports.Stack = Stack;
//# sourceMappingURL=index.js.map