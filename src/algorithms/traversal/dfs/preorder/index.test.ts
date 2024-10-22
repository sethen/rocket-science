
import { describe, expect } from '@jest/globals';
import { BinarySearchTree } from '../../../../data-structures/tree/binary-search-tree/';
import { traversalDFSPreorder } from './';

describe('traversal', () => {
  describe('dfs', () => {
    let traversal: Array<number> = [];

    beforeEach(() => {
      traversal = [];
    });

    describe('preorder', () => {
      it('should be able to do a preorder traversal', () => {
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

        const root = binaryTree.getRoot();

        traversalDFSPreorder(root, (value: number) => traversal.push(value));

        expect(traversal).toEqual([ 10, 4, 1, 11 ]);
      })
    })
  })
})
