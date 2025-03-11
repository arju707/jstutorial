// 2. Discount Calculator 
// Write a function that takes a discount percentage and returns another function to calculate 
// the discounted price of a product. Use this function to apply discounts to various 
// products. 


function createDiscount(discountPercentage){
    return function(originalPrice){

        let discount=(discountPercentage/100)*originalPrice;

        return originalPrice-discount

    }
}

let tenPercentDiscount=createDiscount(10);

let twentyPercentDiscount=createDiscount(20);

console.log(tenPercentDiscount(100))

console.log(twentyPercentDiscount(500))