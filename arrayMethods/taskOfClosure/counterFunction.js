// 1. Counter Function 
// Create a function that maintains a private count and returns two functions: one to 
// increment the count and another to decrement it. Use these functions to perform 
// operations on the count.


function createCounter(){
    let count=0;


    return {
     incriment : function(){
        count++
        return count
    },

    decriment : function(){
        count--;
        return count
    }
}

}

let counter=createCounter()

console.log(counter.incriment())
console.log(counter.decriment())
console.log(counter.incriment())
console.log(counter.decriment())
console.log(counter.decriment())
console.log(counter.decriment())
console.log(counter.decriment())
console.log(counter.decriment())
console.log(counter.decriment())

console.log(counter.decriment())
console.log(counter.decriment())
console.log(counter.decriment())
console.log(counter.decriment())
console.log(counter.decriment())
console.log(counter.incriment())

console.log(counter.incriment())
console.log(counter.incriment())
console.log(counter.incriment())
console.log(counter.incriment())
console.log(counter.incriment())

console.log(counter.incriment())
console.log(counter.incriment())

console.log(counter.incriment())
console.log(counter.incriment())
console.log(counter.incriment())
console.log(counter.incriment())
console.log(counter.incriment())
console.log(counter.incriment())


