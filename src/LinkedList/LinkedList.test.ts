import { describe, expect, test } from '@jest/globals';
import { LinkedList } from './LinkedList';

describe('LinkedList', () => {
  describe('shift', () => {
    it('should be able to shift list nodes', () => {
      const testLinkedList = new LinkedList<Number>();

      testLinkedList.push(1);
      testLinkedList.push(2);
      testLinkedList.shift();

      expect(testLinkedList.head?.data).toEqual(2);
      expect(testLinkedList.size).toEqual(1);

      testLinkedList.shift();

      expect(testLinkedList.head).toEqual(null);
      expect(testLinkedList.size).toEqual(0);
    });
  });

  describe('push', () => {
    it('should be able to push new list nodes', () => {
      const testLinkedList = new LinkedList<Number>();

      testLinkedList.push(1);

      expect(testLinkedList.head?.data).toEqual(1);
      expect(testLinkedList.size).toEqual(1);

      testLinkedList.push(2);

      expect(testLinkedList.head?.next?.data).toEqual(2);
      expect(testLinkedList.size).toEqual(2);
    })
  })
})
