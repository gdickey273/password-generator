

//Initializes String Objects of upper case letters, lower case letters, numerical characters, and special characters.

const lowerCase = new String("abcdefghijklmnopqrstuvwxyz");
const upperCase = new String("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const numerical = new String("0123456789");
const special = new String(" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");

//Initializing empty array to store password criteria
var criteria = []; 

//Initializes a variable to keep track of whether the generated password meets user criteria and is assigned false.
var meetsCriteria = false;

//Initializes counter variables to keep track of how many of each type of character is included in the generated password.
var numberOfUpper = 0, numberOfLower = 0, numberOfNumerical = 0, numberOfSpecial = 0;

//Declares variables for the desired password criteria.
var desiredPWLength;
var mustContainLower;
var mustContainUpper;
var mustContainNumerical;
var mustContainSpecial;

//takes a single array (or string) as an argument and returns a random index within that array
function randomIndex(array){

  return Math.floor(Math.random()*array.length);

}

/*takes a single array as an argument, chooses a character string element at random, increments the char counter of that type, 
and returns a random char in that string. */
function chooseChar(parentArray){

  var charString = parentArray[randomIndex(parentArray)];
  var chosenChar = charString[randomIndex(charString)];

  String.p
  if (lowerCase.indexOf(chosenChar) > -1){
    numberOfLower++;

  } else if(upperCase.indexOf(chosenChar) > -1){
    numberOfUpper++;

  } else if(numerical.indexOf(chosenChar) > -1){
    numberOfNumerical++;

  } else numberOfSpecial++;

  return chosenChar;

}

//returns true if password length equals desired length, if password contains all char types requested, and does not include any unrequested char types
//returns false if any of the above criteria are not met.
function checkCriteria(){
  return (generatedPassword.length === desiredPWLength 
    && (mustContainLower === (numberOfLower > 0))
    && (mustContainUpper === (numberOfUpper > 0))
    && (mustContainNumerical === (numberOfNumerical > 0))
    && (mustContainSpecial === (numberOfSpecial > 0))
  );
}

function generatePassword(){

  //Prompts user for desired length of password until a valid answer is given
  desiredPWLength = prompt("How long would you like your password to be? Please choose a number between 8 and 128.");
  while (!(Number.isInteger(parseInt(desiredPWLength))) || parseInt(desiredPWLength) < 8 || parseInt(desiredPWLength) > 128){
    desiredPWLength = prompt("Invalid entry. Please enter a number between 8 and 128");
  }
  desiredPWLength = parseInt(desiredPWLength);

  console.log(desiredPWLength);

  //Asks user whether password should contain lowercase letters and if so adds lowerCase array to array of criteria
  mustContainLower = confirm("Do you want your new password to contain lower case letter?"); 
  if (mustContainLower === true){
    criteria[criteria.length] = lowerCase;
  }

  //same as above but with upper case
  mustContainUpper = confirm("Do you want your new password to contain upper case letter?");
  if (mustContainUpper === true){
    criteria[criteria.length] = upperCase;
  }

  //same as above but with numerical chars
  mustContainNumerical = confirm("Do you want your new password to contain numerical character?");
  if (mustContainNumerical === true){
    criteria[criteria.length] = numerical;
  }

  //same as above but with special chars
  mustContainSpecial = confirm("Do you want your new password to contain special characters?");
  if (mustContainSpecial === true){
    criteria[criteria.length] = special;
  }

  

  while((!meetsCriteria)){

    //initialized empty password
    generatedPassword = "";

    for(var i = 0; i < desiredPWLength; i++){
      generatedPassword = generatedPassword + chooseChar(criteria);
    }

    meetsCriteria = checkCriteria();
   

  }

  return generatedPassword;
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  document.getElementById("password").value = password;

  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



