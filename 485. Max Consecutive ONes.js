var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      temp = 0;
    } else {
      temp++;
      max = Math.max(max, temp);
    }
  }
  return max;
};
