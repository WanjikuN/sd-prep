// Two Sum II

// The array is sorted:

// numbers = [2,7,11,15]
// target = 9
// Output:
// [1,2]
// (Indices are 1-based.)
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
