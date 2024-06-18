const twoSum = (nums, target) => {
  const dict = {}
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (dict[diff] !== undefined) {
      return [dict[diff], i]
    } else {
      dict[nums[i]] = i;
    }
  }
}

const result = twoSum([2,7,11,15], 9)
console.log(result)
