// Find Peak Element
// - The array is not sorted
// - It isn't rotated
// - Follow the slope

// Problem
// A peak element is an element that is strictly greater than its neighbors
// Given an integer array nums, return the index of any peak element
// Time complexity  O(log n)
// Input -> nums = [1,2,3,1]
// Output -> 2
// while (left < right) {
//     const mid = Math.floor((left + right) / 2);

//     if (nums[mid] < nums[mid + 1]) {
//         left = mid + 1;
//     } else {
//         right = mid;
//     }
// }
// return left;
const findPeak = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else right = mid;
    }
    return left;
};
console.log(findPeak([1, 2, 3, 1])); // 2
console.log(findPeak([1, 2, 1, 3, 5, 6, 4])); // 1 or 5
console.log(findPeak([1])); // 0
