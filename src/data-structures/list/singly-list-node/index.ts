export interface ISinglyListNode<T> {
  data: T | undefined;
  next: ISinglyListNode<T> | undefined;
}

export class SinglyListNode<T> implements ISinglyListNode<T> {
  public data: T | undefined;
  public next: ISinglyListNode<T> | undefined;

  constructor(data?: T | undefined) {
    this.data = data ?? undefined;
    this.next = undefined;
  }
}
