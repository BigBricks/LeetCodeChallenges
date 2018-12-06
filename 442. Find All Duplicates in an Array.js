var findDuplicates = function(nums) {
  let ans = [];
  let x = nums.sort(function(a, b) {
    return a - b;
  });
  for (let i = 0; i < nums.length; i++) {
    if (x[i] === x[i + 1]) {
      ans.push(x[i]);
      i++;
    }
  }
  return ans;
};
