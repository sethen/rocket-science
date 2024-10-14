"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor(data) {
        this.head = data ? new ListNode(data) : null;
        this.tail = this.head;
        this.size = this.head ? 1 : 0;
    }
    clear() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    pop() {
        if (!this.head) {
            return;
        }
        if (this.head && this.size === 1) {
            this.clear();
            return;
        }
        let cursor = this.head;
        let prevCursor = cursor;
        while (cursor.next) {
            prevCursor = cursor;
            cursor = cursor.next;
        }
        prevCursor.next = null;
        this.tail = prevCursor;
        this.size -= 1;
    }
    push(data) {
        const listNode = new ListNode(data);
        if (!this.head) {
            this.head = listNode;
        }
        else {
            let cursor = this.head;
            while (cursor.next) {
                cursor = cursor.next;
            }
            cursor.next = listNode;
        }
        this.tail = listNode;
        this.size += 1;
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
    unshift(data) {
        const listNode = new ListNode(data);
        if (!this.head) {
            this.head = listNode;
        }
        listNode.next = this.head;
        this.head = listNode;
        this.size += 1;
    }
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=index.js.map