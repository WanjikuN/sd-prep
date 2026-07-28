// Two sum
// Two Sum II - Input Array Is Sorted
// Problem

// Given a 1-indexed array of integers sorted in non-decreasing order, find two numbers such that they add up to a target.

// Return their indices.
// Input ---> Output
// nums = [2,7,11,15] target = 9 ---> [1,2]

// l=0
// r=0
// sum = 0
//pseudo
// Create a function(nums, target)

// left = 0
// right = nums.length - 1

// while left < right
//     sum = nums[left] + nums[right]

//     if sum == target
//         return indices

//     if sum < target
//         left++

//     else
//         right--

// return []

const twoSum = (nums, t) => {
    // tc -> O(n)
    //sc -> O(1)
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        const sum = nums[l] + nums[r];
        if (sum === t) {
            return [l + 1, r + 1]; //1-indexed position
        } else if (sum < t) {
            l++;
        } else r--;
    }
    return [];
};
