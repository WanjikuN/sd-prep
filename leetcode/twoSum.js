// Two Sum

// Given an array of integers nums and an integer target, return the indices of the two numbers that add up to target.

// You may assume that each input has exactly one solution, and you cannot use the same element twice.

// Example
// Input:
// nums = [2, 7, 11, 15]
// target = 9

// Output:
// [0, 1]
const twoSum = (nums, t) => {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const diff = t - nums[i];
        if (map.has(diff)) {
            return [map.get(diff),i];
        } else {
            map.set(nums[i], i);
        }
    }
    return [];
};
console.log(twoSum([3,2,4], 6));
