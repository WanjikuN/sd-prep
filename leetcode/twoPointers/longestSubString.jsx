// Two pointers
// Longest substring without repeating characters
// Problem

// Given a string,

// return the length of the longest substring without duplicate characters.

// BDD
// Input --> "abcabcbb"
// Output --> 3
// Behaivour --> abc ->max =3
//               b 1
// pseudo
// create longSubStr (str)
//     set
//     left0,right left+1
//     max =0
//     while(right<str.length)
//         if(set has right)
//             left --
//             right ++
//             set.size
//         else
//             set.add(right)
//             max(max,right-left+1 )
//             r++
const longSubStr = (str) => {
    const set = new Set();
    let l = 0;
    let r = 0;
    let maxLength = 0;
    while (r < str.length) {
        while (set.has(str[r])) {
            set.delete(str[l]);
            l++;
        }
        set.add(str[r]);
        maxLength = Math.max(maxLength, r - l + 1);
        r++;
    }
    return maxLength;
};
console.log(longSubStr("abcabcbb"));
