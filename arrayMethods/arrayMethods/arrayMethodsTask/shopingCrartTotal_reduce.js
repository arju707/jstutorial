



// 5. Implement a program to calculate the total price of items in a shopping cart 
// array using the reduce method. 



let cart = [
    { product: "AC", price: 30000 },
    { product: "TV", price: 15000 },
    { product: "GAMING PC", price: 30000 },
    { product: "GAMING PC", price: 30000 },
    { product: "GAMING PC", price: 30000 },
    { product: "GAMING PC", price: 30000 },
    { product: "GAMING PC", price: 30000 },
    { product: "GAMING PC", price: 30000 }
];


cart.forEach((item) => {
    console.log(`${item.product}: $${item.price}`);
});


let total = cart.reduce((acc, item) => acc + item.price, 0);

console.log(total);
