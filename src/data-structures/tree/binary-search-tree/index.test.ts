import { describe, expect, test } from '@jest/globals';
import { BinarySearchTree } from './';

describe('BinarySearchTree', () => {
  describe('insert', () => {
    it('should be able to insert values', () => {
      /**************
            10 
           / \
          4  11 
         /
        1
      *************/

      const binaryTree = new BinarySearchTree<number>();

      binaryTree.insert(10);
      binaryTree.insert(11);
      binaryTree.insert(4);
      binaryTree.insert(1);

      expect(binaryTree.getRoot()?.value).toBe(10)
      expect(binaryTree.getRoot()?.left?.value).toBe(4)
      expect(binaryTree.getRoot()?.right?.value).toBe(11)
      expect(binaryTree.getRoot()?.left?.left?.value).toBe(1)
    })
  })
})
