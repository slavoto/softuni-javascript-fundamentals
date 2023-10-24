function lastKnumbersSequence(n, k) {

 let nums = [1];

 for (let i = 1; i < n; i++)
 {
     let sum = 0;
     for (let prev = i - k; prev <= i - 1; prev++)
         if (prev >= 0)
             sum += nums[prev];
     nums[i] = sum;
 }
 console.log(nums.join(' '));
}

lastKnumbersSequence(6, 3);
lastKnumbersSequence(8,2);


// The 2nd element (1) is the sum of the 3 elements before it, 
// but there is only 1, so we take that. 

// The third element is the sum of the first 2 (1 and 1), 
// and the 4th – the sum of 1, 1, and 2. 

// The 5th element is the sum of the 2nd, 3rd, and 4th (1, 2, and 4) and so on.