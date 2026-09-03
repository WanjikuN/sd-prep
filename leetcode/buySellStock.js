// Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a stock on the i-th day.
// Choose one day to buy and a different day in the future to sell.
// Return the maximum profit you can achieve.
// If you cannot make a profit, return 0.

// Example 1

// Input:

// prices = [7,1,7,3,6,4]

// Output:

// 5
// time complexity- O(n)
// space Complexity-O(1)
const stocksFn = (prices) => {
    let maxProfit = 0;
    let minPrice = prices.length > 0 ? prices[0] : 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            let profit = prices[i] - minPrice;
            maxProfit = Math.max(profit, maxProfit);
        }
    }

    return maxProfit;
};
console.log(stocksFn([7,1,5,3,6,4]))