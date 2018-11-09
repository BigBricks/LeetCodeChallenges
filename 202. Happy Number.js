var isHappy = function(n) {
  while (n > 4) {
    let digits = n.toString().split("");
    let real = digits.map(Number);
    let sum = 0;
    for (let i = 0; i < real.length; i++) {
      sum += Math.pow(real[i], 2);
    }
    n = sum;
  }
  return n === 1;
};
