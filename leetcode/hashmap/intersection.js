// input --> ooutput
// [4,2,1,6], [3,6,9,2,10] --> [2,6] or [6,2]

// pseudo
// Create a fn that takes in 2 arrays
//     create a hash map for the  largest array
//     loop throught the smallest checking if chars are in map

const intesectionFn = (arr1, arr2) => {
    const set = new Set(arr1);
    let newArr = [];
    for (let i = 0; i < arr2.length; i++) {
        if (set.has(arr2[i])) {
            newArr.push(arr2[i]);
            set.delete(arr2[i]) // prevent duplicates
        }
    }
    return newArr;
};
