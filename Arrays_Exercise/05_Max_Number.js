function MaxNumber(arr) {

    let topNums = [];

    for(let i = 0; i < arr.length; i++) {
        let getNumber = arr[i];
        let isTop = true;

        for(let j = i + 1; j < arr.length; j++) {
            let rightNum = arr[j];
        
        if(rightNum >= getNumber) {
            isTop = false;
            break;
        }    
    }
        if(isTop) {
            topNums.push(getNumber);
    }
}
        console.log(topNums.join(" "));
}

MaxNumber([1, 4, 3, 2]);
MaxNumber([14, 24, 3, 19, 15, 17]);
MaxNumber([41, 41, 34, 20]);
MaxNumber([27, 19, 42, 2, 13, 45, 48]);

// Write a function to find all the top integers in an array. 
// A top integer is an integer, which is bigger than all the elements to its right.