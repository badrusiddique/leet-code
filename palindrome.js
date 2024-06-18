const normalize = (str) => {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
}

var isPalindrome = function(s) {

  const validStr = normalize(s);

  let l = 0;
  let r = validStr.length - 1;

  while (l < r) {
    if (validStr[l] !== validStr[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true;
};
