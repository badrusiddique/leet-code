const maxProfitMultiAtmostTwice = (prices) => {

  let profitOnPurchase1 = 0, profitOnPurchase2 = 0;
  let costPriceOnPurchase1 = Infinity, costPriceOnPurchase2 = Infinity;

  for(let price of prices){
    costPriceOnPurchase1 = Math.min(costPriceOnPurchase1, price);
    profitOnPurchase1    = Math.max(profitOnPurchase1, price - costPriceOnPurchase1);
    costPriceOnPurchase2 = Math.min(costPriceOnPurchase2, price - profitOnPurchase1);
    profitOnPurchase2    = Math.max(profitOnPurchase2, price - costPriceOnPurchase2);
  }

  return profitOnPurchase2;
}

// Firstly, calculate the max profit in the 1st run then we borrow the 1st run result during 2nd run.
//
//   Example input: [3,3,5,0,0,3,1,4]
// 1st run dp = [0,0,2,2,2,3,3,4]; // 1st min = 3, profit = 2; 2nd min = 0, profit = 4;
// 2nd run dp = [0,0,2,2,2,5,5,6]; // 1st min = 3, profit = 2; 2nd min = 0 - dp[4] = 0 - 2, profit = 6
//
// You may wonder how does this solve the logic of 2nd buy before 1st sell. It is because dp[4] = 2 which is basically the cut off of the profit before end of day 4; Subract the current price, $0, with profit we make, we can think of the current price as $-2.
const maxProfitMultipleAtmostTwice = prices => {
  if(prices.length === 0) return 0

  let dp = new Array(prices.length).fill(0);
  let min = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);  // or Math.min(min, prices[i] - dp[i]) , FYI: dp[i] is 0
    max = Math.max(max, prices[i] - min);
    dp[i] = max;
  }

  // 1st run dp = [0,0,2,2,2,3,3,4];

  min = prices[0];
  max = 0;
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i] - dp[i]); // substract dp[i]  = current price - what profit we made during 1st run.
    max = Math.max(max, prices[i] - min);
    dp[i] = max;
  }

  // 2nd run dp = [0,0,2,2,2,5,5,6];

  return dp.pop();
}

// Then we now discuss the solution all over the discussion.
//   This solution consolidates the above 2 dp results in one loop which is genius. If you print out sell1, you will see it's the 1st-run dp result and sell2 is the 2nd-run dp result;
const maxProfitMultipleAtmostTwiceOneLoop = function(prices) {
  let sell2 = 0, sell1 = 0, buy1 = -Infinity, buy2 = -Infinity;
  for (let i = 0; i < prices.length; i++) {
    buy1 = Math.max(buy1, -prices[i]);
    sell1 = Math.max(sell1, buy1 + prices[i]);
    buy2 = Math.max(buy2, sell1 - prices[i]);
    sell2 = Math.max(sell2, buy2 + prices[i]);
    console.log(`buy1: ${buy1} | sell1: ${sell1} | buy2: ${buy2} | sell2: ${sell2} | price: ${prices[i]}`);
  }
  return sell2;
};

// console.log(maxProfitMulti([]))
// console.log(maxProfitMulti([7]))
// console.log(maxProfitMulti([2,4,1]))
console.log(maxProfitMultiAtmostTwice([1, 2, 3, 4, 5]))
// console.log(maxProfitMulti([7, 6, 4, 3, 1]))
// console.log(maxProfitMulti([7, 1, 5, 3, 6, 4]))

console.log(maxProfitMultipleAtmostTwice([3,3,5,0,0,3,1,4]))
