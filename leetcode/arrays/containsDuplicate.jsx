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

// Approach1
const contDuplicates = (nums) => {
    let boolVal = false;
    let x = Set(nums);
    if (nums.legth === 0) return;
    if (x.length == nums.length) {
        boolVal = true;
    }
    return boolVal;
};
// Refined Approach1

// time complexity == O(n^2)
// space complexity == O(1)
const contDuplicates2 = (nums) => {
    if (nums.length == 1) {
        return false;
    }
    // compare numbers and get a duplicate
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                return true;
            }
        }
    }
};
const contDuplicates3 = (nums) => {
    if (nums.length == 1) {
        return false;
    }
    const dupMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (dupMap.has(nums[i])) {
            return true;
        } else {
            dupMap.set(nums[i], i);
        }
    }
};
console.log(contDuplicates([1, 2, 3, 1]));
console.log(contDuplicates2([1, 2, 3, 1]));
