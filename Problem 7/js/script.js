let input = parseInt(prompt("Input as a positive integer:"));

function print(input) {
    let result = "";
    for (let i = 1; i <= input; i++) {
        result += i + " ";
    }
    console.log(result);
}

print(input);
