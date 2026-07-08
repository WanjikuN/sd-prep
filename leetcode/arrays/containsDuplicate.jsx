// Problem
// Contains Duplicate
// Problem: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1, 2, 3, 1]
// Output: true
// Input: nums = [1, 2, 3, 4]
// Output: false

// Time Complexity
// O(1) -Constant time as increase in input doesnt affect the time taken
// Space Complexity
// O(1) - Constant space complexity
// Lessons Learned

// Approach
const contDuplicates = (nums) => {
    let boolVal = false;
    let x = Set(nums);
    if (nums.legth === 0) return;
    if (x.length == nums.length) {
        boolVal = true
    }
    return boolVal;
};
console.log(contDuplicates([1, 2, 3, 1]));
