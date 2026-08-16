// Valid Anagram
// s = "anagram"
// t = "nagaram"
// → true

// s = "rat"
// t = "car"
// → false

// -> size
// -> build a map for s and traverse t checking if it is there
const validAnagram = (s, t) => {
    const sMap = new Map();
    if (s.length !== t.length) {
        return false;
    }
    // frequency map
    for (let i = 0; i < s.length; i++) {
        sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
    }
    // traverse t
    for (let i = 0; i < t.length; i++) {
        if (sMap.has(t[i])) {
            sMap.set(t[i], sMap.get(t[i]) - 1);
        } else {
            return false;
        }
    }
    for (const val of sMap.values()) {
        if (val !== 0) {
            return false;
        }
    }
    return true;
};
console.log(validAnagram("anagram","nagaram"))