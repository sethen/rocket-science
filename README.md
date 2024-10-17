# Rocket Science
This is a repository full of implementations for common algorithms and data structures.  These are written in TypeScript and provide comments to help you understand what's happening.

# Tables of Contents

* [How to Use](#how-to-use)
* [Algorithms](#algorithms)
  * [Binary Search](#binary-search)
  * [Two Sum](#two-sum)
* [Data Structures](#data-structures)
  * [Queues](#queues)

# How to Use 
This repository is simple and doesn't require much in the way of usage.  You need `Node.js` installed and need to run `npm install` to get everything installed.  You can use `npm run test` for testing, `npm run build` for building and `npm run debug` to run the node debugger in chrome.

* `npm run build` for building the project
* `npm run test` to run unit tests
* `npm run debug` to debug in Google Chrome (remember to use debugger statement)


# Algorithms
Here are all of the algorithms that are implemented in this repository.

# Binary Search
You can find the implementation of Binary Search at [./src/algorithms/BinarySearch/index.ts](./src/algorithms/BinarySearch/index.ts)

Binary Search is an efficient algorithm used to find the position of a target value within a _sorted_ array.  Search faster for great good!

## Explanation
It works by repeatedly dividing the search interval in half. If the *target value is less* than the middle element, you eliminate everything above the middle element.  If *target value is greater* than the middle element, you eliminate everything below the middle element. This process repeats until the target is found or the interval is empty.

## Example
```javascript
const input = [ 1, 2, 3, 4, 5, 6 ];
const target = 4;
```

In the above Binary Search will take 3 steps to find the number `4`:
* It will first guess `3` and then eliminate the numbers below that
* It will guess `5` and elimnate the numbers above it
* Finally, it will find 4

# Time Complexity
Binary search operates in *O(log n)* time complexity, making it much faster than linear search for large datasets, but it requires the data to be sorted.

## Resources
* JavaScript implementation - [Binary Search in 100 Seconds](https://www.youtube.com/watch?v=MFhxShGxHWch)
* Python implementation - [Binary Search - Leetcode 704 - Python](https://www.youtube.com/watch?v=s4DPM8ct1pI)

# Two Sum 
You can find the implementation of Two Sum at [./src/algorithms/TwoSum/index.ts](./src/algorithms/TwoSum/index.ts)

Two Sum problem involves finding two numbers in an array that add up to a given target. The goal is to return the indices of these two numbers.

## Explanation
A common, optimized approach uses a hash map to store the numbers and their indices as you iterate through the array. For each number, you calculate the complement (target minus the current number) and check if it's already in the map. If it is, you return the indices of the complement and the current number. 

## Example
```javascript
const input = [ 1, 2, 3, 4, 5 ];
const target = 8;
const output = [ 2, 4 ];
```

In the above since `3` and `5` are at index `2` and `4` we return an array of those indexes.

## Time Complexity
Two Sum has a time complexity of *O(n)*, making it efficient for large inputs.  Avoid nested for loops.

## Resources
* Python implementation [Short](https://www.youtube.com/shorts/pFag4mBsO1I)
* Python implementation [Short](https://www.youtube.com/shorts/ysifKoOZw5g)

# Data Structures
Here are all of the data structures that are implemented in this repository.

# Queues
You can find the implementation of a Queue at [./src/data-structures/Queues/index.ts](./src/data-structures/Queue/index.ts)

A queue is a linear data structure that follows the First In, First Out (FIFO) principle, meaning the first element added to the queue will be the first one to be removed. It is similar to a real-life queue, like waiting in line—those who arrive first get served first.

## Key Operations
* **Enqueue**: Add an element to the back of the queue (think push in arrays)
* **Dequeue**: Remove an element from the front of the queue (think shift in arrays)
* **Peek**: Retrieve the element at the front of the queue without removing it
* **IsEmpty**: Check if the queue is empty (looks at the length of the array)

## Use Cases
* Scheduling tasks in operating systems (like managing print jobs or CPU tasks)
* Breadth-First Search (BFS) in graphs
* Message Queuing systems in distributed applications
* Queues are typically implemented using arrays or linked lists and are fundamental in managing tasks that need to be processed in order
