// Write a function that capitalizes the first letter of each word in a string and returns the 
// modified string. 


function capitalize(str){
 let words=str.trim().split(/\s+/);
 let result=[];
 
 for(let i=0;i<words.length;i++){
    result[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase();

 }
 return result.join(" ");
}

let input="hello FRIENDS this is to upper case"

result=capitalize(input)

console.log(result)