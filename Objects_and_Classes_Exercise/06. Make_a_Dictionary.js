function makeAdictionary(input) {
   
        let dict = {};
        for (let element of input){
            let obj = JSON.parse(element);
            dict = Object.assign(dict, obj);        
        } 
            
        let sortedKeys = Object.keys(dict);
        sortedKeys.sort((a, b) => a.localeCompare(b));   
         
        for (let term of sortedKeys) {
            let definition = dict[term];             
            console.log(`Term: ${term} => Definition: ${definition}`);
        }
    }


makeAdictionary([

    '{"Coffee":"A hot drink made from the roasted and groundseeds (coffee beans) of atropical shrub."}',
     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the publicon a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container forheating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]);

// You will receive an array with strings in the form of JSON's.

// You have to parse these strings and combine them into one object. Every string from the array will hold terms and a description. If you receive the same term twice, replace it with the new definition.

// Print every term and definition in that dictionary on new line in format:

// `Term: ${term} => Definition: ${definition}`

// Don't forget to sort the dictionary alphabetically by the terms as in real dictionaries.