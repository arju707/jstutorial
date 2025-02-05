let name = "Alice"; // Global scope that can access from inside and outside a function or block scope

let message="hello"

function greet() {
    let message = "Hello"; // Local scope
    console.log(message + ", " + name + "!"); 
}

greet(); // Output: Hello, Alice!

console.log(name); // Output: Alice


console.log(message); // message is not set globaly then this will show error "message is not defined"