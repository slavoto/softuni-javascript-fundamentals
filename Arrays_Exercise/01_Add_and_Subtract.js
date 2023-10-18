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
