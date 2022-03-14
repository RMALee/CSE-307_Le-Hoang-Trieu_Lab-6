// let inputArray = [3.23, 24.56, 145.35, 89.76, 68.18];

let inputArray = [3.0, 6.0];

function printMMSA(inputArray) {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    let sum = 0;
    let avg = 0;

    for (let i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
        if (inputArray[i] < min) {
            min = inputArray[i];
        }
        if (inputArray[i] > max) {
            max = inputArray[i];
        }
    }

    min = min.toFixed(2);
    max = max.toFixed(2);
    sum = sum.toFixed(2);
    avg = sum === 0 ? 0 : (sum / parseFloat(inputArray.length)).toFixed(2);

    console.log(`Min = ${min}`);
    console.log(`Max = ${max}`);
    console.log(`Sum = ${sum}`);
    console.log(`Avg = ${avg}`);
}

printMMSA(inputArray);
