const strToInt = (str) => {
  const arr = str.trim().split(" ")
  const num = isNaN(arr[0]) ? 0 : arr[0]
  if (num >= Math.pow(2, 31)) {
    return Math.pow(2, 31) - 1
  } else if (num <= Math.pow(-2, 31)) {
    return Math.pow(-2, 31)
  } else {
    return num
  }
}

console.log(strToInt("91283472332"))
console.log(strToInt("-91283472332"))
console.log(strToInt("    -42   "))
console.log(strToInt("4193 with words"))
console.log(strToInt("words and 987"))
