// Problem: Min Stack

// Design a stack that supports the following operations in O(1) time:

// push(val) — Push an element onto the stack.
// pop() — Remove the top element.
// top() — Return the top element.
// getMin() — Return the minimum element currently in the stack.
// augmenting a data structure
// Instead of storing only the required value, you store extra information that lets future operations run in constant time.

const minStackFn = () => {
    const stack = [];

    return {
        push: (x) =>{
            const currentMin =stack.length === 0?x: Math.min(x,stack[stack.length-1][1])

            stack.push([x,currentMin])
        } ,
        pop: () => stack.pop(),
        getMin:()=> stack[stack.length-1][1],
        top:()=>stack[stack.length-1][0],
        stack,
    };
};
const minStack = minStackFn();
// console.log(minStack.push(5));
// console.log(minStack.push(3));
// console.log(minStack.push(7));
// console.log(minStack.getMin());
// console.log(minStack.pop());
// console.log(minStack.top());
// console.log(minStack.getMin());
// -----
console.log(minStack.push(-2));
console.log(minStack.push(0));
console.log(minStack.push(-3));
console.log(minStack.getMin());
console.log(minStack.pop());
console.log(minStack.top());
console.log(minStack.getMin());




console.log(minStack.stack);
