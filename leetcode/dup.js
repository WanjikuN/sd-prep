// Contains Duplicate II

// Given an integer array nums and integer k, determine whether there are two distinct indices i and j such that:

// nums[i] === nums[j]
// AND
// |i - j| <= k

// Example:

// nums = [1,2,3,1]
// k = 3

// Output: true
const dupFn = (nums, k) => {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true;
        }
        map.set(nums[i], i);
    }

    return false;
};

console.log(dupFn([1, 2, 3, 1], 3)); // true
