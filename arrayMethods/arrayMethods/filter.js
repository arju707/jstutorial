// The filter() method creates a new array containing elements that satisfy a specified
// condition. This method skips empty elements and does not change the original array.
// It returns an array of elements that pass the test and an empty array if no elements
// pass the test.

//filter possitive numbers

// let num=[1,-2,3,-4,5,-6,7]
// function isPositive(value){
//     return value > 0;

// }
// let filterd=num.filter(isPositive);

// console.log(filterd)

//only even with filter()

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let filterd = num.filter((num) => num % 2 == 0);

console.log(filterd);
console.log(num);
