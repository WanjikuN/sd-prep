// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1
// Input:
// s = "abcabcbb"

// Output:
// 3

// Explanation:

// "abc" → length 3

// After that, the a repeats.
const subString = (s) => {
    let left = 0;
    const set = new Set();
    let maxCount = 0;
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right])
        let windowLen = right - left + 1;
        maxCount = Math.max(maxCount, windowLen);
    }
    return maxCount;
};
console.log(subString("abcabcbb"));
