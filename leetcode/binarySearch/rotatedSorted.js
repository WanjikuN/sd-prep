// Binary Search - Search in Rotated Sortad array
// Roatated Array - 1 2 3 4 5 6 7 --> 4 5 6 7 1 2 3 -The array is not fully sorted anymore, but parts of it still are.
// Problem
// You are given a sorted array that has been rotated at an unknown pivot
//  Search for the target and return its index
// If the target does not exist, return -1
// O(log n)
// Input --> nums[4,5,6,7,0,1,2] target 0
// Output --> 4

// if (nums[left] <= nums[mid]) {
// //     // Left half is sorted

// //     if (target >= nums[left] && target < nums[mid]) {
// //         // Search left
// //     } else {
// //         // Search right
// //     }
// // }
// if (nums[left] > nums[mid]) {
// //     // right half is sorted

// //     if (target > nums[mid] && target <= nums[right]) {
// //         // Search right
// //     } else {
// //         // Search left
// //     }
// // }
// Time Complexity - O(log n)
// Space Complexity - O(1)

const searchRotated = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }
        // left half is sorted
        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // right half is sorted
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
