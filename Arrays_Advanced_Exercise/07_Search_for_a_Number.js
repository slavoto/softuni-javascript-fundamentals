function searchNumber(nums, criteria) {
    let count = 0;
    let el = criteria[2];

    let arr = nums.slice(0, criteria[0]);
    // here
    arr = arr.slice(criteria[1], arr.length);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            count++;
        }
    }
    

    console.log(`Number ${el} occurs ${count} times.`);

}

searchNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);

// You will receive two arrays of integers. The second array is containing exactly three numbers.

// The first number represents the number of elements you have to take from the first array (starting from the first one).

// The second number represents the number of elements you have to delete from the numbers you took (starting from the first one).

// The third number is the number we search in our collection after the manipulations.