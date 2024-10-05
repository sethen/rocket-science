"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const ListNode_1 = require("./ListNode");
class LinkedList {
    constructor(data) {
        this.head = data ? new ListNode_1.ListNode(data) : null;
        this.size = this.head ? 1 : 0;
    }
    shift() {
        if (this.head) {
            if (this.head.next) {
                this.head = this.head.next;
            }
            else {
                this.head = null;
            }
            this.size -= 1;
        }
    }
    push(data) {
        const listNode = new ListNode_1.ListNode(data);
        if (!this.head) {
            this.head = listNode;
        }
        this.head.next = listNode;
        this.size += 1;
    }
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=LinkedList.js.map