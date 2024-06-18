const checkAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const arr = [];
  for (i = 0; i < 26; i++) {
    arr.push(0);
  }

  for (i = 0; i < str1.length; i++) {
    const asciiCode = str1[i].charCodeAt();
    let index = asciiCode - 97;
    const current = arr[index];
    arr[index] = current + 1;
  }

  for (i = 0; i < str2.length; i++) {
    const asciiCode = str2[i].charCodeAt();
    const current = arr[asciiCode - 97];
    arr[asciiCode - 97] = current - 1;
  }

  let isAnagram = true;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      isAnagram = false;
      break;
    }
  }
  return isAnagram;
};

var findAnagrams = function (s, p) {
  const res = [];
  for (let i = 0; i <= s.length - p.length; i++) {
    const subStr = s.substring(i, i + p.length);
    if (checkAnagram(p, subStr)) res.push(i);
  }

  return res;
};
