// Binary Search - Search a 2D Matrix
// Problem
// You are give a m * n integer matrix with the following properties:
// 1. Each row is sorted in ascending order
// 2. The first interger of each row is greater than the last integer of the previous row
// Determine if a target exists in the matrix.
// Write a function that returns true if the target exists in the matrix, otherwise return false.
// Time Complexity: O(log(m * n))
// Space Complexity: O(1)
// matrix =

// [
//  [1, 3, 5, 7],
//  [10,11,16,20],
//  [23,30,34,60]
// ]
// target = 3
// Output = true
const searchMatrix = (matrix, target) => {
    let left = 0;
    let right = matrix.length * matrix[0].length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let row = Math.floor(mid / matrix[0].length);
        let col = mid % matrix[0].length;
        let value = matrix[row][col];
        if (value === target) {
            return true;
        } else if (value > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return false;
};
console.log(
    searchMatrix(
        [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60],
        ],
        3,
    ),
); // true

console.log(
    searchMatrix(
        [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60],
        ],
        13,
    ),
); // false

console.log(searchMatrix([[1]], 1)); // true

console.log(searchMatrix([[1]], 2)); // false

console.log(searchMatrix([[1, 3]], 3)); // true

console.log(searchMatrix([[1], [3]], 3)); // true
