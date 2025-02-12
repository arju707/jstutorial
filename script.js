// let fruits = ["Apple", "Banana", "Cherry"];
//     console.log(fruits[0]); // Output: Banana

// <------------------------------------------SET-------------------------------------------------------------------------->


// let uniquenbrs= new Set([1,2,3,4,])
// console.log(uniquenbrs);



// <-----------------------------------------------object-------------------------------------------------------------------------->

// let person={
//     name:"arjun",
//     age:20,
//     place:"clct"
// }

// console.log(person.age);


// let a="5"
// let b=5

// console.log(a===b)

let result="2"*5;
// console.log (result);
// console.log(typeof result)


// let set=([1,2,3,4,5])
// console.log(set);


let numbers = new Set([1, 2, 3, 2, 4, 3]);
console.log(numbers); // Output: Set(4) { 1, 2, 3, 4 }
numbers.add(5); // Adds 5 to the set
numbers.delete(2); // Removes 2 from the set
console.log(numbers.has(3)); // Output: true (checks if 3 is in the set)
console.log(numbers.size); // Output: 4
