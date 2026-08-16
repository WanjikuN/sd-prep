// Remove Duplicates from Sorted Array

// Now let's test whether you can recognize the same two-pointer idea in a different problem.

// Given a sorted array, remove duplicates in-place so each element appears only once.

// Return the number of unique elements.

// Example
// nums = [1,1,2]

// → 2

// After modification:

// [1,2,_]

// Only the first 2 positions matter.
const duplicatesCount = (nums) => {
    let count = 1;
    let left = 1;

    for (let i = 0; i < nums.length; i++) {
        while (nums[i] === nums[left]) {
            left++
            continue;
        }
        count++
    }
    return count;
};
