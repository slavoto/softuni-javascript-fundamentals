function bombNumbers(nums, bombInfo) {

   let [bombNum, power] = bombInfo;

   while(nums.includes(bombNum)) {
    let index = nums.indexOf(bombNum);
    nums.splice(Math.max(0, index - power), power * 2 + 1, 0);
   }
   let sum = 0;
   for(let num of nums) {
    sum += num;
   }
   console.log(sum);

}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],[4, 2]);
bombNumbers([1, 7, 7, 1, 2, 3],[7, 1]);

// Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors from left and right. 
// Detonations are performed from left to right and all detonated numbers disappear.

// The input contains two arrays of numbers. The first contains the initial sequence and the second contains 
// the special bomb number and its power.

// The output is the sum of the remaining elements in the sequence.