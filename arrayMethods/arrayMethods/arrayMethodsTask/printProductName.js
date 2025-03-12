const products = [
    { name: "Laptop", price: 1200 },
    { name: "Smartphone", price: 800 },
    { name: "Headphones", price: 150 },
    { name: "Monitor", price: 300 }
];

products.forEach(product => {
    console.log(`Product: ${product.name}, Price: $${product.price}`);
});
