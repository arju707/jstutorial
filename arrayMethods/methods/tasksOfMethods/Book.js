// . You are given the array let books = ["Book A", "Book B", "Book C", "Book D"];. Add "Book E" 
// to the end of the array, remove "Book A", combine the resulting array with let magazines 
// = ["Magazine 1", "Magazine 2"], and convert the final array into a string where elements 
// are separated by ;.


let books = ["Book A", "Book B", "Book C", "Book D"];

let Magazines=["magazine 1","magazine 2"]

 let magazine1=books.push("Book E")
 

console.log(books)

 let magazine2=books.shift("Book A")

console.log(books)

let finalArray=books.concat(Magazines)

console.log(books.join(";"))