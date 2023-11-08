function palindromeIntegers(arr) {

    for(let num of arr) {
        let isPalindrome = checkIsPalindrome(num);
        console.log(isPalindrome);
    }


    function checkIsPalindrome(num) {
        let numAsStr = String(num);
        let reversedNumStr = '';
        
        for(let i = numAsStr.length - 1; i >= 0; i--) {
            let curChar = numAsStr[i];
            reversedNumStr += curChar;
        }
        let isPalindrome = numAsStr == reversedNumStr;
        return isPalindrome;
    }
}

palindromeIntegers([123,323,421,121]);

// A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. 
// Write a function, which receives an array of positive integers and checks if each integer is a palindrome or not.