function matrix(n) {

    for(let rowNum = 1; rowNum <= n; rowNum++) {
        let curRow = `${n} `.repeat(n);
        console.log(curRow);
    }
}

matrix(3);

// function that receives a single integer number n and prints nxn matrix with that number.