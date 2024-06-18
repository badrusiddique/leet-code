const strStr = (haystack, needle) => {
  if (needle.length === 0) return 0;

  let isSubString = false
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      isSubString = true
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          isSubString = false
          break;
        }
      }
      if (isSubString){ return i; }
    }
  }

  return -1;
};

console.log(strStr("", ""))
console.log(strStr("mississippi","issip"))
console.log(strStr("", "ll"))
console.log(strStr("hello", ""))
console.log(strStr("hello", "ll"))
console.log(strStr("aaaaa", "bba"))
