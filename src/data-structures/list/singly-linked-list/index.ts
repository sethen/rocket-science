import type { ISinglyListNode } from '../singly-list-node';
import { SinglyListNode } from '../singly-list-node';

export class SinglyLinkedList<T> {
  head: ISinglyListNode<T> | undefined;
  size: number;
  tail: ISinglyListNode<T> | undefined;

  constructor(data?: T) {
    this.head = data ? new SinglyListNode<T>(data) : undefined;
    this.tail = this.head;
    this.size = this.head ? 1 : 0;
  }

  public clear() {
    this.head = undefined;
    this.tail = undefined;
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
    const listNode = new SinglyListNode<T>(data);

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
        this.head = undefined;
      }

      this.size -= 1;
    }
  }

  public unshift(data: T) {
    const listNode = new SinglyListNode<T>(data);

    if (!this.head) {
      this.head = listNode;
    }

    listNode.next = this.head;

    this.head = listNode;
    this.size += 1;
  }

  search(value: T): ISinglyListNode<T> | undefined {
    if (!this.head) {
      return;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === value) {
        return currentNode;
      }

      if (!currentNode?.next) {
        break;
      }

      currentNode = currentNode.next;
    }
  }
}
