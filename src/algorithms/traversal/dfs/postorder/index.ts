import { ITreeNode } from '../../../../data-structures/tree/tree-node';

export function traversalDFSPreorder<T>(node: ITreeNode<T> | undefined, callback: (value: T) => number) {
  if (!node) {
    return;
  }

  const {
    left,
    right,
    value
  } = node;

  traversalDFSPreorder(left, callback);
  traversalDFSPreorder(right, callback);
  callback(value);
}
