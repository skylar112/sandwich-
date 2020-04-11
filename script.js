var generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", generatePassword);

// Lowercase letters
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
// Uppercase letters
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
// Numbers 
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",]
// Symbols
var symbolsArray = ["!", "@", "#", "$", "%", "^", "&", "*"]

//Setting up password options
function getPasswordOptions() 
{   //  Asking for user input
    var length = parseInt(prompt("Number of characters in this password?"));
    //  If no is selected
    if (isNaN(length) === true) 
    {
    //  Response returned if no is selected
        alert("This is not a number");
        return;
    }
    
    if (length < 8)
    {
        alert("Select more characters");
        return;
    }

    if (length > 128)
    {
        alert("Select less characters")
        return;
    }

    var hasLower = confirm("Lowercase letters in this password?");
    var hasUpper = confirm("Uppercase letters in this password?");
    var hasNumber = confirm("Numbers in this password?")
    var hasSymbols = confirm("Symbols in this password?")
   
    if 
    (
        hasLower === false &&
        hasUpper === false &&
        hasNumber === false &&
        hasSymbols === false 
    ) 

    {
        alert("Please choose one!");
        return;
    }

    var passwordOptions =
    {
        length: length,
        hasLower: hasLower,
        hasUpper: hasUpper,
        hasNumber: hasNumber,
        hasSymbols: hasSymbols

    }
    return passwordOptions;
}

function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randDigit = arr[randIndex];
    return randDigit;
}

function generatePassword() 
{
    var options = getPasswordOptions();

    var result = [];
    var possibleCharacters = [];

    if (options.hasLower)
    {
        possibleCharacters = possibleCharacters.concat(lowerArray);
    }
    if (options.hasUpper) 
    {
        possibleCharacters = possibleCharacters.concat(upperArray);
    }
    if  (options.hasNumber)
    {
        possibleCharacters = possibleCharacter.concat(numberArray);
    }
    
    if (options.hasSymbols)
    {
        possibleCharacter = possibleCharacter.concat(symbolsArray);
    }




    for (var i = 0; i < options.length; i++) 
     {
        var possibleCharacter = getRandom(possibleCharacters);
        result.push(possibleCharacter);

        console.log(result)
    }
}