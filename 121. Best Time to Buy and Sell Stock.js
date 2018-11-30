var maxProfit = function(prices) {
  let count = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > count) {
        count = prices[j] - prices[i];
      }
    }
  }
  return count;
};
