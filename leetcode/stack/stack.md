## Stack
A data structure that follows the **Last In, First Out(LIFO)** principle

#### Stack of Plates
You can only:
- Put a plate on top.
- Remove the plate on top.

The last plate added is the first one removed.

### Core Operations
1. push(x) - Add to top(O(1))
2. pop() - Remove top(O(1))
3. peek()/top() - View top element(O(1))
4. isEmpty() - Check if empty(O(1))

### JS Implementation
1. Arrays add
```
const stack = []
// push
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack);
// [10,20,30]

```
2. Arrays Delete
```
stack.pop();
console.loog(stack);
// [10,20]

```
3. View 
```
consoole.log(stack[stack.length-1]);
// 20
```
4. Empty -check if it's Empty
```
console.log(stack.length === 0)
```

### Use Cases
Whenever you see
- Matching Pairs
- Undo/Redoo
- Browser history
- Nested Structures
- Backtracking One step
- Need the most recent item
- Reverse order proocessing

