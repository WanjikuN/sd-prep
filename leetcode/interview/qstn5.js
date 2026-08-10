// Given an unsorted array of integers, find the length of the longest consecutive sequence.
// You must solve it in O(n) time.
// nums = [100, 4, 200, 1, 3, 2]
// 1,3,2,4
// Output = 4
// nums = [0,3,7,2,5,8,4,6,0,1]
//  0,1,2,3,4,5,6,7,8
// Output = 9
// What data structure/pattern would you use? hash set
// How would you identify the start of a sequence?
// Once you find a start, how would you count the sequence?
// Time:  O(n)
// Space: O(n)

const longestSeq = (nums) => {
    if (nums.length === 0) return 0;
    const set = new Set(nums);
    let maxCount = 0;

    for (const num of set) {
        if (!set.has(num - 1)) {
            let count = 1;
            let current = num;
            while (set.has(current + 1)) {
                current++;
                count++;
            }
            maxCount = Math.max(count, maxCount);
        }
    }
    return maxCount;
};
console.log(longestSeq([100, 4, 200, 1, 3, 2]));
console.log(longestSeq([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
