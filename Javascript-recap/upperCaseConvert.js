var greetings = ['hi', 'bye', 'thank you']

var upperCaseConvert = function (word) {
    return word.toUpperCase();
}

var uppercaseGreeting = greetings.map(upperCaseConvert);

console.log(uppercaseGreeting);