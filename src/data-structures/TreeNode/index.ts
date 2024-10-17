export interface ITreeNode<T> {
  value: T; 
  left: ITreeNode<T> | undefined;
  right: ITreeNode<T> | undefined;
}

export class TreeNode<T> implements ITreeNode<T> {
  public value: T;
  public left: ITreeNode<T> | undefined;
  public right: ITreeNode<T> | undefined;

  constructor(value: T) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }
}
