// Remove Duplicates from Sorted Array

// Given a sorted array, remove duplicates in-place so each element appears only once.
// Return the number of unique elements.

// Example
// nums = [1,1,2]

// → 2

// After modification:

// [1,2,_]

// Only the first 2 positions matter.
const removeDuplicates = (nums) => {
    if (nums.length === 0) return 0;

    let left = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[left - 1]) {
            nums[left] = nums[i];
            left++;
        }
    }

    return left;
};

const nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums)); // 5
console.log(nums); // [0,1,2,3,4,...]