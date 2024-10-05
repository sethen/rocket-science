import { ListNode } from './ListNode';

export class LinkedList<T> {
  head: ListNode<T> | null;
  size: number;

  constructor(data?: T) {
    this.head = data ? new ListNode<T>(data) : null;
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

  push(data: T) {
    const listNode = new ListNode<T>(data);

    if (!this.head) {
      this.head = listNode;
    }

    this.head.next = listNode;
    this.size += 1;
  }
}
