function isPalindrome(word) {

  for(i = 0, j = word.length - 1; i < word.length; i++, j--) 
  {
    if (word[i] !== word[j])
    {
    return false
    }
  }

  return true
}

// Do not edit this line;
module.exports = isPalindrome;