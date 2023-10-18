function arrayRotation(array, rotationCount) {

    for(let rotation = 1; rotation <= rotationCount; rotation++) {
        let firstEl = array.shift();
        array.push(firstEl);
    }

    console.log(array.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);


// Write a function that receives an array and the number of rotations you have to perform.

// Note: Depending on the number of rotations, the first element goes to the end.

// Print the resulting array elements separated by a single space.