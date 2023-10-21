function sumOfFirstAndLast(arr) {

    let firstEl = arr.shift();
    let lastEl = arr.pop();

    console.log(Number(firstEl) + Number(lastEl));

}

sumOfFirstAndLast(['20', '30', '40']);
sumOfFirstAndLast(['5', '10']);