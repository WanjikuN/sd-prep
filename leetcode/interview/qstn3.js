// Given two strings s and t, determine if t is an anagram of s.
// s = "anagram"
// t = "nagaram"
// → true

// s = "rat"
// t = "car"
// → false

// 1. What pattern/data structure would you use?frequency map for anagram
// 2. What exactly would you store?key->char , value-> freq
// 3. How would you determine whether the two strings match? create a map for one and loop through the other if map.values for all == 0 then they match
// a->3
// n->1
// g->1
// r->1
// m->1
// time =O(n)
// space =O(k)
const isValidAnagram = (s,t) => {
    if(s.length !== t.length){
        return false
    }
    const sMap = new Map()
    for(const char of s){
        sMap.set(char, (sMap.get(char)||0)+1)
    }
    for(let i=0;i<t.length;i++){
        if(sMap.has(t[i])){
            sMap.set(t[i],sMap.get(t[i])-1)
        }else{
            return false
        }
    }
    for(const val of sMap.values()){
        if(val != 0){
            return false
        }
    }

    return true;
};
console.log(isValidAnagram("anagram","nagaram"))
console.log(isValidAnagram("cat","rat"))