function factorialDivision(number1, number2) {

    let factorial1 = calcFactorial(number1);
    let factorial2 = calcFactorial(number2);
    let result = factorial1/factorial2;

    console.log(result.toFixed(2));

    function calcFactorial(number) {
        let factorial = 1;

        while(number > 1) {
            factorial *= number;
            number--;
        }
        return factorial;
    }
}

factorialDivision(5,2);

// function that receives two integer numbers. Calculate the factorial of each number. 
// Divide the first result by the second and print the division formatted to the second decimal point.
