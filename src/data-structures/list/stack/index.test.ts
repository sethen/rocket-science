import { describe, expect, test } from '@jest/globals';
import { Stack } from './';

describe('Stack', () => {
  it('should be able to act like a stack', () => {
    const stack = new Stack<number>();

    expect(stack.isEmpty()).toBe(true);

    stack.push(1);

    expect(stack.size()).toBe(1);
    expect(stack.getStack()).toEqual([ 1 ]);
    expect(stack.isEmpty()).toBe(false);

    stack.push(2);

    expect(stack.size()).toBe(2);
    expect(stack.getStack()).toEqual([ 1, 2 ]);
    expect(stack.isEmpty()).toBe(false);

    stack.pop();
    expect(stack.size()).toBe(1);
    expect(stack.getStack()).toEqual([ 1 ]);


    stack.pop();
    expect(stack.size()).toBe(0);
    expect(stack.getStack()).toEqual([]);
    expect(stack.isEmpty()).toBe(true);
  })
})
