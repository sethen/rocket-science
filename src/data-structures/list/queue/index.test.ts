import { describe, expect } from '@jest/globals';
import { Queue } from './';

describe('queue', () => {
  it('should be able to act like a queue', () => {
    const queue = new Queue<number>();

    expect(queue.isEmpty()).toBe(true);

    queue.enqueue(1);

    expect(queue.size()).toBe(1);
    expect(queue.queue).toEqual([ 1 ]);
    expect(queue.isEmpty()).toBe(false);

    queue.enqueue(2);

    expect(queue.size()).toBe(2);
    expect(queue.queue).toEqual([ 1, 2 ]);
    expect(queue.isEmpty()).toBe(false);

    queue.dequeue();

    expect(queue.size()).toBe(1);
    expect(queue.queue).toEqual([ 2 ]);
    expect(queue.isEmpty()).toBe(false);

    queue.dequeue();

    expect(queue.size()).toBe(0);
    expect(queue.queue).toEqual([]);
    expect(queue.isEmpty()).toBe(true);
  })
})
