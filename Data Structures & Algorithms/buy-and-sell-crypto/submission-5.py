class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        l, r, maxProfit = 0, 1, 0
        n = len(prices)

        while r < n:
            if prices[l] < prices[r]:
                profit = prices[r] - prices[l]
                maxProfit = max(maxProfit, profit)
            else:
                l = r
            r += 1
        return maxProfit
        