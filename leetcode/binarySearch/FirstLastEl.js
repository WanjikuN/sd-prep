// Binary Search
// Find First and Last Position of Element in Sorted Array
// Problem
// Given a sorted array of integers nums in non-decreasing order and an integer target, return the starting and ending position of the target.
// If the target is not found, return:
// [-1, -1]
// You must write an algorithm with:
// Time Complexity: O(log n)
// input --> [ 5 7 7 8 8 10]
const findFirst = (nums, target) => {
    let right = nums.length - 1;
    let left = 0;
    let answer = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            answer = mid;
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return answer;
};

const findLast = (nums, target) => {
    let right = nums.length - 1;
    let left = 0;
    let answer = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            answer = mid;
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return answer;
};

const searchRange = (nums, target) => {
    return [findFirst(nums, target), findLast(nums, target)];
};
console.log(searchRange([5,7,7,8,8,10], 8)); // [3, 4]
console.log(searchRange([5,7,7,8,8,10], 6)); // [-1, -1]