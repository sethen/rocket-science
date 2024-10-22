import { ITreeNode } from '../../../../data-structures/tree/tree-node';

export function traversalDFSInorder<T>(node: ITreeNode<T> | undefined, callback: (value: T) => number) {
  if (!node) {
    return;
  }

  const {
    left,
    right,
    value
  } = node;

  traversalDFSInorder(left, callback);
  callback(value);
  traversalDFSInorder(right, callback);
}
