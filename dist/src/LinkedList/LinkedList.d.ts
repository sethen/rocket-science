import { ListNode } from './ListNode';
export declare class LinkedList<T> {
    head: ListNode<T> | null;
    size: number;
    tail: ListNode<T> | null;
    constructor(data?: T);
    clear(): void;
    pop(): void;
    push(data: T): void;
    shift(): void;
    unshift(data: T): void;
}
//# sourceMappingURL=LinkedList.d.ts.map