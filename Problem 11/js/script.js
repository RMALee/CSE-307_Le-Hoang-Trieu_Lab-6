let number = parseInt(prompt("Input as a positive number:"));

function reversedNum(num) {
    return parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);
}

console.log(reversedNum(number));
