function train(arr) {

    let wagons = arr[0].split(' ').map(Number);

    let capacity = Number(arr[1]);
   
    for(let i = 2; i < arr.length; i++) {
        let command = arr[i];
        let tokens = command.split(' ');

        if(tokens[0] == 'Add') {
            let passangers = Number(tokens[1]);
            wagons.push(passangers);
        } else {
            let passangers = Number(tokens[0]);

            for(let index = 0; index < wagons.length; index ++) {

                if(wagons[index] + passangers <= capacity) {
                    wagons[index] += passangers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',

'75',

'Add 10',

'Add 0',

'30',

'10',

'75']);

train(['0 0 0 10 2 4',

'10',

'Add 10',

'10',

'10',

'10',

'8',

'6']);

// You will be given an array of strings.

// The first element will be a string containing wagons (numbers). 
// Each number inside the string represents the number of passengers that are currently in a wagon.

// The second element in the array will be the max capacity of each wagon (single number).

// The rest of the elements will be commands in the following format:

// · Add {passengers} – add a wagon to the end with the given number of passengers.

// · {passengers} - find an existing wagon to fit all the passengers (starting from the first wagon)

// At the end, print the final state of the train (all the wagons separated by a space).