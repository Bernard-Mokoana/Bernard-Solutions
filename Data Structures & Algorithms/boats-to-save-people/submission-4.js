class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        let n = people.length;
        people.sort((a,b) => a - b)

        let left = 0;
        let right = n - 1;

        let arr = new Array()
        let res = 0;

        while (left <= right) {
            if (people[left] + people[right] <= limit) {
                arr.push([people[left] + people[right]])
                left++;
                right--;
            } else if(people[left] === limit) {
                arr.push([people[left]]);
                left++;
            } else if(people[right] === limit) {
                arr.push([people[right]]);
                right--;
            }
             else if (people[right] < limit) {
                arr.push([people[right]])
                right--;
            }
             else if(people[left] < limit) {
                arr.push([people[left]]);
                left++;
            }
        }

        return arr.length;
    }
}
