/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let i = nums.length;
    let arr = [];
    while(i >= 0) {
        if(nums[i] === target) {
            arr.push(i);
        } 
        i--;
    }
    if(arr.length === 1) {
        return [arr[0], arr[0]] 
    }
    else if(arr.length > 0 && arr.length < 3) {
        return arr.reverse();
    }
    return arr.length > 2 ? 
        [arr[arr.length-1], arr[0]]:[-1,-1];
};