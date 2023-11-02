function mathPower(n, exponent) {

    let product = 1;

    for(let i = 0; i < exponent; i++) {
        product *= n;
    }

    console.log(product);
    
}

mathPower(2,8);

//function that calculates and print the value of a number raised to a given power