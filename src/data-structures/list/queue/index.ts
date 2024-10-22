// queues are FIFO -> first in first out
// think of it as a line
// whatever comes in first goes out first
export class Queue<T> {
  private queue: Array<T> = [];

  // remove an item from the beginning 
  public dequeue(): T | undefined {
    return this.queue.shift();
  }

  // add an item to the end
  public enqueue(item: T) {
    this.queue.push(item);
  }

  public isEmpty() {
    return this.size() === 0;
  }

  public peek() {
    return this.queue[ 0 ];
  }

  public size(): number {
    return this.queue.length;
  }
}
