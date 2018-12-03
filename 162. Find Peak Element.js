var findPeakElement = function(x) {
  let j = 0;
  if (x.length == 1) return j;
  if (x.length == 2 && x[1] > x[0]) return 1;
  if (x[x.length - 1] > x[x.length - 2]) return x.length - 1;
  if (x.length == 2 && x[1] < x[0]) return 0;

  for (let i = 1; i < x.length - 1; i++) {
    if (x[i - 1] < x[i] && x[i] > x[i + 1]) {
      j = i;
    }
  }
  return j;
};
