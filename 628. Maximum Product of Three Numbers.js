var maximumProduct = function(nums) {
  nums.sort(function(a, b) {
    return a - b;
  });
  let a = nums[0] * nums[1] * nums[nums.length - 1];
  let b = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
  return Math.max(a, b);
};
