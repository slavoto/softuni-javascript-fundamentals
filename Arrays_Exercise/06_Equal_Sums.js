function equalSums(array) {

        let result = 'no';
        for (let i = 0; i < array.length; i++) {
            let leftSumOfNumbers = 0;
            let rightSumOfNumbers = 0;
            for (let j = 0; j < i; j++) {
                leftSumOfNumbers += array[j];
            }
     
            for (let k = i + 1; k < array.length; k++) {
                rightSumOfNumbers += array[k];
            }
     
            if(leftSumOfNumbers === rightSumOfNumbers) {
                result = i;
                break;
            }
        }
     
        console.log(result);
}

    equalSums([1, 2, 3, 3]);
    equalSums([1, 2]);
    equalSums([1]);
    equalSums([1, 2, 3]);
    equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);


//Write a function that determines if there exists an element in the arrayy of numbers such that 
// the sum of the elements on its left is equal to the sum of the elements on its right.

//If there array NO elements to the left/right, their sum is 0.

//Print the index that satisfies the required condition or "no" if there is no such index