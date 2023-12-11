function minerTask(input) {

    let resources = {};

    for(let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if(resource in resources) {
            resources[resource] += quantity;
        } else {
            resources[resource] = quantity;
        }
    }
    let entries = Object.entries(resources);

    for(let [resource, quantity] of entries) {
        console.log(resource, '->', quantity);
    }
}

minerTask([

    'Gold',
    
    '155',
    
    'Silver',
    
    '10',
    
    'Copper',
    
    '17'
    
    ]);

// You are given an array of strings. Every odd string is representing a resource (e.g. Gold, Silver, Copper, and so on), 
// and every even – quantity. Your task is to collect the resources and print them each on a new line.

// Print the resources and their quantities in the format:

// {resource} –> {quantity}

// The quantities inputs will be in the range [1 … 2 000 000 000]