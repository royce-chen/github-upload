// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

function avg(numList) {
    let total = 0;
    for (let num of numList) {
        console.log(num);
        total += num;
    }
    return total / numList.length;
}

console.log("Average 1: " + avg([0,50])); //25
console.log("Average 2: " + avg([75,76,80,95,100])); //85.2