const maxProfitMulti = (prices) => {
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      max += (prices[i] - prices[i - 1]);
      console.log(prices[i] - prices[i - 1])
    }
  }
  return max;
}

const maxProfitMultiple = (prices) => {
  let min = Infinity;
  let currStock = null;
  let flag = false;
  let overAllProfit = 0;
  for(let i = 0; i < prices.length; i++) {
    // Check if stock bought
    if(flag) {
      // Check if time to sell
      if(prices[i+1] < prices[i] || prices[i+1] === undefined) {
        overAllProfit += prices[i] - currStock;
        min = prices[i];
        flag = false;
        currStock = null;
      }
    } else if (min > prices[i]) {
      // Check if the price is min
      min = prices[i];
      // Check if the right time to buy
      if(prices[i+1] >= prices[i]) {
        currStock = min;
        flag = true;
      }
    }
  }
  return overAllProfit;
}

// console.log(maxProfitMulti([]))
// console.log(maxProfitMulti([7]))
// console.log(maxProfitMulti([2,4,1]))
// console.log(maxProfitMulti([1, 2, 3, 4, 5]))
// console.log(maxProfitMulti([7, 6, 4, 3, 1]))
// console.log(maxProfitMulti([7, 1, 5, 3, 6, 4]))

console.log(maxProfitMulti([3,3,5,0,0,3,1,4]))
