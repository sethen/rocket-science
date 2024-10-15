"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    constructor() {
        this.storage = [];
    }
    dequeue() {
        return this.storage.shift();
    }
    enqueue(item) {
        this.storage.push(item);
    }
    size() {
        return this.storage.length;
    }
    toString() {
        return this.storage.toString();
    }
}
exports.Queue = Queue;
//# sourceMappingURL=index.js.map