function maxSequenceOfEqualElements(arr) {

    let longestSeq = [];
    
    for (let i = 0; i < arr.length; i++) {
      let currNum = arr[i];
      let currentSeq = [currNum];
   
      for (let j = i + 1; j < arr.length; j++) {
        let nextNum = arr[j];
   
        if (currNum === nextNum) {
          currentSeq.push(nextNum);
        } else {
          break;
        }
      }
      if (currentSeq.length > longestSeq.length) {
        longestSeq = currentSeq;
      }
    }
   
    console.log(longestSeq.join(" "));
    }


maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);

// Write a function that finds the longest sequence of equal elements in an array of numbers.

// If several longest sequences exist, print the leftmost one.