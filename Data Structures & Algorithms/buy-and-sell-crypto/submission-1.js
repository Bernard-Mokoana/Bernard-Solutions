class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n = prices.length;
        let left = 0; // sell
        let right = left + 1; // buy

        let maxProfit = 0;
        let profit = 0;

        while (right < n ) {
            if (prices[left] < prices[right]) {
                profit = prices[right] - prices[left];
                maxProfit = Math.max(maxProfit, profit);
            } else{
                left = right;
            }
            right++;
        }
        return maxProfit;
    }
}
