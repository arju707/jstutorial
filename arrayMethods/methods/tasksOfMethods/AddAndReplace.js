// 8. Given the array let animals = ["dog", "cat", "rabbit", "mouse"];, replace "cat" with "lion". Then 
// add "elephant" and "tiger" after "dog". 

let animals = ["dog", "cat", "rabbit", "mouse"]

let index=animals.indexOf("cat")
console.log(index)

animals[index]="lion"

console.log(animals)

animals.splice(1,0,"elephant","tiger")

console.log(animals)
