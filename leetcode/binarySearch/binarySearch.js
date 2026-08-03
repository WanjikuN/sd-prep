// Binary Search
// Problem
// Given a sorted array of integers nums and an integer target, return the index of target.

// If target does not exist in the array, return -1.

// Input - nums =[-1,0,3,5,9,12], target= 9
// Output -4
// Time complexity O(log n)
// Space complexity O(1) 
// When the target is not found:
    // left = the insertion position
    // right = the last element smaller than the target

const binaryFn = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }

    }
    return -1;
};
console.log(binaryFn([-1,0,3,5,9,12],9))