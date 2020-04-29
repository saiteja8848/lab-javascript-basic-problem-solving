
// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
var driverName = "saiteja";
// 1.2 Print `"The driver's name is XXXX"`.
console.log("The driver's name is", driverName);
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
var navigatorName = "Ranjith";
// 1.4 Print `"The navigator's name is YYYY"`.
console.log("The navigator's name is", navigatorName);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
var name;
if (driverName.length > navigatorName.length) {
    // - The driver has the longest name, it has XX characters. or
    console.log("The driver has the longest name", driverName.length);
}
else if (navigatorName.length > driverName.length) {
    // - It seems that the navigator has the longest name, it has XX characters. or

    console.log("The navigator has the longest name", driverName.length);
}
else {
    if (navigatorName.length == driverName.length)
        // - Wow, you both have equally long names, XX characters!.
        console.log("both have equally long names", driverName.length);
}

// 2.2. Check if the string contains vowels or not.
var vowels = [], indexes = [], j = 0;
var found = false;
for (let i = 0; i < driverName.length; i++) {
    if (driverName[i] == 'a' || driverName[i] == 'e' || driverName[i] == 'i' || driverName[i] == 'o' || driverName[i] == 'u') {
        vowels[j] = driverName[i];
        indexes[j] = i;
        j++;
        found = true;
    }
}
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 
if (found == true) {
    var data = '';
    console.log(driverName);
    for (let i = 0; i < j; i++) {
        data += vowels[i] + " ";

    }
    for (let i = 0; i < j; i++) {
        data += indexes[i] + " ";

    }
    console.log(data);
}
else
    console.log("no vowels");




// 2.3. Check if the string contains uppercase and lowercase characters Xx
var upper = 0, lower = 0;
for (let i = 0; i < driverName.length; i++) {
    if (driverName[i] >= 65 && driverName[i] <= 90) {
        upper++;
    }
    else
        lower++;
}


// - Print the number of upper case characters
console.log("the number of upper case characters", upper);
// - Print the number of lower case characters
console.log("the number of lower case characters", lower);




// Progression 3: Control Statements - 2
var name = '';
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
console.log("Driver's name in capital", driverName.toUpperCase());
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
name = '';
for (let i = navigatorName.length - 1; i >= 0; i--) {
    name += navigatorName[i];
}
console.log("Navigator's name in reverse order", name);

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
name = '';
name = driverName + " " + navigatorName;

console.log(name);

// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
name = '';
name = navigatorName + " " + driverName;
console.log(name);
// 3.3 Depending on the lexicographic order of the strings, print:

// - The driver's name goes first.

// - Yo, the navigator goes first definitely.

// - What?! You both have the same name?



// Bonus Time!

// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var wordCount = 0, state = false, word = 0;
for (let i = 0; i < text.length; i++) {
    if (text[i] == ' ')
        wordCount++;
    if (text[i] == 'e' && text[i + 1] == 't' && text[i + 2] == ' ' && i < text.length) {
        word++;
    }

}
console.log("no of words in the paragraph", wordCount);
console.log("the word et in the paragraph", word);




// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:
var phraseToCheck = "race car";
// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
var pharseOne = '';
for (let i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i] != ' ') {
        pharseOne += phraseToCheck[i];
    }
}

var wordTwo = '';
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
    if (phraseToCheck[i] != ' ') {
        wordTwo += phraseToCheck[i];
    }
}

if (pharseOne == wordTwo)
    console.log("Palindrome");
else
    console.log("Not a Palindrome");

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
