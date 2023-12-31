function city(town) {

    let keys = Object.keys(town);

    for(let key of keys) {
        console.log(key, '->', town[key]);
    }
}

city({
name: "Sofia",
area: 492, 
population: 1238438, 
country: "Bulgaria", 
postCode: "1000" });

// function that receives a single parameter – an object, containing five properties:

// { name, area, population, country, postcode }

// Loop through all the keys and print them with their values in format: "{key} -> {value}"