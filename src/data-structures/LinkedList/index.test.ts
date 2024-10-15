import { describe, expect, test } from '@jest/globals';
import { LinkedList } from './';

describe('LinkedList', () => {
  describe('clear', () => {
    it('should be able to clear list', () => {
      const testLinkedList = new LinkedList<Number>(1);

      expect(testLinkedList.size).toEqual(1);
      expect(testLinkedList.head?.data).toEqual(1);
      expect(testLinkedList.tail?.data).toEqual(1);

      testLinkedList.clear();

      expect(testLinkedList.size).toEqual(0);
      expect(testLinkedList.head).toEqual(null);
      expect(testLinkedList.tail).toEqual(null);
    })
  })

  describe('pop', () => {
    it('should be able to remove list nodes from the end of the list', () => {
      const testLinkedList = new LinkedList<Number>();

      testLinkedList.push(2);
      testLinkedList.pop();

      expect(testLinkedList.size).toEqual(0);
    })
  })

  describe('push', () => {
    it('should be able to add new list nodes to the end of the list when head is not present', () => {
      const testLinkedList = new LinkedList<Number>();

      testLinkedList.push(2);

      expect(testLinkedList.size).toEqual(1);
      expect(testLinkedList.head?.data).toEqual(2);
      expect(testLinkedList.tail?.data).toEqual(2);

      testLinkedList.push(3);

      expect(testLinkedList.size).toEqual(2);
      expect(testLinkedList.head?.data).toEqual(2);
      expect(testLinkedList.tail?.data).toEqual(3);
    })

    it('should be able to add new list nodes to the end of the list when head is present', () => {
      const testLinkedList = new LinkedList<Number>(1);

      testLinkedList.push(2);

      expect(testLinkedList.size).toEqual(2);
      expect(testLinkedList.tail?.data).toEqual(2);

      testLinkedList.push(3);

      expect(testLinkedList.size).toEqual(3);
      expect(testLinkedList.tail?.data).toEqual(3);
    })
  })

  describe('shift', () => {
    it('should be able to remove list nodes from the beginning of the list when head is not present', () => {
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

    it('should be able to remove list nodes from the beginning of the list when head is present', () => {
      const testLinkedList = new LinkedList<Number>(1);

      testLinkedList.push(2);
      testLinkedList.push(3);
      testLinkedList.shift();

      expect(testLinkedList.head?.data).toEqual(2);
      expect(testLinkedList.size).toEqual(2);

      testLinkedList.shift();

      expect(testLinkedList.head?.data).toEqual(3);
      expect(testLinkedList.size).toEqual(1);
    });
  });
  

  describe('unshift', () => {
    it('should be able to add list nodes to the beginning of the list when head is not present', () => {
      const testLinkedList = new LinkedList<Number>();

      testLinkedList.unshift(1);
      testLinkedList.unshift(2);

      expect(testLinkedList.head?.data).toEqual(2);
      expect(testLinkedList.size).toEqual(2);
    });


    it('should be able to add list nodes to the beginning of the list when head is present', () => {
      const testLinkedList = new LinkedList<Number>(1);

      testLinkedList.unshift(2);
      testLinkedList.unshift(3);

      expect(testLinkedList.head?.data).toEqual(3);
      expect(testLinkedList.size).toEqual(3);
    });
  });
})
