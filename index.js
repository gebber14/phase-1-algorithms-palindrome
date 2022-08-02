// function isPalindrome(word) {
//   // Write your algorithm here
//   const wordSplit = word.split("");
//   const reverseWordSplitArray = wordSplit.reverse();
//   const joinReverseWordSplitArray = reverseWordSplitArray.join();
//   if (word === joinReverseWordSplitArray) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isPalindrome(string) {

  // Here, I convert string to an array
  const arrayValues = string.split('');

  // Here, I reverse the array values
  const reverseArrayValues = arrayValues.reverse();

  // Here, I convert array to string
  const reverseString = reverseArrayValues.join('');

  if(string == reverseString) {
      console.log('It is a palindrome');
      return true
  }
  else {
      console.log('It is not a palindrome')
      return false;
  }
}

//take input
// const string = prompt('Enter a string: ');

// isPalindrome(string);

/* 
  Add your pseudocode here
I want to take a string, make it into an array of single-character strings (aka one letter)
Then, I should test if the string has an even number of characters:
Given an array: [0,n-a,    ,n]  
If yes, then test 0, n-a, ..., n
If no, then match index 0 === n?
            match 0+a === n-a?
Note: I came up with this idea before Google introduced me to the wonders of reverArrayValues!

/*
  See above for line by line solution
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
