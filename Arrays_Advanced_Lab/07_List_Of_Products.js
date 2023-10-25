function listOfProduct(words) {

    let sorted = words.sort();

    for(let i = 0; i < sorted.length; i++) {
        console.log(`${i + 1}.${sorted[i]}`);
    }
}

listOfProduct(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);

// You will receive an array of products. Print a numbered array of all the products ordered by name.