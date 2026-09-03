// Flood Fill

// You are given an image represented by a 2D array of integers.
// Each integer represents a color.
// You are also given:

// sr — starting row
// sc — starting column
// color — the new color

// Perform a flood fill starting from (sr, sc).
// Change the starting cell and all 4-directionally connected cells with the same original color to the new color.

// You can move:

//        up
//         ↑
// left ← cell → right
//         ↓
//       down

// You cannot move diagonally.

// Example 1
// Input:

// image = [
//   [1,1,1],
//   [1,1,0],
//   [1,0,1]
// ]

// sr = 1
// sc = 1
// color = 2

// Starting position:

// [1, 1, 1]
// [1, ↑, 0]
// [1, 0, 1]

// The connected 1s become 2:

// Output:
// [
//   [2,2,2],
//   [2,2,0],
//   [2,0,1]
// ]
const floodFill = (image, sr, sc, color) => {
    const originalColor = image[sr][sc];
    if (originalColor === color) {
        return image;
    }
    const fill = (row, col) => {
        if (
            col < 0 ||
            col >= image[0].length ||
            row < 0 ||
            row >= image.length ||
            image[row][col] !== originalColor
        )
            return;
        image[row][col] = color;
        fill(row - 1, col); // up
        fill(row + 1, col); // down
        fill(row, col - 1); // left
        fill(row, col + 1); // right
    };
    fill(sr, sc);
    return image
};
image = [
  [1,1,1],
  [1,1,0],
  [1,0,1]
]

sr = 1
sc = 1
color = 2
console.log(floodFill(image,sr,sc,color))