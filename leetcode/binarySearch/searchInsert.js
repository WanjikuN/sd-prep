// Search Insert Position
// Binary Search isn't just for finding things—it can also find boundaries and insertion points.
// Problem

// Given a sorted array of distinct integers nums and a target value target, return:
// the index if the target is found.
// otherwise, return the index where it would be inserted to maintain the sorted order.
// You must write an algorithm with:
//     Time Complexity: O(log n)

// Input --> nums = [1,3,5,6] target = 5
// Output --> 2
// Time complexity O(log n)
// Space complexity O(1)
const searchFn = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
console.log(searchFn([1,3,5,6],5))
console.log(searchFn([1,3,5,6],2))
console.log(searchFn([1,3,5,6],7))
console.log(searchFn([1,3,5,6],0))