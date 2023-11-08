function perfectNumber(num) {

    let sumProperDivisors = 0;

    for(let divisor = 1; divisor < num; divisor++) {
        if(num % divisor == 0) {
            sumProperDivisors += divisor;
        }
    }

    if(sumProperDivisors == num) {
        console.log("We have a perfect number!");
    }
    else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(6);
perfectNumber(28);


// function that receives a number and checks if that number is perfect or NOT.

// A perfect number is a positive integer that is equal to the sum of its proper positive divisors. 
// That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).

// Output

// · If the number is perfect, print: "We have a perfect number!"

// · Otherwise, print: "It's not so perfect."