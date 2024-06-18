const anagram = (s, t) => {
  if (s.length === 0 || t.length === 0) {
    return false;
  }
  if (s.length !== t.length) {
    return false;
  }

  const sMap = {}
  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]]) {
      sMap[s[i]]++
    } else {
      sMap[s[i]] = 1
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (sMap[t[i]] && sMap[t[i]] !== 0) {
      sMap[t[i]]--
    } else {
      return false;
    }
  }

  return Object.values(sMap).every(x => x === 0);
}

console.log(anagram("", ''))
console.log(anagram("rat", 'car'))
console.log(anagram("", 'nagaram'))
console.log(anagram("listen", 'silent'))
console.log(anagram("anagram", 'nagaram'))
