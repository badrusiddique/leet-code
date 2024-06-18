const maxProfitSingle = (prices) => {
  let profit = 0, buy = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    }
    profit = Math.max(profit, prices[i] - buy)
  }

  return profit
}

// console.log(maxProfit([]))
// console.log(maxProfit([7]))
console.log(maxProfitSingle([2,4,1]))
console.log(maxProfitSingle([7,6,4,3,1]))
console.log(maxProfitSingle([7,1,5,3,6,4]))
