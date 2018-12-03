var maximumGap = function(nums) {
  let max = -1;
  if (nums.length <= 1) return 0;
  let x = nums.sort(function(a, b) {
    return a - b;
  });
  for (let i = nums.length; i > 0; i--) {
    if (x[i] - x[i - 1] > max) {
      max = x[i] - x[i - 1];
    }
  }
  return max;
};
