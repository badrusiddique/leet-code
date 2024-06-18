const maxWaterArea = (arr) => {
  let left = 0, right = arr.length - 1
  let area = 0
  while (left < right) {
    const base = right - left;
    const height = Math.min(arr[left], arr[right])
    const currentArea = base * height

    if (currentArea > area) {
      area = currentArea
    }

    if (arr[left] < arr[right]) {
      left++
    } else {
      right--
    }
  }

  return area;
}

console.log(maxWaterArea([]))
console.log(maxWaterArea([1, 1]))
console.log(maxWaterArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxWaterArea([3, 9, 3, 4, 7, 2, 12, 6]))
