# Rocket Science
This is a repository dedicated to studying concepts in computer science.  Here you will find algorithms, data structures and resources to help you on your computer science journey.  There are implementations of common algorithms and data strucutres in TypeScript.  In the future I may provide more implementations in other languages.

# Tables of Contents
* [General Resources](#general-resources)
  * [Articles](#articles)
  * [Books](#books)
  * [Playlists](#playlists)
  * [Repositories](#repositories)
  * [Websites](#websites)
  * [YouTube](#youtube)
* [How to Use](#how-to-use)
* [Time & Space Complexity](#time--space-complexity)
* [Algorithms](#algorithms)
  * [Search](#search)
    * [Binary Search](#binary-search)
  * [Sliding Window](#sliding-window)
    * [Max Sub Array](#max-sub-array)
  * [Sort](#sort)
    * [Bubble Sort](#bubble-sort)
    * [Counting Sort](#counting-sort)
    * [Insertion Sort](#insertion-sort)
    * [Merge Sort](#merge-sort)
    * [Quick Sort](#quick-sort)
    * [Selection Sort](#selection-sort)
  * [Traversal](#traversal)
    * [DFS](#dfs)
      * [Inorder](#inorder)
      * [Postorder](#postorder)
      * [Preorder](#preorder)
* [Data Structures](#data-structures)
  * [List](#list)
    * [Queue](#queue)
    * [Singly Linked List](#singly-linked-list)
    * [Stack](#stack)
  * [Tree](#tree)
    * [Binary Search Tree](#binary-search-tree)
* [Leetcode](#leetcode)
  * [1. Two Sum](#1-two-sum)
  * [2. Add Two Numbers](#2-add-two-numbers)
  * [3. Longest Substring Without Repeating Characters](#3-longest-substring-without-repeating-characters)


# General Resources 
There are some general resources out there that I like -- various YouTube channels, articles and the like.  Feel free to look through them:

## Articles
* [Extra, Extra - Read All About It: Nearly All Binary Searches and Mergesorts are Broken](https://research.google/blog/extra-extra-read-all-about-it-nearly-all-binary-searches-and-mergesorts-are-broken/)
* [Learn Big O Notation](https://www.freecodecamp.org/news/learn-big-o-notation/)

## Books
* [Grokking Algorithms, Second Edition](https://www.amazon.com/Grokking-Algorithms-Second-Aditya-Bhargava/dp/1633438538)

## Repositories
* [System Design Primer](https://github.com/donnemartin/system-design-primer)
* [What Happens When](https://github.com/alex/what-happens-when)

## Websites
* [AlgoMap](https://algomap.io/)
* [freeCodeCamp](https://www.freecodecamp.org/)
* [Front End Masters](https://frontendmasters.com/)
* [Khan Academy](https://www.khanacademy.org/)
* [Learn X in Y](https://learnxinyminutes.com/)
* [StackOverflow](https://stackoverflow.com/)
* [Teach Yourself Computer Science](https://teachyourselfcs.com/)

## YouTube
YouTube has a lot of amazing content for you to check out -- from creators to content.

### Creators
* [Greg Hogg](https://www.youtube.com/@GregHogg)
* [NeetCode](https://www.youtube.com/@neetcode)
* [ThePrimeTimeagen](https://www.youtube.com/@ThePrimeTimeagen)

### Playlists
* [Analysis of Algorithms](https://www.youtube.com/watch?v=22hwcnXIGgk&list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&index=1)
* [Data Structures and Algorithms](https://www.youtube.com/watch?v=xX5iOYCJmBI&list=PLZPZq0r_RZON1eaqfafTnEexRzuHbfZX8)
* [Data Structures & Algorithms in Python - The Complete Pathway](https://www.youtube.com/watch?v=aWKEBEg55ps&list=PLKYEe2WisBTFEr6laH5bR2J19j7sl5O8R)

### Videos
* [Big O Notation - Full Course](https://www.youtube.com/watch?v=Mo4vesaut8g)
* [Time & Space Complexity - Big O Notation](https://youtu.be/aWKEBEg55ps?si=VvR7Yymf97-RwK1T)

# Time & Space Complexity
![Time Complexity Chart](/assets/images/time-complexity-chart.png)

It's important to know about Time & Space Complexity to understand how these algorithms perform as their input grows.  Here are some resrouces to help you on your journey:

* [Big O Notation - Full Course](https://www.youtube.com/watch?v=Mo4vesaut8g)
* [Learn Big O Notation](https://www.freecodecamp.org/news/learn-big-o-notation/)
* [Time & Space Complexity - Big O Notation](https://youtu.be/aWKEBEg55ps?si=VvR7Yymf97-RwK1T)

Here are the orders of growth from best to worst:

| Growth       | Name         |
| ------------ | ------------ |
| `O(1)`       | Constant     | 
| `O(log n)`   | Logarithmic  | 
| `O(n)`       | Linear       |
| `O(n log n)` | Linearithmic |
| `O(n^2)`     | Quadratic    |
| `O(n^3)`     | Cubic        |
| `O(2^n)`     | Exponential  |
| `O(n!)`      | Factorial    |


# How to Use 
This repository is simple and doesn't require much in the way of usage.  You need `Node.js` installed and need to run `npm install` to get everything installed.  Then you can use the following:

* `npm run build` for building the project
* `npm run test` to run unit tests
* `npm run debug` to debug in Google Chrome (remember to use debugger statement)


# Algorithms
You can find all of these implementations at [./src/algorithms](./src/algorithms)


## Traversal 
You can find all of the implementations of **Traversal** at [./src/algorithms/traversal](./src/algorithms/traversal)

**Traversal** refers to the process of visiting all the nodes or elements in a data structure, such as a tree or graph, in a systematic way. The goal is to access or process each element exactly once.

## DFS
You can find all of the implementations **DFS** at [./src/algorithms/traversal/dfs](./src/algorithms/traversal/dfs)

**Depth-First Search or DFS** is a graph or tree traversal algorithm that explores as far down a branch as possible before backtracking. It starts at a source node and explores each branch of the graph or tree by visiting child nodes recursively or using a stack for the iterative version.


## Inorder 
You can find the implementation of **Inorder** at [./src/algorithms/traversal/dfs/inorder](./src/algorithms/traversal/dfs/inorder/index.ts)

**Inorder** DFS is a tree traversal technique where nodes are visited in a specific order: first the left subtree, then the current node, followed by the right subtree -- `left` -> `node` -> `right`. This traversal is commonly used with binary search trees (BSTs) to retrieve nodes in ascending order.

### Steps
* Recursively traverse the left subtree
* Visit the current node.
* Recursively traverse the right subtree

### Example
For a binary tree:

```
    1
   / \
  2   3
 / \
4   5
```

The **Inorder** traversal visits the nodes in this order: `4, 2, 5, 1, 3`

### Time Complexity
`O(n)`, where `n` is the number of nodes, because each node is visited exactly once.

### Use Cases
**Inorder** traversal is commonly used in binary search trees (BSTs) to retrieve data in sorted order.

### Resources
* [Binary Trees & Binary Search Trees - DSA Course in Python Lecture 8](https://www.youtube.com/watch?v=EPwWrs8OtfI)
* [In-order tree traversal in 3 minutes](https://www.youtube.com/watch?v=5dySuyZf9Qg)

### Visuals
![Traversal DFS Inorder](./src/algorithms/traversal/dfs/inorder/images/traversal-dfs-inorder.png)


## Postorder 
You can find the implementation of **Postorder** at [./src/algorithms/traversal/dfs/postorder](./src/algorithms/traversal/dfs/postorder/index.ts)

**Postorder** DFS is a tree traversal method where you visit the nodes in a specific order: first the left subtree, then the right subtree, and finally the current node -- `left` -> `right` -> `node`. This method ensures that child nodes are processed before their parent nodes.

### Steps
* Recursively traverse the left subtree
* Recursively traverse the right subtree
* Visit the current node

### Example
For a binary tree:

```
    1
   / \
  2   3
 / \
4   5
````

The **Postorder** traversal visits the nodes in this order: `4, 5, 2, 3, 1`.

### Time Complexity
`O(n)`, where `n` is the number of nodes, because each node is visited exactly once.

### Use Cases
**Postorder** traversal is useful for operations like deleting a tree, evaluating expression trees, or processing child nodes before their parent (e.g., calculating node dependencies).

### Resources
* [Binary Trees & Binary Search Trees - DSA Course in Python Lecture 8](https://www.youtube.com/watch?v=EPwWrs8OtfI)
* [Post-order tree traversal in 2 minutes](https://www.youtube.com/watch?v=4zVdfkpcT6U)

### Visuals
![Traversal DFS Postorder](./src/algorithms/traversal/dfs/postorder/images/traversal-dfs-postorder.png)


## Preorder 
You can find the implementation of **Preorder** at [./src/algorithms/traversal/dfs/preorder](./src/algorithms/traversal/dfs/preorder/index.ts)

**Preorder** is a DFS tree traversal technique where you visit nodes in a specific order: first the current node, then its left subtree, followed by its right subtree (`node` -> `left` -> `right`). This traversal explores the entire left branch before moving to the right branch.

### Steps
For the binary tree:

```
    1
   / \
  2   3
 / \
4   5
```

The preorder traversal would be:

* Start at the root `1`.
* Traverse the left subtree:
  * Visit `2`, then its left child `4` and right child `5`
* Traverse the right subtree:
  * Visit `3`

Result would be `[1, 2, 4, 5, 3]`.

### Time Complexity
`O(n)`, where `n` is the number of nodes, because each node is visited exactly once.

### Use Cases
**Preorder** traversal is useful in scenarios where you need to explore nodes before their children, such as copying a tree, expression tree evaluation, or when you need to preserve node hierarchy in your traversal.

### Resources
* [Binary Trees & Binary Search Trees - DSA Course in Python Lecture 8](https://www.youtube.com/watch?v=EPwWrs8OtfI)
* [Pre-order tree traversal in 3 minutes](https://www.youtube.com/watch?v=1WxLM2hwL-U)

### Visuals
![Traversal DFS Preorder](./src/algorithms/traversal/dfs/preorder/images/traversal-dfs-preorder.png)


## Search
You can find all of the implementations of **Search** at [./src/algorithms/search](./src/algorithms/search)

## Binary Search
You can find the implementation of **Binary Search** at [./src/algorithms/search/binary-search/index.ts](./src/algorithms/search/binary-search/index.ts)

**Binary Search** is an efficient algorithm used to find the position of a target value within a _sorted_ array.  Search faster for great good!  It works by repeatedly dividing the search interval in half. If the _target value is less_ than the middle element, you eliminate everything above the middle element.  If _target value is greater_ than the middle element, you eliminate everything below the middle element. This process repeats until the target is found or the interval is empty.

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

### Time & Space Complexity
| Case    | Time       | Space  | Notes                                        |
| ------- | ---------- | ------ | -------------------------------------------- |
| Best    | `O(1)`     | `O(1)` |                                              |
| Average | `O(log n)` | `O(1)` | Where `n` is the number of elements          |
| Worst   | `O(log n)` | `O(1)` | Where `n` is the number of elements          |

**Binary search** typically operates in `O(log n)` time complexity, making it much faster than linear search for large datasets, but it requires the data to be sorted.  `O(log n)`, where `n` is the number of elements, because the search space is halved with each step.

### Resources
* JavaScript implementation - [Binary Search in 100 Seconds](https://www.youtube.com/watch?v=MFhxShGxHWch)
* Python implementation - [Binary Search - Leetcode 704 - Python](https://www.youtube.com/watch?v=s4DPM8ct1pI)
* [Leetcode 704](https://leetcode.com/problems/binary-search/description/)


## Sliding Window
You can find all of the implementations of **Sliding Window** at [./src/algorithms/sliding-window](./src/algorithms/sliding-window)

## Max Sub Array
You can find the implementation of **Max Sub Array** at [./src/algorithms/sliding-window/max-sub-array/index.ts](./src/algorithms/sliding-window/max-sub-array/index.ts)

**Max Sub Array** problem involves finding the contiguous subarray within a given array of integers that has the largest sum.

### Steps
* Start from the first element and keep a running sum of the current sub array
* If the running sum becomes negative, reset it to 0 (because a negative sum would reduce the overall max)
* Track the max sum encountered during the process
* Continue until all elements have been processed

### Example
For an array `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`, the **Max Sub Array** is `[4, -1, 2, 1]`, with a sum of `6`.

### Time Complexity
`O(n)`, where `n` is the number of elements, using Kadane's Algorithm, which processes each element once.  The **Max Sub Array** problem is useful in scenarios that require finding the largest sum in a sequence of numbers, such as financial analyses or performance evaluations.

### Resources
* Python implementation - [Maximum Subarray - Amazon Coding Interview Question - Leetcode 53 - Python](https://www.youtube.com/watch?v=5WZl3MMT0Eg)
* Kadane's Algorithm - [Kadane's Algorithm to Maximum Sum Subarray Problem](https://www.youtube.com/watch?v=86CQq3pKSUw)
* [Leetcode 53](https://leetcode.com/problems/maximum-subarray/description/)

## Sort
You can find all of the implementations of **Sort** at [./src/algorithms/sort](./src/algorithms/sort)

### Resources
* [Sorting: Bubble, Insertion, Selection, Merge, Quick, Counting Sort - DSA Course in Python Lecture 10](https://www.youtube.com/watch?v=gcRUIO-8r3U&t=709s)


## Bubble Sort
You can find the implementation of **Bubble Sort** at [./src/algorithms/sort/bubble-sort/index.ts](./src/algorithms/sort/bubble-sort/index.ts)

**Bubble Sort** is a simple, comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process continues until no more swaps are needed, meaning the list is sorted.  **Bubble Sort** is not efficient for large datasets, but it’s easy to understand and implement, making it useful for educational purposes.

### Steps
* Starting from the beginning of the list, compare each pair of adjacent elements
* If the current element is greater than the next, swap them
* Continue this process for all elements. After each pass, the largest element "bubbles" to its correct position
* Repeat until the entire list is sorted

### Example
For an array `[5, 3, 8, 4, 2]`:

* Compare `5` and `3`, swap -> `[3, 5, 8, 4, 2]`
* Compare `5` and `8`, no swap
* Compare `8` and `4`, swap -> `[3, 5, 4, 8, 2]`
* Continue until the array is sorted -> `[2, 3, 4, 5, 8]`

### Time & Space Complexity
| Case    | Time     | Space  | Notes                                        |
| ------- | -------- | ------ | -------------------------------------------- |
| Best    | `O(n)`   | `O(n)` | When the array is already sorted             |
| Average | `O(n^2)` | `O(n)` | When the array is in reverse order or random |
| Worst   | `O(n^2)` | `O(n)` | When the array is in reverse order or random |

**Bubble Sort** is not efficient for large datasets, but it’s easy to understand and implement, making it useful for educational purposes.

### Resources
* Java implementation - [Learn Bubble Sort in 7 minutes](https://www.youtube.com/watch?v=Dv4qLJcxus8)


## Counting Sort
You can find the implementation of **Counting Sort** at [./src/algorithms/sort/counting-sort/index.ts](./src/algorithms/sort/counting-sort/index.ts)

**Counting Sort** is a non-comparative, integer sorting algorithm that sorts elements by counting the occurrences of each unique value. It works best when sorting integers within a limited range.

### Steps
* Count Frequencies: Create a count array where each index represents a unique value in the input array, storing the frequency of each value
* Accumulate Counts: Modify the count array so each element at index i contains the sum of previous counts, giving the final positions of each element
* Place Elements: Build the sorted array by placing each element in its final position based on the count array.

### Example
For an array `[4, 2, 2, 8, 3, 3, 1]`:

* Count array (frequencies): `[0, 1, 2, 2, 1, 0, 0, 0, 1]`
* Cumulative count array: `[0, 1, 3, 5, 6, 6, 6, 6, 7]`
* Build the sorted array: `[1, 2, 2, 3, 3, 4, 8]`

### Use Cases
**Counting Sort** is efficient for sorting integers with a small range and is commonly used in situations where stability and linear time complexity are needed, like sorting exam scores or age groups. However, it’s less practical for large ranges due to space constraints.


## Insertion Sort
You can find the implementation of **Insertion Sort** at [./src/algorithms/sort/insertion-sort/index.ts](./src/algorithms/sort/insertion-sort/index.ts)

**Insertion Sort** is a simple, comparison-based sorting algorithm that builds a sorted array (or list) one element at a time by repeatedly picking an element from the unsorted portion and inserting it into its correct position in the sorted portion.

### Steps
* Start from the second element (assuming the first is already sorted)
* Compare the current element with the elements in the sorted portion
* Shift elements in the sorted portion to the right to create space
* Insert the current element into its correct position.
* Repeat until all elements are sorted

### Example
For an array `[5, 3, 8, 4, 2]`:

* First, `3` is inserted before `5`, resulting in `[3, 5, 8, 4, 2]`
* Then `8` stays in place, and `4` is inserted between `3` and `5`
* Finally, `2` is inserted at the start, giving `[2, 3, 4, 5, 8]`

### Time & Space Complexity
| Case    | Time     | Space  |
| ------- | -------- | ------ |
| Best    | `O(n)`   | `O(1)` |
| Average | `O(n^2)` | `O(1)` |
| Worst   | `O(n^2)` | `O(1)` |

**Insertion Sort** is efficient for small datasets or arrays that are already mostly sorted. It's easy to implement and understand but not suitable for large datasets due to its quadratic time complexity.

### Use Cases
**Insertion Sort** is efficient for small datasets or arrays that are already mostly sorted. It's easy to implement and understand but not suitable for large datasets due to its quadratic time complexity.

### Resources
* Java Implementation - [Learn Insertion Sort in 7 minutes](https://www.youtube.com/watch?v=8mJ-OhcfpYg)


## Merge Sort
You can find the implementation of **Merge Sort** at [./src/algorithms/sort/merge-sort/index.ts](./src/algorithms/sort/merge-sort/index.ts)

**Merge Sort** is a comparison-based sorting algorithm that follows the divide-and-conquer approach. It divides the array into smaller subarrays, sorts them individually, and then merges them back together in sorted order.

### Steps
* Divide the array into two halves until each subarray has only one element
* Recursively sort each half
* Merge the two sorted halves by comparing elements and arranging them in the correct order
* Repeat the merging process until all subarrays are combined into a fully sorted array.

### Example
For an array `[3, 1, 4, 1, 5, 9, 2, 6]`:

* Divide into `[3, 1, 4, 1]` and `[5, 9, 2, 6]`
* Recursively divide and sort each half.
* Merge sorted subarrays to get the fully sorted array `[1, 1, 2, 3, 4, 5, 6, 9]`.

### Time & Space Complexity
| Case    | Time         | Space  |
| ------- | ------------ | ------ |
| Best    | `O(n log n)` | `O(n)` |
| Average | `O(n log n)` | `O(n)` |
| Worst   | `O(n log n)` | `O(n)` |

### Use Cases
**Merge Sort** is stable and guarantees optimal performance, making it ideal for sorting linked lists or for scenarios where guaranteed `O(n log n)` performance is required. However, it requires additional memory for the merging process.

## Resources
* Java Implementation - [Learn Merge Sort in 13 Minutes](https://www.youtube.com/watch?v=3j0SWDX4AtU)


## Quick Sort
You can find the implementation of **Quick Sort** at [./src/algorithms/sort/quick-sort/index.ts](./src/algorithms/sort/quick-sort/index.ts)

**Quick Sort** is a highly efficient, comparison-based sorting algorithm that uses the divide-and-conquer approach to sort elements. It works by selecting a "pivot" element and partitioning the array so that all elements smaller than the pivot come before it, and all elements larger come after it.

### Steps
* Choose a pivot element from the array (the implementation chooses the last index
* Partition the array by rearranging elements: elements less than the pivot go to its left, and elements greater go to its right
* Recursively apply the same process to the left and right subarrays
* Continue this until each subarray has only one element or is empty, at which point the array is sorted

### Example
For an array `[3, 6, 8, 10, 1, 2, 1]`:

* Choose 3 as the pivot
* Partition to get `[1, 2, 1]` (less than 3) and `[6, 8, 10]` (greater than `3`)
* Recursively sort the subarrays

### Time & Space Complexity
| Case    | Time          | Space      | Notes                                        |
| ------- | ------------- | ---------- | -------------------------------------------- |
| Best    | `O(n log n)`  | `O(n)`     | |
| Average | `O(n log n)`  | `O(log n)` | |
| Worst   | `O(n^2)`      | `O(log n)` | When the pivot is poorly choosen             |

### Use Cases
**Quick Sort** is known for its fast performance and is widely used in practice, particularly for large datasets, because of its average-case efficiency and in-place sorting.

### Resources
* Java Implementation - [Learn Quick Sort in 13 Minutes](https://www.youtube.com/watch?v=Vtckgz38QHs)


## Selection Sort
You can find the implementation of **Selection Sort** at [./src/algorithms/sort/selection-sort/index.ts](./src/algorithms/sort/selection-sort/index.ts)

**Selection Sort** is a simple, comparison-based sorting algorithm that sorts an array by repeatedly finding the minimum (or maximum) element from the unsorted part and moving it to the sorted part.

### Steps
* Start from the beginning of the array
* Find the smallest element in the unsorted portion
* Swap it with the first unsorted element, moving it into the sorted portion
* Repeat this process for each position in the array until the entire array is sorted

### Example
For an array `[29, 10, 14, 37, 13]`:

* Find the minimum `10` and place it at the start
* Repeat for the remaining elements until fully sorted: `[10, 13, 14, 29, 37]`

### Time & Space Complexity
| Case    | Time          | Space      | Notes                                        |
| ------- | ------------- | ---------- | -------------------------------------------- |
| Best    | `O(n^2)`      | `O(n)`     | Where `n` is the number of elements          |
| Average | `O(n^2)`      | `O(n)`     | Where `n` is the number of elements          |
| Worst   | `O(n^2)`      | `O(1)`     | |


### Use Cases
**Selection Sort** is efficient for small datasets but inefficient for large ones due to its quadratic time complexity. It is useful in situations where memory writes are costly, as it makes fewer swaps than other simple sorts.


# Data Structures
Here are all of the data structures that are implemented in this repository.

You can find all of these implementations at [./src/data-structures](./src/data-structures)


| Operation                   | Array (static)/List (dynamic) | String (immutable) |
| --------------------------- | ----------------------------- | ------------------ |
| Append to end               | `*O(n)`                       | `O(n)`             |
| Popping from end            | `O(1)`                        | `O(n)`             |
| Insertion, not from end     | `O(n)`                        | `O(n)`             |
| Deletion, not from end      | `O(n)`                        | `O(n)`             |
| Modifying an element        | `O(1)`                        | `O(n)`             |
| Random access               | `O(1)`                        | `O(1)`             |
| Checking if element exists  | `O(n)`                        | `O(n)`             |
 

## List
You can find all of the implementations of **List** at [./src/data-structures/list](./src/data-structures/list)

## Queue
You can find the implementation of a **Queue** at [./src/data-structures/list/queue/index.ts](./src/data-structures/list/queue/index.ts)

A **Queue** is a linear data structure that follows the _First In, First Out (FIFO)_ principle, meaning the first element added to the queue will be the first one to be removed. It is similar to a real-life queue, like waiting in line—those who arrive first get served first.

### Implemented Methods
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

### Resources
* [Stacks & Queues - DSA Course in Python Lecture 5](https://www.youtube.com/watch?v=vOx3vY1w4tM)

## Stack
You can find the implementation of a **Stack** at [./src/data-structures/stack/index.ts](./src/data-structures/list/stack/index.ts)

A **Stack** is a linear data structure that follows the _Last In, First Out (LIFO)_ principle, meaning the last element added to the stack will be the first one removed. It is similar to a stack of plates, where the plate placed on top is the first to be taken off.

### Implemented Methods 
* **isEmpty**
  * Checks to see if stack is empty
* **peak**
  * Returns first element
* **pop**
  * Removes element from the end of the stack
* **push(value)**
  * Add value to the end of the stack

### Use Cases
* Function call stack in programming
* Expression evaluation (e.g., parsing parentheses)
* Backtracking algorithms like Depth-First Search (DFS)
* Stacks can be implemented using arrays or linked lists and are crucial for scenarios where you need to manage data in reverse order

### Resources
* [Stacks & Queues - DSA Course in Python Lecture 5](https://www.youtube.com/watch?v=vOx3vY1w4tM)

## Singly Linked List
You can find the implementation of a **Singly Linked List** at [./src/data-structures/singly-linked-list/index.ts](./src/data-structures/list/singly-linked-list/index.ts)

A **Singly Linked List** is a linear data structure made up of nodes, where each node contains two elements:
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

### Use Cases
* Efficient insertions and deletions at any position
* Dynamic memory allocation where size can grow or shrink as needed

### Resources
* [Linked Lists - Singly & Doubly Linked - DSA Course in Python Lecture 3](https://www.youtube.com/watch?v=dqLHTK7RuIo)


# Tree
You can find all of these implementations at [./src/data-structures/tree](./src/data-structures/tree)

## Binary Search Tree
You can find the implementation of a **Binary Search Tree** at [./src/data-structures/tree/binary-search-tree/index.ts](./src/data-structures/tree/binary-search-tree/index.ts)

A **Binary Search Tree** is a node-based data structure where each node has at most two children, referred to as the left and right child. It is designed to efficiently store and retrieve data in sorted order:

* **left**: Contains nodes with values less than the node’s value (also a binary search tree)
* **right**: Contains nodes with values greater than the node’s value (also a binary search tree)

### Implemented Methods
**insert(value)**:
  * Add a node in its correct position while maintaining the BST property

### Example
The root is `5`, with `3` and `7` as its children:

* `3` has children `2` and `4`
* `7` has children `6` and `8`

### Time Complexity
* Best/Average case: `O(log n)` for search, insert, and delete
* Worst case: `O(n)`, if the tree becomes unbalanced (e.g., a sorted input)

### Use Cases
**Binary Search Trees** are commonly used in search-related algorithms and data structures due to their ability to quickly retrieve, insert, and delete elements while maintaining order.

### Resources
* [Binary Trees & Binary Search Trees - DSA Course in Python Lecture 8](https://www.youtube.com/watch?v=EPwWrs8OtfI)

### Visuals
![Complete Binary Tree](./src/data-structures/tree/binary-search-tree/images/complete-binary-tree.png)
![Perfect Binary Tree](./src/data-structures/tree/binary-search-tree/images/perfect-binary-tree.png)
![Binary Search Tree](./src/data-structures/tree/binary-search-tree/images/binary-search-tree.png)



## Leetcode
You can find all of the implementations of **Leetcode** problems at [./src/leetcode](./src/leetcode)

## 1. Two Sum 
The problem we are solving can be found at [Two Sum](https://leetcode.com/problems/1-two-sum/description/).

You can find the implementation of **Two Sum** at [./src/leetcode/1-two-sum/index.ts](./src/leetcode/1-two-sum/index.ts)

**Two Sum** problem involves finding two numbers in an array that add up to a given target. The goal is to return the indices of these two numbers.  A common, optimized approach uses a hash map to store the numbers and their indices as you iterate through the array. For each number, you calculate the complement (target minus the current number) and check if it's already in the map. If it is, you return the indices of the complement and the current number. 

### Steps
* Iterate through the array while keeping track of each number's complement (target minus the current number)
* Use a hash map to store the numbers and their indices as you go
* For each number, check if its complement already exists in the hash map
* If found, return the indices of the complement and the current number

### Example
For an array `[2, 7, 11, 15]` and target `9`:

* Complement of `2` is `7`, store `2` in the map
* Complement of `7` is `2`, which is already in the map
* Return indices `[0, 1]`.

### Time Complexity
`O(n)`, where n is the number of elements, because the array is traversed once, and hash map operations take constant time.  **Two Sum** is efficient for large datasets due to its use of a hash map, making it a common interview question and practical solution for sum-based problems.

### Resources
* Python implementation - [Short](https://www.youtube.com/shorts/pFag4mBsO1I)
* Python implementation - [Short](https://www.youtube.com/shorts/ysifKoOZw5g)


## 2. Add Two Numbers 
The problem we are solving can be found at [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/).

You can find the implementation of **Add Two Numbers** at [./src/leetcode/2-add-two-numbers/index.ts](./src/leetcode/2-add-two-numbers/index.ts)

**Add Two Numbers** from Two Linked Lists is a problem where two linked lists represent two non-negative integers in reverse order, with each node containing a single digit. The goal is to add these two numbers together, node by node, and return the sum as a new linked list in the same reverse order.

### Steps
* Initialize a dummy node to help build the resulting linked list
* Traverse both linked lists from the head, adding corresponding nodes together along with any carry from the previous sum
* Store each sum's last digit in the new linked list node and update the carry for the next addition
* Continue until both lists are fully traversed and no carry remains

### Example
For linked lists `2 -> 4 -> 3` (representing `342`) and `5 -> 6 -> 4` (representing `465`):

* Add each pair of digits (with carry): `2 + 5 = 7`, `4 + 6 = 10` (carry `1`), `3 + 4 + 1 = 8`
* Resulting linked list: `7 -> 0 -> 8` (representing `807`)

### Time Complexity
`O(max(m, n))`, where m and n are the lengths of the two linked lists, since each node is visited once.

### Use Cases
This problem models integer addition in reverse order, useful in applications dealing with very large numbers stored as lists due to constraints on integer size in typical programming languages.

### Resources
* [Add Two Numbers - Leetcode 2 - Python](https://www.youtube.com/watch?v=wgFPrzTjm7s)


## 3. Longest Substring Without Repeating Characters
The problem we are solving can be found at [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/).

You can find the implementation of **Longest Substring Without Repeating Characters** at [./src/leetcode/3-longest-substring-without-repeating-characters/index.ts](./src/leetcode/3-longest-substring-without-repeating-characters/index.ts)

**Longest Substring Without Repeating Characters** problem involves finding the longest substring within a given string that contains all unique characters, with no repeats.

### Steps
Use a sliding window technique with two pointers to track the current substring and a set to store unique characters
* Expand the window by moving the right pointer, adding characters to the set if they’re not already present
* If a character is repeated, move the left pointer to shrink the window until the substring is unique again
* Track the maximum length of substrings found during this process

### Example
For the string `"abcabcbb"`:
* Starting from `"abc"` (length 3) and encountering a repeat `"a"`, shift the window to `"bca"`.
* Resulting longest substring without repeating characters is `"abc"` or `"bca"`, with length `3`.

### Time Complexity
`O(n)`, where `n` is the length of the string, since each character is added and removed from the set at most once.

### Use Cases
This technique is useful for parsing strings to find unique patterns, and it serves as a foundation for solving similar problems involving substrings or sequences.

### Resources
* [Longest Substring Without Repeating Characters - Leetcode 3 - Sliding Window (Python)](https://www.youtube.com/watch?v=FCbOzdHKW18)
