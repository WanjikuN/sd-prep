//  Group Anagrams - given a list of strings, group the ones that are anagrams of each other into their own sublist
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
// i   j
// eat tea
// eat tan
// eat ate
// eat nat
// eat bat
// brute force
const groupAnagramsFn = (lst) => {
    let newLst = [];
    for (const char of lst) {
        newLst.push(char.split("").sort().join(""));
    }
    for(let i=0; i<newLst.length; i++){
        for(let j=i+1;j<newLst.length;j++){
            if(newLst[i] === newLst[j]){
                [].push(lst[j])
            }
        
        }

    }
};
