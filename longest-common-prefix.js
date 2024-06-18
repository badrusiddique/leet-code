const longestCommonPrefix = strs => {
  if (strs.length === 0) return ""
  if (strs.length === 1) return strs[0]

  let result = ""
  for (let i = 0; i < 201; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[0][i] === undefined) return result
      if (strs[0][i] !== strs[j][i]) {
        return result
      }
    }
    result += strs[0][i]
  }

  return result;
}

console.log(longestCommonPrefix(["flower","flow","flight"]))
