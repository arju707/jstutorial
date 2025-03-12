// let num=[1,2,3,4,5,28,30,35,40,]

// function find(value){
//     console.log(value>28);
//     return value>28;
    
// }
// let result=num.find(find)

// console.log(result)




//search for first possitive number

// let num=[-0.2,-0.3,0,-0.-5,1,2,3,4,0.44]

// function positive(value){
//     return value > 0
// }

// let result=num.find(positive)

// console.log(result)

let num=[-0.2,-0.3,0,-0.-5,1,2,3,4,0.44]

let result=num.find(num=>num>0)

console.log(result)