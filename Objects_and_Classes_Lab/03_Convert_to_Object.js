function convertToObject(JsonString) {

    let object = JSON.parse(JsonString);

    for(let key in object) {
        console.log(`${key}: ${object[key]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');

// Write a function that receives a string in JSON format and converts it to an object.

// Loop through all the keys and print them with their values in format: "{key}: {value}"