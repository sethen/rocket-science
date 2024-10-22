import { ITreeNode, TreeNode } from '../tree-node';

export class BinarySearchTree<T> {
  private root: ITreeNode<T> | undefined;
  private traversal: Array<T> | undefined;

  constructor(value?: T) {
    this.root = value ? new TreeNode<T>(value) : undefined;
    this.traversal = undefined;
  }

  public getRoot() {
    return this.root;
  }

  public getTraversal() {
    return this.traversal;
  }

  public insert(value: T) {
    // create new node regardless
    var newNode = new TreeNode(value);

    // if there is no root in the tree
    if (this.root === undefined){
      // set the root
      this.root = newNode;

      return;
    }
    else {
      // cursor for current root
      var current = this.root;

      // start loop
      while (true) {
        // if value is equal to the curren value
        // ignore it -- no duplicates!
        if (value === current.value) {
          return;
        }

        // if the value we're inserting
        // is less than the current value
        if (value < current.value) {
          // and the left node is undefined
          if (current.left === undefined){
            // the tree node goes on the left
            current.left = newNode;

            return;
          }

          // update current to the left node
          // to keep walking down the tree
          current = current.left;
        } else {
          // if the current right node is undefined
          if (current.right === undefined){
            // the tree node goes on the right
            current.right = newNode;

            return;
          } 

          // update current to the right node
          // to keep walking down the tree
          current = current.right;
        }
      }
    }
  }

  public preorderTraversalDFS(node: TreeNode<T> | undefined) {
    if (!this.root || !node) {
      return;
    }

    if (!this.traversal) {
      this.traversal = [];
    }

    const {
      left,
      right,
      value
    } = node;

    this.traversal.push(value);
    this.preorderTraversalDFS(left);
    this.preorderTraversalDFS(right);
  }
}
