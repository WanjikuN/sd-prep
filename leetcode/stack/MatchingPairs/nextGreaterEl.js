// Monotonic Stack - keeps its elements in either Increasing order or Decreasing order.
// The Monotonic Stack Recipe
// Whenever you see a problem involving next/previous greater or smaller elements, ask yourself:

// Who is still waiting for an answer? → Store them in a stack.
// Can the current element answer someone else's question? → While it can, pop and update their answer.
// Once everyone it can help is handled, let the current element wait for its own answer → Push its index onto the stack.

// This recipe is the same one you'll use for Daily Temperatures, Stock Span, and Largest Rectangle in Histogram. Once you recognize the pattern, many seemingly different problems become variations of the same algorithm.

// Problem

// Given an array of integers nums, return an array where each element contains the next greater element to its right.

// If no greater element exists, return -1 for that position

// Input --> nums=[2,1,5,3,6,4]
// Output --> [5,5,6,6,-1,-1]

const nextGreaterElement = (nums) => {
    const result = []; //[-1,-1,-1,-1,-1,-1]
    // const result = new Array(nums.length).fill(-1);
    const stack = [];
    for (let i = 0; i < nums.length; i++) {
        result.push(-1);
    }
    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
            const popped = stack.pop();
            result[popped] = nums[i];
        }
        stack.push(i);

        console.log(stack, result);
    }
    return result;
};
console.log(nextGreaterElement([2, 1, 5, 3, 6, 4]));
