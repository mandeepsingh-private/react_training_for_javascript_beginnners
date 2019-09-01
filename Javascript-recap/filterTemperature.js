// use command node filter.js to run this program
// Functional programming


var weather = [32, 34, 45, 48, 54, 58, 65, 70, 80, 88, 90];

// create function to  use as filter
var goOutside = function (temp) {
    return temp > 65;
}

// pass the function inside filter
var goOutsideCheck = weather.filter(goOutside);

console.log(goOutsideCheck);