// Problem
// Two Sum
// Problem: Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1] (because nums[0] + nums[1] == 9)
// Constraints: You may not use the same element twice. You can return the answer in any order. Assume exactly one solution exists

// Time Complexity
// Quadratic O(n2)- nested loop
// Space Complexity
// constant O(1) - list does not grow as input grows
// Lessons Learned
// Find a solution first(brute force) then optimize
// 2+7
// 7+11
// 7+15
// 11+15
// i  j
// 0  1
// 1  2
// 2  3
// 3
// Approach
const twoSum = (nums, target) => {
    // Compare each number with every subsequent number.
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
console.log(twoSum([2, 7, 11, 15], 9));

// Approach 2
// time complexity -> O(n)
// space complexity -> O(1)
const twoSum2 = (nums, target) => {
    // create an instance of map
    const numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if(numsMap.has(diff)){
            return [numsMap.get(diff),i]
        } 
        else{
            numsMap.set(nums[i],i)
        }
    }
};
