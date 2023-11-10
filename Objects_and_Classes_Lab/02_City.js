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