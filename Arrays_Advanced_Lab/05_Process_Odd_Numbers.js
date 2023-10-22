function processOddNumber(arr) {

    let oddIndex = arr.filter((x, i) => i % 2 != 0);

    let doubled = oddIndex.map(x => x * 2); 

    let reversed = doubled.reverse();
   
    let result = reversed.join(' ');
    console.log(result);
}

processOddNumber([10, 20, 30, 40 , 50, 60]);

// You are given an array of numbers. Write a function that prints the elements at odd positions from the array, doubled and in reverse order.

// The input comes as an array of number elements.

// The output is printed on the console on a single line, separated by space.