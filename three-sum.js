const threeSum = arr => {
  const n = arr.length
  if (n < 2) return []

  const result = []
  const arrSorted = arr.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1, right = n - 1
    while (left < right) {
      const sum = arrSorted[i] + arrSorted[left] + arrSorted[right];

      if (sum === 0) {
        const temp = [arrSorted[i], arrSorted[left], arrSorted[right]]
        result.push(temp)
        break
      }

      if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }

  return result
}

console.log(threeSum([-1,0,1,2,-1]))
console.log(threeSum([0,0,0, 0]))
