const intToRoman = (num) => {
  const digit = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC' ];
  const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
  const thousands = ['', 'M', 'MM', 'MMM']

  const th = Math.floor(num / 1000)
  const thr = Math.floor(num % 1000)
  const h = Math.floor(thr / 100)
  const hr = Math.floor(thr % 100)
  const t = Math.floor(hr / 10)
  const tr = Math.floor(hr % 10)

  return thousands[th] + hundreds[h] + tens[t] + digit[tr]
};

for (let i = 0; i < 50; i++) {
  console.log(`${i} ---> ${intToRoman(i)}`)
}

for (let i = 50; i < 100; i++) {
  console.log(`${i} ---> ${intToRoman(i)}`)
}

for (let i = 100; i < 1000; i++) {
  console.log(`${i} ---> ${intToRoman(i)}`)
}

for (let i = 1000; i < 4000; i++) {
  console.log(`${i} ---> ${intToRoman(i)}`)
}
