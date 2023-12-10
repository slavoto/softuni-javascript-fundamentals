function addressBook(input) {

    let addressBook = {};

    for(let item of input) {
        let [name, address] = item.split(':');

        addressBook[name] = address;
    }
    let entries = Object.entries(addressBook);
    entries.sort((a,b) => a[0].localeCompare(b[0]));

    let sorted = {};

    for(let [name, address] of entries) {
        sorted[name] = address;
    }

    for(let [name, address] of Object.entries(sorted)) {
        console.log(name, '->', address);
    }

}

addressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd']);

addressBook(['Bob:Huxley Rd',

'John:Milwaukee Crossing',

'Peter:Fordem Ave',

'Bob:Redwing Ave',

'George:Mesta Crossing',

'Ted:Gateway Way',

'Bill:Gateway Way',

'John:Grover Rd',

'Peter:Huxley Rd',

'Jeff:Gateway Way',

'Jeff:Huxley Rd']);

// Write a function that stores information about a person’s name and his address. 
// The input comes as an array of strings. Each string contains the name and the address separated by a colon. 
// If you receive the same name twice just replace the address. 
// In the end, print the full list, sorted alphabetically by the person’s nam