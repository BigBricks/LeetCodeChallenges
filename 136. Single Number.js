var singleNumber = function(nums) {
  let b = nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (b[i] === b[i + 1] || b[i - 1] === b[i]) {
      i++;
    } else return b[i];
  }
};
