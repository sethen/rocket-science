import { describe, expect, test } from '@jest/globals';
import { Stack } from './';

describe('Stack', () => {
  it('should be able to act like a stack', () => {
    const stack = new Stack<number>();

    stack.push(1);

    expect(stack.size()).toBe(1);
    expect(stack.toString()).toEqual('1');

    stack.push(2);

    expect(stack.size()).toBe(2);
    expect(stack.toString()).toEqual('1,2');


    stack.pop();
    expect(stack.size()).toBe(1);
    expect(stack.toString()).toEqual('1');


    stack.pop();
    expect(stack.size()).toBe(0);
    expect(stack.toString()).toEqual('');
  })
})
