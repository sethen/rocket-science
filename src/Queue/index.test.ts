import { describe, expect, test } from '@jest/globals';
import { Queue } from './';

describe('queue', () => {
  it('should be able to act like a queue', () => {
    const queue = new Queue<number>();

    queue.enqueue(1);

    expect(queue.size()).toBe(1);
    expect(queue.toString()).toEqual('1');

    queue.enqueue(2);

    expect(queue.size()).toBe(2);
    expect(queue.toString()).toEqual('1,2');

    queue.dequeue();

    expect(queue.size()).toBe(1);
    expect(queue.toString()).toEqual('2');

    queue.dequeue();

    expect(queue.size()).toBe(0);
    expect(queue.toString()).toEqual('');
  })
})
