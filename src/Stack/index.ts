// a stack is a LIFO -> last in first out
// think of it like a stack of papers
// whatever comes in last goes out first
export class Stack<T> {
  private storage: Array<T> = [];

  // remove an item from the end
  pop(): T | undefined {
    return this.storage.pop();
  }

  // add an item to the end
  push(item: T): void {
    this.storage.push(item);
  }

  size() {
    return this.storage.length;
  }

  toString() {
   return this.storage.toString();
  }
}
