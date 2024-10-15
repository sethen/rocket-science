// queues are FIFO -> first in first out
// think of it as a line
// whatever comes in first goes out first
export class Queue<T> {
  private storage: Array<T> = [];

  // remove an item from the beginning 
  dequeue(): T | undefined {
    return this.storage.shift();
  }

  // add an item to the end
  enqueue(item: T) {
    this.storage.push(item);
  }

  size(): number {
    return this.storage.length;
  }

  toString(): string {
    return this.storage.toString();
  }
}
