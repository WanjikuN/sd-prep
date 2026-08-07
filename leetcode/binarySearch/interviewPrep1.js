// Problem 1 — Classic Binary Search

// You are given a sorted array of distinct integers nums and an integer target.

// Return the index of target if it exists. Otherwise, return -1

// Input -> nums= [-1,0,3,5,9,12], target=9
// Output 4
// 1. Element -from classic search
// 2. left = 0
// 3. right =nums.length-1
// nums[mid] === target  → return mid
// nums[mid] < target    → left = mid + 1
// nums[mid] > target    → right = mid - 1
// Time complexity - O(logn)
// Space Complexity-O(1)
const binarySearch = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2)); // -1
console.log(binarySearch([5], 5)); // 0
console.log(binarySearch([5], 2)); // -1
