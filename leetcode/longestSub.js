// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1
// Input:
// "abcabcbb"

// Output:
// 3
const longestSubFn = (s) => {
    let maxCount = 0;
    let left = 0;
    let right = 0;
    const set = new Set();
    while (right < s.length) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        const diff = right - left + 1;
        maxCount = Math.max(maxCount, diff);
        right++;
    }
    return maxCount;
};
console.log(longestSubFn("abcabcbb"));
