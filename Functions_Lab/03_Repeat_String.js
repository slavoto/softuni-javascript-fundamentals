function repeatString(str, n) {
    let result = '';

   for(let i = 0; i < n; i++) {
    result += str;
   }
   
   return result;
}

console.log(repeatString('abc', 3));



// function that receives a string and a repeat count n. The function should return a new string (the old one repeated n times).