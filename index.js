function isPalindrome(word) {
  // Write your algorithm here

  
}

/* 
  Add your pseudocode here
    get the string and convert into array.
    reverse the array
    convert the array into string
    compare original string with the reversed string.


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
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
