// Min Stack

// Start with the basic idea:

// Stack:

// bottom
//   ↓
// [ -2 ]
// [  0 ]
// [ -3 ] ← top

// If I ask:

// getMin()

// the answer is:

// -3
const createMinStack = () => {
    const stack = [];
    const minStack = [];

    const push = (val) => {
        stack.push(val);

        if (minStack.length === 0) {
            minStack.push(val);
        } else {
            minStack.push(
                Math.min(val, minStack[minStack.length - 1])
            );
        }
    };

    const pop = () => {
        stack.pop();
        minStack.pop();
    };

    const top = () => {
        return stack[stack.length - 1];
    };

    const getMin = () => {
        return minStack[minStack.length - 1];
    };

    return {
        push,
        pop,
        top,
        getMin
    };
};
const minStack = createMinStack();

minStack.push(-2);
minStack.push(0);
minStack.push(-3);

console.log(minStack.getMin()); // -3

minStack.pop();

console.log(minStack.top());    // 0
console.log(minStack.getMin()); // -2