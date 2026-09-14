// Longest Consecutive Sequence
// Problem

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// The sequence does not need to appear next to each other in the original array.

// Example
// nums = [100, 4, 200, 1, 3, 2]

// Answer = 4
// Time: O(n) average.
// Space: O(n) 

const longestConFn = (nums) => {
    let maxCount = 0;
    const set = new Set(nums);

    for (const num of nums) {
        if (!set.has(num - 1)) {
            let current = num;
            let count = 1;
            while (set.has(current + 1)) {
                current++;
                count++;
            }
            maxCount = Math.max(maxCount, count);
        }
    }
    return maxCount;
};
console.log(longestConFn([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
