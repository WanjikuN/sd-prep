// Return the maximum profit from buying and selling once.
// prices = [7,1,5,3,6,8,4,10]

// → 5
// ->  Not ordered
// Max

const buySell = (prices) => {
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            maxProfit = Math.max(prices[i] - minPrice,maxProfit);
        }
    }
    return maxProfit;
};
console.log(buySell([7, 1, 5, 3, 6, 8, 4, 20]));
