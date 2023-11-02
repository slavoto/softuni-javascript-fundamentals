function simpleCalculator(a, b, operator) {

    if(operator == 'add') {
        console.log(a + b);
    } else if(operator == 'subtract') {
            console.log(a - b);
    } else if(operator == 'multiply') {
        console.log(a * b);
    } else if(operator == 'divide') {
        console.log(a / b);
    }
}


simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');

// Write a function that receives three parameters – two numbers and an operator (string) – 
// and calculates the result depending on the operator. 
// Operator can be 'multiply', 'divide', 'add' or 'subtract'. 
// Try to solve this task using arrow functions.