var generateBtn = document.getElementById("generate");
// Event listener to anticipate click
generateBtn.addEventListener("click", printPassword);

// Lowercase letters string indexed
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
// Uppercase letters string indexed
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
// Numbers string indexed
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",]
// Symbols string indexed
var symbolsArray = ["!", "@", "#", "$", "%", "^", "&", "*"]

//Setting up password options
function getPasswordOptions() 
{   //  Asking for user input
    var length = parseInt(prompt("Number of characters in this password?"));
    //  If no is selected
    if (isNaN(length) === true) 
    {
    //  Response returned if cancel is selected
        alert("This is not a number");
        return;
    }
    
    //  Response returned if user selected less than 8 characters
    if (length < 8)
    {    //  If user selects characters out of range, it will return to the beginning
        alert("Select more characters");
        return;
    }
    // Response returned if user selected greater than 128 characters
    if (length > 128)
    {   //  If user selects characters out of range, it will return to the beginning
        alert("Select less characters")
        return;
    }
        // 4 Alerts for uppercase, lowercase, numbers, and symbols
    var hasLower = confirm("Lowercase letters in this password?");
    var hasUpper = confirm("Uppercase letters in this password?");
    var hasNumber = confirm("Numbers in this password?")
    var hasSymbols = confirm("Symbols in this password?")
   
    if 
    (   // False statements for the 4 alerts above
        hasLower === false &&
        hasUpper === false &&
        hasNumber === false &&
        hasSymbols === false 
    ) 

    {   // Response returned if user selected cancel on all 4 alerts
        alert("Please choose one!");
        return;
    }

        // Password options within user selected range, and confirmed characters
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
        // Randomizing password by the user selected range, upper, lower, numbers and symbols selected
function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randDigit = arr[randIndex];
    return randDigit;
}
        // Generating password by the user selected range, upper, lower, numbers and symbols selected
function generatePassword() 
{       // Generaating password by the if statements below
    var options = getPasswordOptions();
    console.log(options)

    var result = [];
    var possibleCharacters = [];
        // If user selected lowerCase characters, it will be randomized into the password
    if (options.hasLower)
    {
        possibleCharacters = possibleCharacters.concat(lowerArray);
    }
        // If user selected upperCase characters, it will be randomized into the password
    if (options.hasUpper) 
    {
        possibleCharacters = possibleCharacters.concat(upperArray);
    }
        // If user selected numeric characters, it will be randomized into the password
    if  (options.hasNumber)
    {
        possibleCharacters = possibleCharacters.concat(numberArray);
    }
        // If user selected symmbols for characters, it will be randomized into the password
    if (options.hasSymbols)
    {
        possibleCharacters = possibleCharacters.concat(symbolsArray);
    }

        // For loop to randomize based on the numbers of characters the user selected in the first alert
    for (var i = 0; i < options.length; i++) 
     {
        var possibleCharacter = getRandom(possibleCharacters);
        result.push(possibleCharacter);
    }
        // Join loop to join the randomized information generated 
    return result.join("");
}
        // This function will take the generated password and place it into the "your secure password" text box
function printPassword () {
    var myPassword = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = myPassword;
}

