var missingNumber = function(nums) {
  let length = nums.length;
  let original = ((length + 1) * length) / 2;
  for (let i = 0; i < length; i++) {
    original -= nums[i];
  }
  return original;
};
