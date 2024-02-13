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
let confirmUpperCase
let confirmLowerCase;
let confirmNumericChar;
let confirmPunctuationChar;
let randomValue;

  // function to get password options
function getPasswordOptions() {
    promptPasswordLenght =  prompt("What is your preferred password lenght?");
    if (promptPasswordLenght >= 8 && promptPasswordLenght <= 128){
        confirmUpperCase = confirm("Would you like your password to include uppercase characters?");
        confirmLowerCase = confirm("Would you like your password to include lowercase characters?");
        confirmNumericChar = confirm("Would you like your password to include numeric characters?");
        confirmPunctuationChar = confirm("Would you like your password to include punctuation characters?");
    } else {
        getPasswordOptions();
    }

 

    // check if at least one character type is selected
    if (confirmUpperCase || confirmLowerCase || confirmNumericChar || confirmPunctuationChar) {
      generatePassword ();
    } else {
        alert("Your password must include at least one of the four character types!");
        getPasswordOptions();
    }
}

  // function to get random number
 function getRandom(arr){
    randomValue = Math.floor(Math.random() * (arr.length - 1));
    return randomValue;
 }

// function to generate password based on user criteria 

function generatePassword () {
    
     

}

getPasswordOptions();
 
