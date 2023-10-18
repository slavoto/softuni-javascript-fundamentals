function mergeArrays(firstArray, secondArray) {

    let mergedArray = [];
    for(i = 0; i < firstArray.length; i++) {

        let num1 = firstArray[i];
        let num2 = secondArray[i];
           
            if(i % 2 == 0) {
              mergedArray.push(Number(num1) + Number(num2))
            }
            else {
                mergedArray.push(num1 + num2);
            }
            
        }
        console.log(mergedArray.join(" - "));
            
    }  


mergeArrays(
['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11']);

// Write a function, which receives two string arrays and merges them into a third array.

// If the index of the element is even, add into the third array the sum of both elements at that index

// If the index of the element is odd, add the concatenation of both elements at that index

// As input, you will receive two string arrays (with equal length).

// As output, you should print the resulting third array, each element separated by " - "