export interface ISinglyListNode<T> {
  data: T;
  next: ISinglyListNode<T> | undefined;
}

export class SinglyListNode<T> implements ISinglyListNode<T> {
  public data: T;
  public next: ISinglyListNode<T> | undefined;

  constructor(data: T) {
    this.data = data;
    this.next = undefined;
  }
}
