// input  --> output
// [3,2,5,4,1] target : 8 --> [0,2]

// pseudo
// create a function that takes in an array and a target
//     create a hashMap.
//     loop through the array
//         get the diff btwn the target and the char
//         if diff is in the map get the char index and the diff value
//         return them

const pairFn = (arr1, target) => {
    const pairSumMap = new Map();
    for (let i = 0; i < arr1.length; i++) {
        let diff = target - arr1[i];
        if (pairSumMap.has(diff)) {
            return [pairSumMap.get(diff), i];
        }
        pairSumMap.set(arr1[i], i);
    }
    return [];
};
