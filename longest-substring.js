const longestSubstring = (str) => {
  let result = 0
  let tempStr = ""
  for (let i = 0; i < str.length; i++) {
    if (tempStr.indexOf(str[i]) === -1) {
      tempStr += str[i]
    }
    else {
      result = tempStr.length > result ? tempStr.length : result
      tempStr = tempStr.substring(tempStr.indexOf(str[i]) + 1) + str[i]
    }
  }
  console.log(tempStr)
  return result
}

console.log(longestSubstring("dvdf"))
