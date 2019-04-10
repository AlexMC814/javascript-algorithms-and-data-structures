// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1
function palindrome(str) {
  const revStr = str
    .split('')
    .reverse()
    .join('');
  return str === revStr;
}

// Solution 2
function palindrome(str) {
  let revStr = '';
  for (let char of str) {
    revStr = char + revStr;
  }
  return str === revStr;
}

// Solution 3
function palindrome(str) {
  let revStr = str.split('').reduce((revStr, char) => char + revStr, '');
  return str === revStr;
}

// Solution 4
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

palindrome('abba');
