// Valid Anagram

// Now let's increase the difficulty slightly.

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An anagram contains the same characters with the same frequencies, just potentially in a different order.

// Examples
// Input:
// s = "anagram"
// t = "nagaram"

// Output:
// true
const anagramFn = (s, t) => {
    if (s.length !== t.length) return false;
    let map = new Map();
    for (const char1 of s) {
        map.set(char1, (map.get(char1) || 0) + 1);
    }
    for (const char2 of t) {
        if (!map.has(char2)) {
            return false;
        } else {
            map.set(char2, map.get(char2) - 1);
        }
    }
    for (const val of map.values()) {
        if (val !== 0) return false;
    }
    return true;
};
console.log(anagramFn("anagram","nagaram"))