class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n = nums.length;
        let l = 2 * n;

        let ans = new Array(l);

        for (let i = 0; i < n; i++) {
         nums.push(nums[i])
        }
        
        ans = nums;

        return ans;
    }
}
