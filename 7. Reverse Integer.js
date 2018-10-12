var reverse = function(x) {
  if (x < 0) {
    let b = x * -1;
    let v = b
      .toString()
      .split("")
      .reverse()
      .join("");
    let q = Number(v);
    let j = (q * -1).toString();
    if (Number(j) > Math.pow(2, 31) - 1 || Number(j) < Math.pow(2, 31) * -1) {
      return 0;
    }
    return Number(j);
  }
  let j = x
    .toString()
    .split("")
    .reverse()
    .join("");
  if (j > Math.pow(2, 31) - 1 || j < Math.pow(2, 31) * -1) {
    return 0;
  }
  return Number(j);
};
