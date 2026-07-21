// Input   --> Output
// potato  --> o
// snsdssnds --> s

// pseudo
// create a function that takes in a String
//    create a frequency Map
//    from the map get the max value

const freqFn = (s1) => {
    const freMap = new Map();
    const newMap = new Map();
    let maxCount = 0;
    for (const char of s1) {
        freMap.set(char, (freMap.get(char) || 0) + 1);
    }
    for (const c of freMap) {
        if (c[1] >= Math.max(maxCount, c[1])) {
            if (newMap.has(c[1])) {
                continue;
            } 
            newMap.clear();
            maxCount = c[1];
            newMap.set(maxCount, c[0]);
        }
    }
    return newMap.get(maxCount);
};
console.log(freqFn("fatttttdnfkkkkkds"));
