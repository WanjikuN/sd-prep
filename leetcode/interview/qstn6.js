// Given a string s, find the length of the longest substring without repeating characters.
// s = "abcdbcbb"
// → 4
// count =3
// left = 0
// right= 0
// a->b->c
// Sliding window
// Time:  O(n)
// Space: O(n)
const longestSubstring = (s) => {
    let left = 0;
    let maxCount = 0;
    const set = new Set();

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);

        const windowLength = right - left + 1;
        maxCount = Math.max(maxCount, windowLength);
    }

    return maxCount;
};

console.log(longestSubstring("abcabcbb")); // 3
console.log(longestSubstring("bbbbb"));    // 1
console.log(longestSubstring("pwwkew"));   // 3
console.log(longestSubstring(""));         // 0
console.log(longestSubstring("abcbcbb"));
