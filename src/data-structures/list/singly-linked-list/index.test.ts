import { describe, expect } from '@jest/globals';
import { SinglyLinkedList } from './';

describe('SinglyLinkedList', () => {
  describe('clear', () => {
    it('should be able to clear list', () => {
      const testSinglyLinkedList = new SinglyLinkedList<number>(1);

      expect(testSinglyLinkedList.size).toEqual(1);
      expect(testSinglyLinkedList.head?.data).toEqual(1);
      expect(testSinglyLinkedList.tail?.data).toEqual(1);

      testSinglyLinkedList.clear();

      expect(testSinglyLinkedList.size).toEqual(0);
      expect(testSinglyLinkedList.head).toEqual(undefined);
      expect(testSinglyLinkedList.tail).toEqual(undefined);
    })
  })

  describe('pop', () => {
    it('should be able to remove list nodes from the end of the list', () => {
      const testSinglyLinkedList = new SinglyLinkedList<number>();

      testSinglyLinkedList.push(2);
      testSinglyLinkedList.pop();

      expect(testSinglyLinkedList.size).toEqual(0);
    })
  })

  describe('push', () => {
    it('should be able to add new list nodes to the end of the list when head is not present', () => {
      const testSinglyLinkedList = new SinglyLinkedList<number>();

      testSinglyLinkedList.push(2);

      expect(testSinglyLinkedList.size).toEqual(1);
      expect(testSinglyLinkedList.head?.data).toEqual(2);
      expect(testSinglyLinkedList.tail?.data).toEqual(2);

      testSinglyLinkedList.push(3);

      expect(testSinglyLinkedList.size).toEqual(2);
      expect(testSinglyLinkedList.head?.data).toEqual(2);
      expect(testSinglyLinkedList.tail?.data).toEqual(3);
    })

    it('should be able to add new list nodes to the end of the list when head is present', () => {
      const testSinglyLinkedList = new SinglyLinkedList<number>(1);

      testSinglyLinkedList.push(2);

      expect(testSinglyLinkedList.size).toEqual(2);
      expect(testSinglyLinkedList.tail?.data).toEqual(2);

      testSinglyLinkedList.push(3);

      expect(testSinglyLinkedList.size).toEqual(3);
      expect(testSinglyLinkedList.tail?.data).toEqual(3);
    })
  })

  describe('search', () => {
    it('should be able to search list nodes and find a value', () => {
      const testSinglyLinkedList = new SinglyLinkedList<number>();
      
      testSinglyLinkedList.push(1);
      testSinglyLinkedList.push(2);
      testSinglyLinkedList.push(3);
      testSinglyLinkedList.push(4);

      expect(testSinglyLinkedList.search(4)).toEqual({ data: 4 });
      expect(testSinglyLinkedList.search(3)).toEqual({ data: 3, next: { data: 4 } });
    });


    it('should be able to add list nodes to the beginning of the list when head is present', () => {
      const testSinglyLinkedList = new SinglyLinkedList<number>(1);

      testSinglyLinkedList.unshift(2);
      testSinglyLinkedList.unshift(3);

      expect(testSinglyLinkedList.head?.data).toEqual(3);
      expect(testSinglyLinkedList.size).toEqual(3);
    });
  });

  describe('shift', () => {
    it('should be able to remove list nodes from the beginning of the list when head is not present', () => {
      const testSinglyLinkedList = new SinglyLinkedList<number>();

      testSinglyLinkedList.push(1);
      testSinglyLinkedList.push(2);
      testSinglyLinkedList.shift();

      expect(testSinglyLinkedList.head?.data).toEqual(2);
      expect(testSinglyLinkedList.size).toEqual(1);

      testSinglyLinkedList.shift();

      expect(testSinglyLinkedList.head).toEqual(undefined);
      expect(testSinglyLinkedList.size).toEqual(0);
    });

    it('should be able to remove list nodes from the beginning of the list when head is present', () => {
      const testSinglyLinkedList = new SinglyLinkedList<number>(1);

      testSinglyLinkedList.push(2);
      testSinglyLinkedList.push(3);
      testSinglyLinkedList.shift();

      expect(testSinglyLinkedList.head?.data).toEqual(2);
      expect(testSinglyLinkedList.size).toEqual(2);

      testSinglyLinkedList.shift();

      expect(testSinglyLinkedList.head?.data).toEqual(3);
      expect(testSinglyLinkedList.size).toEqual(1);
    });
  });


  describe('unshift', () => {
    it('should be able to add list nodes to the beginning of the list when head is not present', () => {
      const testSinglyLinkedList = new SinglyLinkedList<number>();

      testSinglyLinkedList.unshift(1);
      testSinglyLinkedList.unshift(2);

      expect(testSinglyLinkedList.head?.data).toEqual(2);
      expect(testSinglyLinkedList.size).toEqual(2);
    });


    it('should be able to add list nodes to the beginning of the list when head is present', () => {
      const testSinglyLinkedList = new SinglyLinkedList<number>(1);

      testSinglyLinkedList.unshift(2);
      testSinglyLinkedList.unshift(3);

      expect(testSinglyLinkedList.head?.data).toEqual(3);
      expect(testSinglyLinkedList.size).toEqual(3);
    });
  });
})
