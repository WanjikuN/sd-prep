// Fixed sized sliding window
// Problem

// Given a string and an integer k, return the maximum number of vowels in any substring of length k.
//input  ---> Output
// s="abciiidef", k =3 ---> 3
// abc ,bci,cii,iii,iid,ide,def
// l=0 k=2 max=0
// l=1 k=3 max=1
// l=2 k=4 max=2
// l=3
// l=0
// r=k
// maxVowels=0

const vowelsMax = (s, k) => {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let count = 0;

    // build the first window
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) count++;
    }

    let maxCount = count;

    // slide the window one step at a time
    for (let r = k; r < s.length; r++) {
        const l = r - k; // character leaving the window
        if (vowels.has(s[r])) count++; // char entering
        if (vowels.has(s[l])) count--; // char leaving

        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
};

console.log(vowelsMax("abciiidef", 3)); // 3
