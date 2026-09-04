// Product of Array Except Self

// Given an integer array nums, return an array answer such that:
// answer[i] = product of every element in nums except nums[i]
// Do not use division.

// Example:

// Input:
// [1,2,3,4]

// Output:
// [24,12,8,6]
const productFn = (nums) => {
    let answer = [];
    let prefix = 1;
    let suffix = 1;
    // space complexity - O(1)
    // Iterate from left hand side
    for (let i = 0; i < nums.length; i++) {
        //O(n)
        answer[i] = prefix;
        prefix = prefix * nums[i];
    }
    // Iterate from right hand side
    for (let i = nums.length - 1; i >= 0; i--) {
        //O(n)
        answer[i] = answer[i] * suffix;
        suffix = suffix * nums[i];
    }

    return answer;
};
console.log(productFn([1, 2, 3, 4]));
