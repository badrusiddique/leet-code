const romanToInt = (str) => {
  const dict = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000,
  };

  let result = 0
  for (let i = 0; i < str.length; i++) {
    let value = dict[str[i]];
    if (i + 1 < str.length && dict[`${str[i]}${str[i+1]}`]) {
      value = dict[`${str[i]}${str[i+1]}`]
      i += 1
    }
    result += value;
  }

  return result;
}

console.log(romanToInt("CMLXXXVIII"))
