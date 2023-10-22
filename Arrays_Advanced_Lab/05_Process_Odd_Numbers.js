function processOddNumber(arr) {

    let oddIndex = arr.filter((x, i) => i % 2 != 0);

    let doubled = oddIndex.map(x => x * 2); 

    let reversed = doubled.reverse();
   
    let result = reversed.join(' ');
    console.log(result);
}

processOddNumber([10, 20, 30, 40 , 50, 60]);