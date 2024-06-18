const validParanthesis = s => {
  const str = s.trim()
  let round = 0, square = 0, curly = 0

  if (Math.round(str.length % 2) === 1) { return false }

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case '(':
        round++
        break
      case '[':
        square++
        break
      case '{':
        curly++
        break
      case ')':
        round--
        break
      case ']':
        square--
        break
      case '}':
        curly--
        break
    }
  }

  return round === 0 && square === 0 && curly ===0

}

console.log(validParanthesis(""))
console.log(validParanthesis("("))
console.log(validParanthesis("()"))
console.log(validParanthesis("(]"))
console.log(validParanthesis("()[]{}"))
