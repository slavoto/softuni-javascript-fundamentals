function arrayManipalation(commands) {

    let arr = commands
    .shift()
    .split(' ')
    .map(Number);

    for(let i = 0; i < commands.length; i++) {                                // rotate by the number of commands
        let [command, firstNum, secondNum] = commands[i].split(' '); // take the corresponding command, number and index

        firstNum = Number(firstNum);   
        secondNum = Number(secondNum);
    
        switch(command) {
            case "Add":
                add(firstNum);  // pass a parameter
                break;
            case "Remove":
                remove(firstNum); //pass a parameter
                break;
            case "RemoveAt":
                removeAt(firstNum);  // pass a parameter
                 break;   
            case "Insert":
                insert(firstNum, secondNum);  // pass a parameter
                break;        
        }
    }

    function add(el) {
        arr.push(el);
    }

    function remove(num) {
        arr = arr.filter(el => el != num);
    }

    function removeAt(index) {
        arr.splice(index, 1);
    }

    function insert(num, index) {
        arr.splice(index, 0, num);
    }

    console.log(arr.join(' '));
}


arrayManipalation(['4 19 2 53 6 43',

'Add 3',

'Remove 2',

'RemoveAt 1',

'Insert 8 3']);

// Write a function that manipulates an array of numbers.

// · Add {number}: add a number to the end of the array

// · Remove {number}: remove all occurrences of a particular number from the array

// · RemoveAt {index}: removes number at a given index

// · Insert {number} {index}: inserts a number at a given index

// Note: All the indices will be valid!

// The input comes as an array of strings. The first element will be a string containing the array to manipulate. 
// Every other command you receive will also be a string.

// The output is the manipulated array printed on the console on a single line, separated by space.