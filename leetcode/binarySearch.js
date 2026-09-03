// Binary Search

// Given a sorted array of integers nums and an integer target, return the index of target.

// If target does not exist in the array, return -1.

// You must write an algorithm with O(log n) time complexity.

// Example 1
// Input:
// nums = [-1,0,3,5,9,12]
// target = 9

// Output:
// 4
// time complexity -O(log n)
// space complexity -O(1)
const targetFn = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) {
            return mid;
        } else if (target > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};
console.log(targetFn([-1,0,3,5,9,12],2))