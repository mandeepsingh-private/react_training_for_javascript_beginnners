var num = [10, 3, 15, 30, 45, 56];

var multipleThree = function (num) {
    return num * 3;
}

var triple = num.map(multipleThree);

console.log(triple);