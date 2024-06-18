const validParanthesisOrder = s => {
  const stack = []
  const str = s.trim()
  if (Math.round(str.length % 2) === 1) { return false }

  for (let i = 0; i < str.length; i++) {
    if (['(', '[', '{'].includes(str[i])) {
      stack.push(str[i])
    } else {
      switch (str[i]) {
        case ')':
          if (stack.pop() !== '(') { return false }
          break
        case ']':
          if (stack.pop() !== '[') { return false }
          break
        case '}':
          if (stack.pop() !== '{') { return false }
          break
      }
    }
  }

  return stack.length === 0
}

console.log(validParanthesisOrder(""))
console.log(validParanthesisOrder("("))
console.log(validParanthesisOrder("()"))
console.log(validParanthesisOrder("(]"))
console.log(validParanthesisOrder("([])"))
console.log(validParanthesisOrder("([{]})"))
console.log(validParanthesisOrder("()[]{}"))
