class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let arr = s.split("");
        arr.sort();
        console.log(arr);

        let arr2 = t.split("");
        arr2.sort();
        console.log(arr2);

        for (let i = 0; i < arr.length; i++) {
                if(arr[i] !== arr2[i]) {
                    return false;
            }
        }

        return true;
    }
}