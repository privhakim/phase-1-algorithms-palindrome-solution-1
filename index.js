function isPalindrome(word) {
  //converting the word to lowercase
  const lowercaseWord = word.toLowerCase();
 
   // Reversing the word to obtain reversed version of the string
   const reversedWord = lowercaseWord.split('').reverse().join('');
 
   // Checking if the reversed word is equal to the original word
   return lowercaseWord === reversedWord;
 
   // Write your algorithm here
 }
 
 
 /* 
   Add your pseudocode here
   1. Convert the word to lowercase.
   2. Reverse the lowercase word.
   3. Check if the reversed word is equal to the original word.
   4. Return true if they are equal, otherwise return false.
 
 */
 
 /*
   Add written explanation of your solution here
 */
 
 // You can run `node index.js` to view these console logs
 if (require.main === module) {
   // add your own custom tests in here
   console.log("Expecting: true");
   console.log("=>", isPalindrome("racecar"));
 
   console.log("");
 
   console.log("Expecting: false");
   console.log("=>", isPalindrome("hello"));
 }
 
 module.exports = isPalindrome;
 