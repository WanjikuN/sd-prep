// Merge Intervals

// Given an array of intervals, merge all overlapping intervals and return the non-overlapping intervals.

// Example
// Input:
// [[1,3], [2,6], [8,10], [15,18]]

// Output
// [
//   [1,6],
//   [8,10],
//   [15,18]
// ]
// Overall: O(n log n)
// Result/merged storage: O(n)
const mergeIntervals = (intervals) => {
    const sorted = [...intervals].sort((a, b) => a[0] - b[0]);
    let results = [sorted[0]];
    for (let i = 1; i < sorted.length; i++) {
        let previous = results[results.length - 1];
        let current = sorted[i];
        if (current[0] <= previous[1]) {
            previous[1] = Math.max(previous[1], current[1]);
        } else {
            results.push(current);
        }
    }
    return results;
};
console.log(
    mergeIntervals(
        [[1,3], [2,6], [8,10], [15,18]]
    ),
);
