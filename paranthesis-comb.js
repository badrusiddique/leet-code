const paranthesis = n => {
  const result = []

  const combo = (temp, start, end) => {
    if (start < end) { return; }

    if (start === n && end === n) {
      result.push(temp);
      return;
    }

    if (start < n) { combo(temp + '(', start + 1, end) }
    if (end < n) { combo(temp + ')', start, end + 1) }
  }

  combo("", 0, 0)
  return result;
}

for (let i = 1; i < 5; i++) {
  console.log(paranthesis(i))
}
