function signCheck(numOne, numTwo, numThree) {

    let multiply = numOne * numTwo * numThree;

    if(multiply < 0) {
        console.log("Negative");
    }
    else {
        console.log("Positive");
    }
}

signCheck(-2, -4, -5);


// Write a function, that checks whether the result of the multiplication numOne * numTwo * numThree is positive or negative. 
// Try to do this WITHOUT multiplying the 3 numbers.

// · If the result is positive, print on the console -> "Positive"

// · Otherwise, print -> "Negative"