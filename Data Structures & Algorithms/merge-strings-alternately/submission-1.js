class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let result = "";
        let i = 0;
        let n = word1.length;
        let m = word2.length;

        const maxLength = Math.max(n, m);

        while (i < maxLength) {
            if (i < n) {
                result += word1[i];
            }

            if (i < m) {
                result += word2[i];
            }
            i++;
        }

        return result;
    }
}
