// Write a function that accepts a string and returns the character at the specified index. If 
// the index is out of bounds, return undefined.

function checkChar(str,index){
    if(index<0||index>=str.length){
        return undefined
    }
    return str.charAt(index)
}

let indexcheck="arjunvinod";

console.log(checkChar(indexcheck,-4));
console.log(checkChar(indexcheck,3));
console.log(checkChar(indexcheck,10));
