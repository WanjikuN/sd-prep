// Problem 4 — Binary Search on Answer
// Problem

// You are given:

// piles = [3,6,7,11]
// h = 8
// left =1
// right=Math.ma(...piles)
const canFinish = (piles, speed, h) => {
    let hrs = 0;
    for (const pile of piles) {
        hrs += Math.ceil(pile / speed);
    }

    return hrs <= h;
};

const minEatingSpeed = (piles, h) => {
    let left = 1;
    let right = Math.max(...piles);
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canFinish(piles, mid, h)) {
            right = mid ;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
console.log(minEatingSpeed([3, 6, 7, 11], 8)); // 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // 30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // 23
console.log(minEatingSpeed([1], 1)); // 1
