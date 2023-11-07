function addAndSubtract(firstNum, secondNum, thirdNum) {

    let result1 = sum(firstNum, secondNum);
    let finalResult = subtract(result1, thirdNum);
    console.log(finalResult);

    function sum(firstNum, secondNum) {
        return firstNum + secondNum;
    }
    function subtract(firstNum, secondNum) {
        return firstNum - secondNum;
    }
}

addAndSubtract(23, 6, 10);

// You will receive three integer numbers.

// Write a function sum() to calculate the sum of the first two integers and a function subtract(), 
// which subtracts the result of the function sum() and the third integer.