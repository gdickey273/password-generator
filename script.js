

//Initializing arrays of upper case letter, lower case letters, numerical characters, and special characters.
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numerical = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [" ", "!", "#", "$", "%", "&", "'", "\"", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~",];

//Initializing empty array to store password criteria
var criteria = []; 

//Initializes a variable to keep track of whether the generated password meets user criteria and is assigned false.
var meetsCriteria = false;

//Initializes counter variables to keep track of how many of each type of character is included in the generated password.
var numberOfUpper, numberOfLower, numberOfNumerical, numberOfSpecial = 0;

function generatePassword(){

  //Prompts user for desired length of password until a valid answer is given
  var desiredPWLength = prompt("How long would you like your password to be? Please choose a number between 8 and 128.");
  while (!(Number.isInteger(parseInt(desiredPWLength))) || parseInt(desiredPWLength) < 8 || parseInt(desiredPWLength) > 128){
    desiredPWLength = prompt("Invalid entry. Please enter a number between 8 and 128");
  }

  //Asks user whether password should contain lowercase letters and if so adds lowerCase array to array of criteria
  var mustContainLower = confirm("Do you want your new password to contain lower case letter?"); 
  if (mustContainLower === true){
    criteria[criteria.length] = lowerCase;
  }

  //same as above but with upper case
  var mustContainUpper = confirm("Do you want your new password to contain upper case letter?");
  if (mustContainUpper === true){
    criteria[criteria.length] = upperCase;
  }

  //same as above but with numerical chars
  var mustContainNumerical = confirm("Do you want your new password to contain numerical character?");
  if (mustContainNumerical === true){
    criteria[criteria.length] = numerical;
  }

  //same as above but with special chars
  var mustContainSpecial = confirm("Do you want your new password to contain special characters?");
  if (mustContainSpecial === true){
    criteria[criteria.length] = special;
  }


  
}












// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


