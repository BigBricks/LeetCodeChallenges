/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if(nums.length < 1) {
        return 1;
    }
    for(let i = 1; i < nums.length+2; i++) {
        if(!nums.includes(i)) {
            return i;
        }
    }
};