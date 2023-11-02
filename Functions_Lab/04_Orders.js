function orders(str, quantity) {

    let sum = 0;

    switch(str) {
        case 'coffee':
            sum = quantity * 1.50;
            console.log(sum.toFixed(2));
            break;
        case 'water':
            sum = quantity * 1.00;
            console.log(sum.toFixed(2));
            break;
        case 'coke':
            sum = quantity * 1.40;
            console.log(sum.toFixed(2));
            break;
            case 'snacks':
            sum = quantity * 2.00;
            console.log(sum.toFixed(2));
            break;
        default:
            break;
    }
}

orders("coke", 5);
orders("coffee", 2);

// Write a function that calculates the total price of an order and prints it on the console. 
// The function should receive one of the following products: coffee, coke, water, snacks; 
// and a quantity of the product. The prices for a single piece of each product are:

// · coffee - 1.50

// · water - 1.00

// · coke - 1.40

// · snacks - 2.00