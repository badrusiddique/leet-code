const reverseInt = (n) => {
  let temp = n < 0 ? n * -1 : n
  let reverse = 0
  while (temp !== 0) {
    reverse = reverse * 10 + Math.floor(temp % 10)
    temp = Math.floor(temp / 10)
  }

  const result = n < 0 ? parseInt(reverse) * -1 : parseInt(reverse)

  return result > Math.pow(2, 31) || result <= Math.pow(-2, 31)
    ? 0
    : result
}

console.log(reverseInt(1534236469))
