// Write a function that removes any leading and trailing whitespace from a string and 
// converts it to lowercase. Test this function with a string that has leading and trailing 
// spaces and uppercase letters? 

function string(str){
    return str.trim().toLowerCase()
}
let input="HELLO ARJUN"
let result=string(input);

console.log(result);