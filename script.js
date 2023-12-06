// Assignment Code
var numericCharacters=[0,1,2,3,4,5,6,7,8,9];
var higherCasedCharacters=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
var specialCasedCharacters=["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^","%", "$","#","@"];
var lowerCasedCharacters=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password =[];
  var passwordText = document.querySelector("#password");
   var lowerCharacters = confirm("do you want lowerCaseCharaters");
   var upperCharacters = confirm("do you want upperCharaters");
   var specialCharacters = confirm("do you want specialCharaters");
   var numbers = confirm("do you want numbers");
 
   if (lowerCharacters ) {
    password = password.concat(lowerCasedCharacters);
    
   }
else{
  password = password ;
}

if (upperCharacters ) {
  password = password.concat(higherCasedCharacters);
  
 }
else{
password = password ;
}


if (specialCharacters) {
  password = password.concat(specialCasedCharacters);
  
 }
else{
password = password ;
}




if (numbers ) {
  password = password.concat(numericCharacters);
  
 }
else{
password = password ;
}


password = password.join('');


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
