// a stack is a LIFO -> last in first out
// think of it like a stack of papers
// whatever comes in last goes out first
export class Stack<T> {
  private stack: Array<T> = [];

  public isEmpty() {
    return this.size() === 0;
  }

  public peak() {
    return this.stack[ 0 ]
  }
 
  // remove an item from the end
  public pop(): T | undefined {
    return this.stack.pop();
  }

  // add an item to the end
  public push(item: T): void {
    this.stack.push(item);
  }

  public size() {
    return this.stack.length;
  }
}
