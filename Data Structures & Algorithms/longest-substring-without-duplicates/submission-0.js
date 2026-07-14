class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let n = s.length;
        let charSet = new Set();

        let l = 0;
        let res = 0;

        for (let r = 0; r < n; r++) {
            while(charSet.has(s[r])) {
                charSet.delete(s[l]);
                l++;
            }
            charSet.add(s[r]);
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
