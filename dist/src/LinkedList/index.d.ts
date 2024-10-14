declare class ListNode<T> {
    data: T;
    next: ListNode<T> | null;
    constructor(data: T);
}
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
export {};
//# sourceMappingURL=index.d.ts.map