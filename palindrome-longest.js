var longestPalindrome = function (s) {
  let max = 0;
  let result = '';

  for (let i = 0; i < s.length; i++) {
    let left = i,
      right = i;
    while (left > -1 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > max) {
        result = s.substring(left, right + 1);
        max = right - left + 1;
      }
      left--;
      right++;
    }

    let leftEven = i,
      rightEven = i + 1;
    while (
      leftEven > -1 &&
      rightEven < s.length &&
      s[leftEven] === s[rightEven]
      ) {
      if (rightEven - leftEven + 1 > max) {
        result = s.substring(leftEven, rightEven + 1);
        max = rightEven - leftEven + 1;
      }
      leftEven--;
      rightEven++;
    }
  }

  return result;
};
