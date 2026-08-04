// Binary Search - Minimum in Rotated Sorted Array
// Problem
// Suppose an array of unique integers sorted in ascending order is rotated between 1 and n times
// Given the rotated sorted arrays nums, return the minimum element
// The minimum is exactly where the rotation happened.
// "Which half contains the minimum?"
// Tme Complexity O(log n)
// Space complexity O(1)
// Input -> nums = [3,4,5,1,2]
// Output ->1
// while (left < right) {
//     const mid = Math.floor((left + right) / 2);

//     if (nums[mid] > nums[right]) {
//         left = mid + 1;
//     } else {
//         right = mid;
//     }
// }

// return nums[left];
const minSortedFn = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
};
console.log(minSortedFn([3,4,5,1,2]))