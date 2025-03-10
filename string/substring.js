function replace(str,toReplace,replacement){
    return str.split(toReplace).join(replacement)
}

let original= "Hello Arjun";
let result= replace(original,"o","ooo")

console.log("original string",original);
console.log("modified string:",result)