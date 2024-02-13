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
// declare variables for the script
let promptPasswordLenght;
let preferUpperCase
let preferLowerCase;
let preferNumericChar;
let preferSpecialChar;
let randomValue;



// function to get password options
function getPasswordOptions() {
    promptPasswordLenght =  prompt("What is your preferred password lenght?");
    if (promptPasswordLenght >= 8 && promptPasswordLenght <= 128){
        preferUpperCase = confirm("Would you like your password to include uppercase characters?");
        preferLowerCase = confirm("Would you like your password to include lowercase characters?");
        preferNumericChar = confirm("Would you like your password to include numeric characters?");
        preferSpecialChar = confirm("Would you like your password to include special characters?");
    } else {
        alert("Invalid password lenght! Value must be from 8 - 128 !");
        getPasswordOptions();
    }

    // check if at least one character type is selected
    if (!(preferUpperCase || preferLowerCase || preferNumericChar || preferSpecialChar)) {
        alert("Your password must include at least one of the four character types!");
        getPasswordOptions();
    }
}

// function to get random number
function getRandom(arr){
    randomValue = Math.floor(Math.random() * (arr.length));
    return randomValue;
 }

// function to generate password based on user criteria 
function generatePassword () {
    getPasswordOptions(); // get user's password preferences
    let password = ""
    for (let i = 0; i < promptPasswordLenght; i++) {
        if (preferUpperCase && password.length < promptPasswordLenght) {
            password += upperCasedCharacters[getRandom(upperCasedCharacters)];
        }
        if (preferLowerCase && password.length < promptPasswordLenght) {
            password += lowerCasedCharacters[getRandom(lowerCasedCharacters)];
        }
        if (preferNumericChar && password.length < promptPasswordLenght) {
            password += numericCharacters[getRandom(numericCharacters)];
        }
        if (preferSpecialChar && password.length < promptPasswordLenght) {
            password += specialCharacters[getRandom(specialCharacters)];
        }
    } 
    return password;  
}

// give reference to the #generate button element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var generatedPassword = generatePassword ();
    var passwordText = document.querySelector("#password");
    passwordText.value = generatedPassword;
}



// add event listener to generate button
generateBtn.addEventListener('click', writePassword())



 
