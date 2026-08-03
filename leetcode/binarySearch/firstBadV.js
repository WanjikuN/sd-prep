// First Bad Version
// Problem

// You are a product manager and are leading a team to develop a new product.

// Unfortunately, the latest version of your product has a bug.

// Since each version is built upon the previous one, all versions after a bad version are also bad.

// You are given:

// isBadVersion(version)

// which returns:

// true if the version is bad.
// false otherwise.

// Your task is to find the first bad version.

// You should minimize the number of calls made to isBadVersion().
// 1 <= n <= 2^31 - 1
// There is at least one bad version.
// All versions after the first bad version are also bad.
// Input -->n=5,
// Versions:
// 1  2  3  4  5
// G  G  G  B  B
// Output --> 4
// Time complexity O(log n)
// Space complexity O(1)
const firstBadFn = (n) => {
    let left = 1;
    let right = n;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (isBadVersion(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};
