import { describe, expect } from '@jest/globals';
import { BinarySearchTree } from '../../../../data-structures/tree/binary-search-tree/';
import { traversalDFSPreorder } from './';

describe('traversal', () => {
  describe('dfs', () => {
    let traversal: Array<number> = [];

    beforeEach(() => {
      traversal = [];
    });

    describe('traversalDFSPreorder', () => {
      it('should be able to do a traversal dfs preorder', () => {
        /****************
            200 
           /   \
         150   210
         /\     / \
       130 160 205 220 
      *****************/

        const binaryTree = new BinarySearchTree<number>();

        binaryTree.insert(200);
        binaryTree.insert(150);
        binaryTree.insert(210);
        binaryTree.insert(130);
        binaryTree.insert(205);
        binaryTree.insert(160);
        binaryTree.insert(220);

        const root = binaryTree.getRoot();

        traversalDFSPreorder(root, (value: number) => traversal.push(value));

        expect(traversal).toEqual([ 200, 150, 130, 160, 210, 205, 220 ]);
      })
    })
  })
})