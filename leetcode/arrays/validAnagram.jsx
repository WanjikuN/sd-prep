// Problem
// Valid Anagram
// Problem: Given two strings s and t, return true if t is an anagram of s, and false otherwise.  An anagram is a word formed by rearranging the letters of another, using all the original letters exactly once.

// Input: s = "anagram", t = "nagaram"
// Output: true
// Input: s = "rat", t = "car"
// Output: false
// Constraints: Strings consist of lowercase English letters
// Time Complexity

// Space Complexity

// Lessons Learned

// Approach1
const anagramFn = (s, t) => {
    let boolValid = false;
    if (s.length !== t.legth) return;
    // Loop through one confirming with the other
    for (let i = 0; i < s.legth; i++) {
        if (t.includes(s[i])) {
            t.replace(s[i], "");
            s.replace(s[i], "");
        } else {
            boolValid = false;
        }
    }
    return boolValid;
};
// refined Approach1
// Time complexity -> O(n)
// space complexity -> O(1)
const anagramFn2 = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }
    // compare all characters
    for (let i = 0; i < s.length; i++) {
        if (t.includes(s[i])) {
            t.replace(s[i], "");
            s.replace(s[i], "");
        } else {
            return false;
        }
    }
    return true;
};
console.log(anagramFn());
console.log(anagramFn2());

// frequency map - counts how many times a  character appears in a collection
// valid Anagram
// time complexity - O(n)
// space complexity- O(n)
// solution
const freqAnagram = (s, t) => {
    // length validation
    if (s.length !== t.length) return false;
    const freqMap = new Map();
    // get the frequency of string s
    for (const char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }
    // Find the differences in the 2 strings
    for (const char in t) {
        if (!freqMap.get(char)) {
            return false;
        }
        freqMap.set(char, freqMap.get(char) - 1);
    }
    return freqMap.size === 0;
};
