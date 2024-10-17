import type { IListNode } from '../ListNode';
import { ListNode } from '../ListNode';

export class LinkedList<T> {
  head: IListNode<T> | null;
  size: number;
  tail: IListNode<T> | null;

  constructor(data?: T) {
    this.head = data ? new ListNode<T>(data) : null;
    this.tail = this.head;
    this.size = this.head ? 1 : 0;
  }

  public clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  public pop() {
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

    prevCursor.next = undefined;

    this.tail = prevCursor;
    this.size -= 1;
  }

  public push(data: T) {
    const listNode = new ListNode<T>(data);

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

  public shift() {
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

  public unshift(data: T) {
    const listNode = new ListNode<T>(data);

    if (!this.head) {
      this.head = listNode;
    }

    listNode.next = this.head;

    this.head = listNode;
    this.size += 1;
  }
}
