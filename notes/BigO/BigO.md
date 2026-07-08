## Big O Notation
This measures the upper bound or worst case scenario of an algorithm in terms of time and space complexity

### 1. O(1) - Constant time
Time remains the same regardles of the input eg getting index in an array

### 2. O(log n) - Logarithimic time
Time grows slowly as input increase eg binary search where the dataset is haved in each step

### 3. O(n) - Linear Time
Time grows proportially with the input size eg Linear searcg oor looping though a list

### 4. O(n log n) - Linearithmic time
Efficient sorting algorithms eg quick sort and bubble sort

### 5. O(n^2) - Quadratic time
Time grows with the square of input size eg bubble sort or nested loops

### 6. O(n!) - Factorial and O(2^n) - Exponential
Inefficient and arises from brute force approaches

---
1. Why is binary search O(log n)?
`It is logarithimic time because the dataset is halved in each step therefore time slowly increases with the growth of input..` 

2. Why is nested iteration usually O(n²)?`It is quadratic time becase time grows with the square of the input.`

3. When can nested loops still be O(n)?If the input is one