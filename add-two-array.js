const addTwoNumbers = (first, second) => {
  const result = [];
  let carryOver = 0;

  for (let i = 0; i < Math.max(first.length, second.length); i++) {

    const f_i = first.length > i ? first[i] : 0;
    const s_i = second.length > i ? second[i] : 0;

    const value = f_i + s_i + carryOver
    result.push(value > 9 ? value - 10 : value)
    carryOver = value > 9 ? 1 : 0
  }

  return carryOver !== 0 ? [...result, carryOver] : result
}

console.log(addTwoNumbers([2,4,3], [5,6,4]))
console.log(addTwoNumbers([0], [0]))
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]))
