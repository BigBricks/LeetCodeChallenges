var singleNumber = function(nums) {
  let bob = nums.sort();
  for (let i = 0; i < bob.length; i += 3) {
    if (bob[i] !== bob[i + 2]) {
      return bob[i];
    }
  }
};
