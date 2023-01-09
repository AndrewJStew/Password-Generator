//variavle for character length
var characterLength = 10;
//An arry to keep all choices (charcaters, numbers) I will use when creating a password.
var choices = []
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  //parseInt to turn into number not string
  characterLength = parseInt(prompt("how long do you want your password? (10 - 64 characters."));

  //if(isNaN(characterLength) || characterLength < 10 || characterLength > 120)) //checking to ensure this is all false
  //alert("character length has to be a number between 10 - 64 characters");
  //return false;

  if (confirm("Do you want lowercase characters to be in your password?")) {
    choices = choices.concat(lowerCasedCharacters);
  }
  if (confirm("Do you want uppercase characters to be in your password?")) {
    choices = choices.concat(upperCasedCharacters);
  }
  if (confirm("Do you want special characters to be in your password?")) {
    choices = choices.concat(numericCharacters);
  }
  if (confirm("Do you want numbers to be in your password?")) {
    choices = choices.concat(specialCharacters);
  }

  return true;
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  //console.log("A quick test to see if things are working")

  //1. prompt the user for the password criteria
  //a. password length between 10-64
  //2. prompt for characters
  //a. prompt for lowercase
  //b. prompt for uppercase
  //c. prompt for numeric
  //d. prompt for special characters
  //3. Validate the input


  //4. generate password
  //return "Password to go here";
}

// Get references to the #generate element
//This variable targets the generate ID
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //store the value of this function into the passwordtext variable
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
//When a user clicks the generate butten it will call the write password function
generateBtn.addEventListener('click', writePassword);