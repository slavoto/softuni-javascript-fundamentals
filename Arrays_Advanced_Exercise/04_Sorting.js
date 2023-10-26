function sorting(arr) {

    let sortedArray = arr.sort((a,b) => a - b);
    let finalArray = [];

    while(sortedArray.length > 0) {
        let maxNum = sortedArray.pop();
        let minNum = sortedArray.shift();

        finalArray.push(maxNum);
        finalArray.push(minNum);
    }
    
    console.log(finalArray.join(' '));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

// Write a function that sorts an array of numbers so that the first element is the biggest one, the second is the smallest one, 
// the third is the second biggest one, and the fourth is the second smallest one, and so on.

// Print the elements on one row, separated by a single space.