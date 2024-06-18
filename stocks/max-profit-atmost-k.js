const maxProfitMultiAtmostK = (k, prices) => {

  if (k === 0 || prices.length === 0 || prices.length === 1) return 0
  let costArray = new Array(k).fill(Infinity)

  return prices.reduce(
    (kProfits, price) => {

      for (let i = 0; i < costArray.length ; i++) {
        if (i === 0) {
          costArray[i] = Math.min(costArray[i], price)
          kProfits[i] = Math.max(kProfits[i], price- costArray[i])
        }
        else {
          costArray[i] = Math.min(costArray[i], price - kProfits[i-1]);
          kProfits[i] = Math.max(kProfits[i], price - costArray[i]);
        }
      }
      return kProfits;
    },
    new Array(k).fill(0)
  )[k-1];
};

// console.log(maxProfitMulti([]))
// console.log(maxProfitMulti([7]))
// console.log(maxProfitMulti([2,4,1]))
console.log(maxProfitMultiAtmostK([1, 2, 3, 4, 5]))
// console.log(maxProfitMulti([7, 6, 4, 3, 1]))
// console.log(maxProfitMulti([7, 1, 5, 3, 6, 4]))

console.log(maxProfitMultipleAtmostTwice([3,3,5,0,0,3,1,4]))
