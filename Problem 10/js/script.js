let arr = [10,12,45,34,100,10,45,45,36,101,105,100,340,105];

console.log(arr);

function findMostFrequent(arr) {
    let count = Number.MIN_VALUE;
    let value;
    for(let i = 0; i < arr.length - 1; i++) {
        let tempCount = 1;
        for(let j = 1; j < arr.length; j++) {
            if(arr[j] === arr[i]) {
                tempCount++;
            }
        }
        if(tempCount > count) {
            count = tempCount;
            value = arr[i];
        }
    }
    return `${value}(${count} times)`;
}

console.log(findMostFrequent(arr));