const message = "Hello"; // Global constant
// const name ="NAME";

function name() {
    let name = "Arjun"; // Local constant
    console.log(message + ", " + name + "!"); 
    // console.log(name);
}

name(); // Output: Hello, Arjun!

console.log(name);  // This would cause an error because 'name' is not global
// console.log(message);   // This would cause an error because 'message' is not global

