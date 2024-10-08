"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickSort = exports.LinkedList = exports.InsertionSort = exports.BubbleSort = exports.BinarySearch = void 0;
const BinarySearch_1 = require("./src/BinarySearch/BinarySearch");
Object.defineProperty(exports, "BinarySearch", { enumerable: true, get: function () { return BinarySearch_1.BinarySearch; } });
const BubbleSort_1 = require("./src/BubbleSort/BubbleSort");
Object.defineProperty(exports, "BubbleSort", { enumerable: true, get: function () { return BubbleSort_1.BubbleSort; } });
const InsertionSort_1 = require("./src/InsertionSort/InsertionSort");
Object.defineProperty(exports, "InsertionSort", { enumerable: true, get: function () { return InsertionSort_1.InsertionSort; } });
const LinkedList_1 = require("./src/LinkedList/LinkedList");
Object.defineProperty(exports, "LinkedList", { enumerable: true, get: function () { return LinkedList_1.LinkedList; } });
const QuickSort_1 = require("./src/QuickSort/QuickSort");
Object.defineProperty(exports, "QuickSort", { enumerable: true, get: function () { return QuickSort_1.QuickSort; } });
(0, BubbleSort_1.BubbleSort)([1, 2, 3]);
//# sourceMappingURL=index.js.map