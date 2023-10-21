function sumOfFirstAndLast(arr) {

    let firstEl = arr.shift();
    let lastEl = arr.pop();

    console.log(Number(firstEl) + Number(lastEl));

}

sumOfFirstAndLast(['20', '30', '40']);
sumOfFirstAndLast(['5', '10']);

// Write a function that calculates and prints the sum of the first and the last elements in an array.

// The input comes as an array of string elements holding numbers.

// The output is printed on the console.