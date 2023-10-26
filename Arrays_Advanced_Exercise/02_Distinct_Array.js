function distinctArray(arr) {

    let uniqueNums = [];

    for(let num of arr) {
        if(!uniqueNums.includes(num))
        uniqueNums.push(num);
    }
    console.log(uniqueNums.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);

// You will be given an array of integer numbers on the first line of the input.

// Remove all repeating elements from the array.

// Print the result elements separated by a single space.