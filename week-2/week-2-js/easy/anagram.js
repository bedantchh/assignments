/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let arr1 = str1.split("")
    let sortedstring1 = arr1.sort()
    let sortedstr1 = sortedstring1.join("")
    let arr2 = str1.split("")
    let sortedstring2 = arr2.sort()
    let sortedstr2 = sortedstring2.join("")
    
    if(sortedstr1 == sortedstr2){
      return true
    }
    else {
      return false
    }
}

let result = isAnagram("hello","lloeh")

console.log(result)

module.exports = isAnagram;
