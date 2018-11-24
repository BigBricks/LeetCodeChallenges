var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let q = i + 1; q < nums.length; q++) {
      if (nums[i] + nums[q] === target) return [i, q];
    }
  }
};
