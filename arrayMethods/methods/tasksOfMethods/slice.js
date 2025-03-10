// 9. From the array let numbers = [10, 20, 30, 40, 50, 60];, create a new array containing only 
// the first three elements. Create another array containing the last two elements. 


let numbers = [10, 20, 30, 40, 50, 60];

console.log(numbers)

let newArr=numbers.slice(1,4)
console.log(newArr)

let newArr2=numbers.slice(4,6)

console.log(newArr2)