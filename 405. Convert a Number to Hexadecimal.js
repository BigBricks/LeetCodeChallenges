var toHex = function(num) {
  if (num < 0) {
    num += 0xffffffff + 1;
  }
  return num.toString(16);
};
