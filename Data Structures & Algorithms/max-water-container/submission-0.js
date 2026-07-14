class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let n = heights.length;
        let res = 0;
        let left = 0;
        let right = n - 1;


        while (left < right) {
            let area = (right - left) * Math.min(heights[left], heights[right]);
            res = Math.max(res, area);

            if(heights[left] < heights[right]) {
                left++;
            } else{
                right--;
            }
        }
        return res;
    }
}
