// input  --> output
// [4,7,9,2,5,1] target 35--> [1,4]

// pseudo
// create a function that takes in an array and a target
//     create a hash Map
//     loop through the array
//         get the division
//         check if map has it
//             if it does , return the indices involved
//         add values to the map

const pairFn = (arr1, target) => {
    const pairMap = new Map();
    for (let i = 0; i < arr1.length; i++) {
        if (target === 0) {
            if (arr1[i] === 0 && pairMap.size > 0) {
                return [pairMap.values().next().value, i];
            }

            if (arr1[i] !== 0 && pairMap.has(0)) {
                return [pairMap.get(0), i];
            }
        } else {
            let div = target / arr1[i];
            if (pairMap.has(div)) {
                return [pairMap.get(div), i];
            }
        }
        pairMap.set(arr1[i], i);
    }

    return [];
};
