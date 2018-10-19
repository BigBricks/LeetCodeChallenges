var checkPerfectNumber = function(num) {
  let amount = 1;
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      amount += i;
    }
  }
  return amount === num;
};
