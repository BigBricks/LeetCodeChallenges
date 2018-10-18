var majorityElement = function(nums) {
  let bob = nums.sort();
  let j = parseInt(nums.length / 2);
  return bob[j];
};
