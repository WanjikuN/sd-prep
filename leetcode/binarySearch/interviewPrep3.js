// Problem 3 — Modified Binary Search
// You are given a sorted array that has been rotated:

// [0,1,2,4,5,6,7]
//         ↓ rotate
// [4,5,6,7,0,1,2]

// Given a target, return its index. Otherwise return -1.
// Input -> nums = [4,5,6,7,0,1,2] target = 0
// Output -> 4
// Time:  O(log n)
// Space: O(1)
const searchRotated = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        // left sorted
        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // right sorted
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};
console.log(searchRotated([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(searchRotated([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(searchRotated([1], 0)); // -1
console.log(searchRotated([1], 1)); // 0
console.log(searchRotated([5, 6, 7, 0, 1, 2, 3], 2)); // 5
