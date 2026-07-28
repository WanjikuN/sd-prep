// Two Pointers
// Problem

// Return true if one string contains any permutation of another.
// BDD
// Input ---> s1="ab" s2="eidbaooo"
// Output ---> true
// Behaviour --->
// Space complexity O(n)
// Time complexity O(n)
const permFn = (s1, s2) => {
    const map1 = new Map();
    const map2 = new Map();

    for (const char of s1) {
        map1.set(char, (map1.get(char) || 0) + 1);
    }
    for (const char of s2) {
        map2.set(char, (map2.get(char) || 0) + 1);
    }
    const shortMap = map1.size < map2.size ? map1 : map2;
    const longMap = map1.size < map2.size ? map2 : map1;
    const shortStr = s1.length < s2.length ? s1 : s2;
    const longStr = s1.length < s2.length ? s2 : s1;
    let r = shortMap.size;
    let l = 0;
    for ([key, value] of shortMap) {
        if (longMap.has(key)) {
            if (value !== longMap.get(key)) {
                return false;
            }
            while (r < longStr) {
                if(longMap.has(longStr[l])){
                    r++
                }
            }
        }
    }
    return true;
};
console.log(permFn("babc", "eicdbabooo"));
