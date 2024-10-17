import { ITreeNode, TreeNode } from '../../data-structures/TreeNode';

export class BinarySearchTree<T> {
  public root: ITreeNode<T> | undefined;

  constructor(value?: T) {
    this.root = value ? new TreeNode<T>(value) : undefined;
  }

  insert(value: T) {
    // create new node regardless
    var newNode = new TreeNode(value);

    // if there is no root in the tree
    if (this.root === undefined){
      // set the root
      this.root = newNode;

      return this;
    }
    else {
      // cursor for current root
      var current = this.root;

      while (true) {
        if (value === current.value) {
          return;
        }

        if (value < current.value) {
          if (current.left === undefined){
            current.left = newNode;

            return this;
          }

          current = current.left;
        } else {
          if (current.right === undefined){
            current.right = newNode;

            return this;
          } 

          current = current.right;
        }
      }
    }
  }
}
