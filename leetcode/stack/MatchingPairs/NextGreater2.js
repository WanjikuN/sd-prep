// Stacks
// Next Greater Element II → introduces circular arrays.

// Problem

// Given a circular integer array nums, return an array where each element contains the next greater element.

// The next greater element of a number is the first greater number when traversing circularly through the array.

// If no greater element exists, return -1.
// Input --> nums = [1,2,1]
// Output --> nums= [2,-1,2]
const nextGreater = (nums) => {
    const result = new Array(nums.length).fill(-1);
    const stack = [];
    let n = nums.length;
    for (let i = 0; i < (2 * n); i++) {
        let index = i % n;
        while (stack.length > 0 && nums[index] > nums[stack[stack.length - 1]]) {
            const popped = stack.pop();
            result[popped] = nums[index];
        }
        if (i < n) {
            stack.push(index);
        }
    }
    return result;
};
console.log(nextGreater([1, 2, 1]));
