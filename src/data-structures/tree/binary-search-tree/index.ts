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

    if (!this.root) {
      this.root = newNode;
    }
    else {
      this.insertNode<T>(this.root, newNode);
    }
  }

  private insertNode<T>(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) {
      if (node.left === undefined) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === undefined) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}
