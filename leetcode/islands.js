// Number of Islands

// You are given a 2D grid containing:

// "1" = land
// "0" = water

// An island is a group of connected land cells.
// Cells are connected only up, down, left, or right — not diagonally.
// Return the number of islands.

// Example 1
// Input:

// [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]

// Output:

// 1

// All those 1s are connected, so there is one island.
const islandsFn = (grid) => {
    let count = 0;
    const rows = grid.length;
    const cols = rows > 0 ? grid[0].length : 0;

    const fill = (row, col) => {
        // out of bounds or water/already-visited: stop
        if (
            row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols ||
            grid[row][col] === "0"
        ) {
            return;
        }

        grid[row][col] = "0"; // mark visited
        fill(row - 1, col); // top
        fill(row + 1, col); // bottom
        fill(row, col - 1); // left
        fill(row, col + 1); // right
    };

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === "1") {
                count++;
                fill(row, col); // sink the whole island
            }
        }
    }

    return count;
};

console.log(
    islandsFn([
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"],
    ]),
); // 1
