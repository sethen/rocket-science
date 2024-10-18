# Rocket Science
This is a repository full of implementations for common algorithms and data structures.  These are written in TypeScript and provide comments to help you understand what's happening.


# Tables of Contents

* [General Resources I Like](#general-resources-i-like)
  * [Articles](#articles)
  * [Books](#books)
  * [Websites](#websites)
  * [YouTube](#youtube)
* [How to Use](#how-to-use)
* [Algorithms](#algorithms)
  * [Misc](#misc)
    * [Two Sum](#two-sum)
  * [Search](#search)
    * [Binary Search](#binary-search)
  * [Sliding Window](#sliding-window)
    * [Max Sub Array](#max-sub-array)
  * [Sort](#sort)
    * [Bubble Sort](#bubble-sort)
* [Data Structures](#data-structures)
  * [List](#list)
    * [Queue](#queue)
    * [Singly Linked List](#singly-linked-list)
    * [Stack](#stack)

# General Resources I Like 
There are some general resources out there that I like -- various YouTube channels, articles and the like.  Feel free to look through them:

## Articles
* [14 Patterns to Ace Any Coding Interview Question](https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed)

## Books
* [Grokking Algorithms, Second Edition](https://www.amazon.com/Grokking-Algorithms-Second-Aditya-Bhargava/dp/1633438538)

## Websites
* [AlgoMap](https://algomap.io/)

## YouTube
* [NeetCode](https://www.youtube.com/c/neetcode)
* [Greg Hogg](https://www.youtube.com/@GregHogg)


# How to Use 
This repository is simple and doesn't require much in the way of usage.  You need `Node.js` installed and need to run `npm install` to get everything installed.  You can use `npm run test` for testing, `npm run build` for building and `npm run debug` to run the node debugger in chrome.

* `npm run build` for building the project
* `npm run test` to run unit tests
* `npm run debug` to debug in Google Chrome (remember to use debugger statement)


# Algorithms
You can find all of these implementations at [./src/algorithms](./src/algorithms)

## Misc
You can find all of these implementations at [./src/algorithms/misc](./src/algorithms/misc)

## Two Sum 
You can find the implementation of Two Sum at [./src/algorithms/two-sum/index.ts](./src/algorithms/two-sum/index.ts)

Two Sum problem involves finding two numbers in an array that add up to a given target. The goal is to return the indices of these two numbers.  A common, optimized approach uses a hash map to store the numbers and their indices as you iterate through the array. For each number, you calculate the complement (target minus the current number) and check if it's already in the map. If it is, you return the indices of the complement and the current number. 

### Steps
* Iterate through the array while keeping track of each number's complement (target minus the current number)
* Use a hash map to store the numbers and their indices as you go
* For each number, check if its complement already exists in the hash map
* If found, return the indices of the complement and the current number

### Example:
For an array `[2, 7, 11, 15]` and target `9`:

* Complement of `2` is `7`, store `2` in the map
* Complement of `7` is `2`, which is already in the map
* Return indices `[0, 1]`.

### Time Complexity
O(n), where n is the number of elements, because the array is traversed once, and hash map operations take constant time.  Two Sum is efficient for large datasets due to its use of a hash map, making it a common interview question and practical solution for sum-based problems.

### Resources
* Python implementation - [Short](https://www.youtube.com/shorts/pFag4mBsO1I)
* Python implementation - [Short](https://www.youtube.com/shorts/ysifKoOZw5g)
* [Leetcode 1](https://leetcode.com/problems/two-sum/description/)


## Search
You can find all of these implementations at [./src/algorithms/search](./src/algorithms/search)

## Binary Search
You can find the implementation of Binary Search at [./src/algorithms/search/binary-search/index.ts](./src/algorithms/search/binary-search/index.ts)

Binary Search is an efficient algorithm used to find the position of a target value within a _sorted_ array.  Search faster for great good!  It works by repeatedly dividing the search interval in half. If the *target value is less* than the middle element, you eliminate everything above the middle element.  If *target value is greater* than the middle element, you eliminate everything below the middle element. This process repeats until the target is found or the interval is empty.

### Steps
* Start with the entire sorted array
* Compare the middle element with the target value
* If the target equals the middle element, return its index
* If the target is smaller than the middle element, repeat the search on the left half
* If the target is larger, repeat the search on the right half
* Continue this process until the target is found or the array can no longer be divided

### Example
For a sorted array `[1, 3, 5, 7, 9]` and target `7`:

* Compare with middle element `5`, target is larger, search right half
* Compare with middle element `7`, target is found, return index `3`.

### Time Complexity
Binary search operates in **O(log n)** time complexity, making it much faster than linear search for large datasets, but it requires the data to be sorted.  **O(log n)**, where n is the number of elements, because the search space is halved with each step.

### Resources
* JavaScript implementation - [Binary Search in 100 Seconds](https://www.youtube.com/watch?v=MFhxShGxHWch)
* Python implementation - [Binary Search - Leetcode 704 - Python](https://www.youtube.com/watch?v=s4DPM8ct1pI)
* [Leetcode 704](https://leetcode.com/problems/binary-search/description/)

## Sliding Window
You can find all of these implementations at [./src/algorithms/sliding-window](./src/algorithms/sliding-window)

## Max Sub Array
You can find the implementation of Max Sub Array at [./src/algorithms/sliding-window/max-sub-array/index.ts](./src/algorithms/sliding-window/max-sub-array/index.ts)

The Maximum Subarray problem involves finding the contiguous subarray within a given array of integers that has the largest sum.

### Steps:
* Start from the first element and keep a running sum of the current subarray.
* If the running sum becomes negative, reset it to the current element (because a negative sum would reduce the overall maximum).
* Track the maximum sum encountered during the process.
* Continue until all elements have been processed.

### Example:
For an array `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`, the maximum subarray is `[4, -1, 2, 1]`, with a sum of `6`.

### Time Complexity:
**O(n)**, where n is the number of elements, using Kadane's Algorithm, which processes each element once.  The maximum subarray problem is useful in scenarios that require finding the largest sum in a sequence of numbers, such as financial analyses or performance evaluations.

### Resources
* Python implementation - [Maximum Subarray - Amazon Coding Interview Question - Leetcode 53 - Python](https://www.youtube.com/watch?v=5WZl3MMT0Eg)
* Kadane's Algorithm - [Kadane's Algorithm to Maximum Sum Subarray Problem](https://www.youtube.com/watch?v=86CQq3pKSUw)
* [Leetcode 53](https://leetcode.com/problems/maximum-subarray/description/)

## Sort
You can find all of these implementations at [./src/algorithms/sort](./src/algorithms/sort)

## Bubble Sort
You can find the implementation of Bubble Sort at [./src/algorithms/sort/bubble-sort/index.ts](./src/algorithms/sort/bubble-sort/index.ts)

Bubble sort is a simple, comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process continues until no more swaps are needed, meaning the list is sorted.  Bubble sort is not efficient for large datasets, but it’s easy to understand and implement, making it useful for educational purposes.

### Steps:
* Starting from the beginning of the list, compare each pair of adjacent elements
* If the current element is greater than the next, swap them
* Continue this process for all elements. After each pass, the largest element "bubbles" to its correct position
* Repeat until the entire list is sorted

### Example:
For an array `[5, 3, 8, 4, 2]`:

* Compare 5 and 3, swap -> `[3, 5, 8, 4, 2]`
* Compare 5 and 8, no swap
* Compare 8 and 4, swap -> `[3, 5, 4, 8, 2]`
* Continue until the array is sorted -> `[2, 3, 4, 5, 8]`

### Time Complexity:
* Worst and Average case: `O(n²)` (when the array is in reverse order or random)
* Best case: `O(n)` (when the array is already sorted)

### Resources
* Java implementation - [Learn Bubble Sort in 7 minutes](https://www.youtube.com/watch?v=Dv4qLJcxus8)


# Data Structures
Here are all of the data structures that are implemented in this repository.

## List
You can find all of these implementations at [./src/algorithms/list](./src/algorithms/list)

## Queue
You can find the implementation of a Queue at [./src/data-structures/list/queue/index.ts](./src/data-structures/list/queue/index.ts)

A queue is a linear data structure that follows the First In, First Out (FIFO) principle, meaning the first element added to the queue will be the first one to be removed. It is similar to a real-life queue, like waiting in line—those who arrive first get served first.

### Key Operations
* **dequeue**
  * Remove an element from the front of the queue (think shift in arrays)
* **enqueue(value)**
  * Add an element to the back of the queue (think push in arrays)
* **isEmpty**
  * Check if the queue is empty (looks at the length of the array)
* **peek**
  * Retrieve the element at the front of the queue without removing it
* **size**
  * Retrieve the size of the queue

### Use Cases
* Scheduling tasks in operating systems (like managing print jobs or CPU tasks)
* Breadth-First Search (BFS) in graphs
* Message Queuing systems in distributed applications
* Queues are typically implemented using arrays or linked lists and are fundamental in managing tasks that need to be processed in order


## Stack
You can find the implementation of a Stack at [./src/data-structures/stack/index.ts](./src/data-structures/list/stack/index.ts)

A stack is a linear data structure that follows the Last In, First Out (LIFO) principle, meaning the last element added to the stack will be the first one removed. It is similar to a stack of plates, where the plate placed on top is the first to be taken off.

### Implemented Methods 
* **peak**
  * Returns first element
* **isEmpty**
  * Checks to see if stack is empty
* **pop**
  * Removes element from the end of the stack
* **push(value)**
  * Add value to the end of the stack

### Use Cases
* Function call stack in programming
* Expression evaluation (e.g., parsing parentheses)
* Backtracking algorithms like Depth-First Search (DFS)
* Stacks can be implemented using arrays or linked lists and are crucial for scenarios where you need to manage data in reverse order


## Singly Linked List
You can find the implementation of a Singly Linked List at [./src/data-structures/singly-linked-list/index.ts](./src/data-structures/list/singly-linked-list/index.ts)

A Singly Linked List is a linear data structure made up of nodes, where each node contains two elements:
* **data**: The value or content of the node
* **next**: A link to the next node in the sequence

Unlike arrays, linked lists do not store elements in contiguous memory locations. Instead, each element (node) points to the next location in memory.

### Implemented Methods
* **clear**
  * Clears list entirely
* **pop**
  * Removes last element in the list
* **push(value)**
  * Add element to the end of the list
* **findByIndex(index)**
  * Find a node based on its index
* **findByValue(value)**
  * Find a node based on its value
* **shift**
  * Removes element from the beginning of the list
* **unshift(value)**
  * Add element to the beginning of the list

### Use Cases:
* Efficient insertions and deletions at any position
* Dynamic memory allocation where size can grow or shrink as needed
