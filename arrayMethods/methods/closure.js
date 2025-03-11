function createCounters(){
let count=0

    return function(){

        count++;
        return count;

        
    }
}

let  counter=createCounters()

console.log(counter())
console.log(counter())
console.log(counter())