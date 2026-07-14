class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let arr1 = strs[0];

        for (let i = 0; i < arr1.length; i++) {
            for (let s of strs) {
                if (i === s.length || s[i] !== strs[0][i]) {
                    return s.slice(0, i);
                }
            }
        }

        return strs[0];
    }
}
