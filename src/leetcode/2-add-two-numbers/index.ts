import { ISinglyListNode, SinglyListNode } from '../../data-structures/list/singly-list-node'

export function addTwoNumbers(nodeOne: ISinglyListNode<number> | undefined, nodeTwo: ISinglyListNode<number> | undefined): ISinglyListNode<number> | undefined {
  // make a new node
  let newNode = new SinglyListNode(0);
  // hold a reference to the new node
  let currentNode = newNode;
  // make a carry var to hold overflow
  let carry = 0;

  // if node one or node two or carry is not undefined
  while (nodeOne || nodeTwo || carry) {
    // get the values for the nodes
    let nodeOneValue = nodeOne?.data ?? 0;
    let nodeTwoValue = nodeTwo?.data ?? 0;
    // add up everything
    let sum = carry + nodeOneValue + nodeTwoValue;

    // round the sum down
    carry = Math.floor(sum / 10);
    // mod the sum
    // 7 % 10 = 10, 11 % 10 = 11, 22 % 10 = 2
    currentNode.next = new SinglyListNode(sum % 10);
    // the current node now becomes the next node
    currentNode = currentNode.next;

    // keep traveling down nodes
    nodeOne = nodeOne?.next;
    nodeTwo = nodeTwo?.next;
  }

  return newNode.next;
}
