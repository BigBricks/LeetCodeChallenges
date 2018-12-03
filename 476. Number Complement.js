var findComplement = function(num) {
  return ((1 << (Math.floor(Math.log2(num)) + 1)) - 1) ^ num;
};
