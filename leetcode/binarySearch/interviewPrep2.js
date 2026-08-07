// Problem 2 — Boundary Search
// You are given a sorted array that may contain duplicates. Return the first position where target appears.
// Input -> nums = [1,2,2,2,3,4] target=2
// Output ->1
// Time complexity - O(logn)
// Space Complexity-O(1)
const findFirst = (nums, target) => {
    let answer = -1;
    let left = 0;
    let right = nums.length - 1;
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
console.log(findFirst([1, 2, 2, 2, 3, 4], 2)); // 1
console.log(findFirst([1, 2, 2, 2, 3, 4], 3)); // 4
console.log(findFirst([1, 2, 2, 2, 3, 4], 5)); // -1
console.log(findFirst([2, 2, 2, 2], 2)); // 0
console.log(findFirst([1], 1)); // 0
