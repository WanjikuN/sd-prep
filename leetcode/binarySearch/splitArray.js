// Split Array Largest Sum
// Problem
// You are given an array of non-negative integers: nums = [7,2,5,10,8] and an integer k=2
//  You must split the array into exactly k non empty subarrays.
// Your goal is to minimize the largest subarray sum
// Input -> nums = [7,2,5,10,8] k=2
// Possible split [7,2,5] [10,8]
// The sums ar : 14 and 18 --> largest is 18
// Another split [7,2] [5,10,8]
// Largest us 23
const canSplit = (nums, maxAllowedSum, k) => {
    // Time: O(n);
    // Space: O(1);
    let currentSum = 0;
    let subarrays = 1;
    for (const num of nums) {
        if (currentSum + num > maxAllowedSum) {
            subarrays++;
            currentSum = num;
        } else {
            currentSum += num;
        }
    }
    return subarrays <= k;
};
const splitArray = (nums, k) => {
    // Time: O(n × log(sum(nums)))
    // Space: O(1)
    let left = Math.max(...nums);
    let right = nums.reduce((sum, num) => sum + num, 0);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canSplit(nums, mid, k)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
console.log(splitArray([7, 2, 5, 10, 8], 2)); // 18
