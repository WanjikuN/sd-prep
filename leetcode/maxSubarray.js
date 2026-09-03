// Maximum Subarray

// Given an integer array nums, find the contiguous subarray with the largest sum and return that sum.
// A subarray must contain at least one element.

// Example 1
// Input:
// [-2,1,-3,4,-1,2,1,-5,4]

// Output:
// 6
const maxSubFn = (nums) => {
    let maxSum = nums[0];

    let currentSum = 0;
    for (const char of nums) {
        if (currentSum <= char) {
            currentSum = char;
            maxSum = Math.max(maxSum, currentSum);
        } else {
            currentSum = currentSum + char;
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    return maxSum;
};
console.log(maxSubFn([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
