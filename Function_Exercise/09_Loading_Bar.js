function loadingBar(num) {

    let procentages = '%'.repeat(num / 10);
    let dots = '.'.repeat(10 - num / 10);

    if(num == 100) {
        console.log(`${num} % Complete!`);
        console.log(`[${procentages}]`);
    } else {
        console.log(`${num}% [${procentages} ${dots}]`);
        console.log("Still loading...");
    }
}

loadingBar(50);

// You will receive a single number between 0 and 100, which is divided with 10 without residue (0, 10, 20, 30...).

// Your task is to create a function that visualizes a loading bar depending on the number you have received in the input.