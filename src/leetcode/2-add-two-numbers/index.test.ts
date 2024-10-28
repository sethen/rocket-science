import { describe, expect, test } from '@jest/globals';
import { addTwoNumbers } from '../../leetcode/2-add-two-numbers';
import { SinglyListNode } from '../../data-structures/list/singly-list-node'

describe('addTwoNumbers', () => {
  it('should be able add two numbers together taken from a linked list', () => {
    const nodeOne = new SinglyListNode<number>(3);
    const nodeTwo = new SinglyListNode<number>(4);
    const nodeThree = new SinglyListNode<number>(2);
    const nodeFour = new SinglyListNode<number>(4);
    const nodeFive = new SinglyListNode<number>(6);
    const nodeSix = new SinglyListNode<number>(5);

    nodeOne.next = nodeTwo;
    nodeTwo.next = nodeThree;
    nodeFour.next = nodeFive;
    nodeFive.next = nodeSix;
  
    const sumNodeOne = new SinglyListNode<number>(7);
    const sumNodeTwo = new SinglyListNode<number>(0);
    const sumNodeThree = new SinglyListNode<number>(8);

    sumNodeOne.next = sumNodeTwo;
    sumNodeTwo.next = sumNodeThree;

    expect(addTwoNumbers(nodeOne, nodeFour)).toEqual(sumNodeOne);
  })
})
