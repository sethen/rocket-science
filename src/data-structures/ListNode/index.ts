export interface IListNode<T> {
  data: T;
  next: IListNode<T> | undefined;
}

export class ListNode<T> implements IListNode<T> {
  public data: T;
  public next: IListNode<T> | undefined;

  constructor(data: T) {
    this.data = data;
    this.next = undefined;
  }
}
