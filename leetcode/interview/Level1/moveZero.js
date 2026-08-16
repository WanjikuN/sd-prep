//  Move Zeroes
// Move all zeroes to the end while maintaining the relative order of the non-zero elements.
// nums = [0,1,0,3,12]

// → [1,3,12,0,0]
// const moveZeroFn = (nums) => {
//     let left = 0;
//     let result = new Array(nums.length).fill(0);
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             result[left] = nums[i];
//             left++;
//         }
//     }

//     return result;
// };
// console.log(moveZeroFn([0, 1, 0, 3, 12]));
const moveZeroFn = (nums) => {
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0){
             if (left !== i) {
                nums[left] = nums[i];
                nums[i] = 0;
            }
            left++
        }
    }
    return nums
};
console.log(moveZeroFn([0, 1, 0, 3, 12]));
