const phoneMap = {
  0: [],
  1: [],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
}

const phoneCombination = digits => {
  const n = digits.length
  if (n === 0) { return [] }
  if (n === 1) { return phoneMap[digits] }

  const result = []
  const combo = (temp, start) => {
    if (start === n) {
      result.push(temp)
      return
    }

    phoneMap[digits[start]].forEach(x => combo(temp + x, start + 1))
  }

  combo("", 0)
  return result

}

console.log(phoneCombination("29"))
console.log(phoneCombination("2"))
console.log(phoneCombination(""))
