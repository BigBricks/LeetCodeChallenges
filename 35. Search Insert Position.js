var searchInsert = function(nums, target) {
  if (nums.indexOf(target) === -1) {
    if (target > nums[0]) {
      for (let i = nums.length - 1; 0 <= i; i--) {
        if (nums[i] < target) {
          return i + 1;
        }
      }
    } else return 0;
  }
  return nums.indexOf(target);
};
