// anagram is a string that has the same characters as the next string
// ex -> 'cats' 'tacs' -> true
//    -> 'dshjs' 'ssjhd' -> true

// pseudo
// write a function that take in two strings
//     if the length is not equal return
//     create a frequency map for the first strings
//     loop through the second strings
//         if the character is not in the first string's fmap return false
//         if character is in map reduce count
//         return if for all frequency === 0

const anagramFn = (s1, s2) => {
    if (s1.length !== s2.length) return false;
    const freqMap = new Map();
    for (const char of s1) {
        //n
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }
    for (const char of s2) {
        //n
        if (!freqMap.get(char)) return false;
        freqMap.set(char, freqMap.get(char) - 1);
    }
    return true;
};
console.log(anagramFn("ctsa", "cats"));
