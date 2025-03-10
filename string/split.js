// Write a function that splits a string into an array of words. Test it with a string containing 
// multiple words separated by spaces. 


function splitTrim(str){
    return str.trim().split(/\s+/);
}
let string="hello i am arjun from  kozhikode"
let result= splitTrim(string);

console.log(result);