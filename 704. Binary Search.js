var search = function(nums, target) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};
