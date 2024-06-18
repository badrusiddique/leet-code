const dupSortedArr = nums => {
  if (nums.length <= 1) return nums

  let result = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[result] = nums[i]
      result += 1
    }
  }

  for (let i = result; i < nums.length; i++) {
    nums[i] = '_'
  }

  return nums
}

// console.log(dupSortedArr([]))
// console.log(dupSortedArr([1]))
console.log(dupSortedArr([1,1,2]))
console.log(dupSortedArr([0,0,1,1,1,2,2,3,3,4]))
