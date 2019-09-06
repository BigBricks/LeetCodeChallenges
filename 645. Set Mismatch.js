/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let hash = {};
    let min = Math.min(...nums);
    if(nums.length == 2) {
        return nums[0] > 1 ? [nums[0], 1] : [nums[0], 2]
    }
    let no = 0;
    for(let i = 0; i < nums.length; i++) {
        hash[nums[i]] = hash[nums[i]] ? hash[nums[i]] + 1 : 1;
        if(hash[nums[i]] === 2) {
         no = nums[i];
        }  
    }
    let x = min;
    while(x < min + nums.length) {
        if(hash[x] === undefined && min === 1) {
            return [no, x];
        }
        if(hash[min] === 2 && min !== 1) {
         return [min, min - 1];
      } 
      if(hash[x] === undefined && hash[x + 1] === undefined) {
            return [no, min -1];
        }
    
      
        x++;
    }
};