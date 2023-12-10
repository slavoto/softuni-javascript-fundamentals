function phoneBook(input) {

    let phoneBook = {};

    for(let item of input) {
        let [name,phone] = item.split(' ');

        phoneBook[name] = phone;
    }
    for(let [name, phone] of Object.entries(phoneBook)) {
        console.log(name, '->', phone);
    }
   
}

phoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344']);


// Write a function that stores information about a person’s name and phone number. 
// The input is an array of strings with space-separated name and number. 
// Replace duplicate names. Print the result as shown.