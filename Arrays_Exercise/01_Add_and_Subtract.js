function addAndSubstract(array) {

    let originalSum = 0;
    let newSum = 0;

   for(let i = 0; i < array.length; i++) {
    let num = array[i];
    originalSum += num;

    if(num % 2 == 0) {
        num += i;
    }
    else {
        num -= i;
    }
    newSum += num;
    array[i] = num;
   } 
   console.log(array);
   console.log(originalSum);
   console.log(newSum);
}

addAndSubstract([5, 15, 23, 56, 35]);
addAndSubstract([-5, 11, 3, 0, 2]);

// Write a function, which changes the value of odd and even numbers in an array of numbers.

// If the number is even - add to its value its index position

// If the number is odd - subtract to its value its index position

// Output

// On the first line print the newly modified array, 
// on the second line print the sum of numbers from the original array, 
// on the third line print the sum of numbers from the modified array