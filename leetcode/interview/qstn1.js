// You're given an array of integers nums and an integer target.
// Return the indices of the two numbers such that they add up to target.
// You may assume:

// There is exactly one solution.
// You cannot use the same element twice.
// Return the indices in any order.
// nums = [2, 7, 11, 15]
// target = 9

// Output = [0, 1]
// 1. What DSA pattern would you use? 2 sum -> hash map

// 2. Why? Binary search isn't applicable because the array isn't guaranteed to be sorted. A hash map gives us O(1) average lookup while traversing the array once.
// 3. What would you store while iterating through the array? indices
// Time: O(n)
// Space: O(n)
const twoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (map.has(diff)) {
            return [i, map.get(diff)];
        } else {
            map.set(nums[i], i);
        }
    }

    return [];
};
console.log(twoSum([2, 7, 11, 15], 9));
