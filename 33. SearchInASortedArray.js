/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let i = nums.length;
    while(i >= 0) {
        if(nums[i] === target) {
            return i;
        } 
        else{
        i--;
        }
    }
    return -1;
};