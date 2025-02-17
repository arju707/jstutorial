// function maxValue(a,b){
//     console.log(`the biggenst among ${a} and${b}`)
//     if(a<b){
//         console.log(`${b} is larger`)
//     }
//     else{
//         console.log(`${a} is larger`)
//     }
//     return 
// }

// console.log(maxValue(60,59));


//try it by using arrow function also


let maxValue=(a,b)=>{
    console.log(`the biggenst among ${a} and  ${b}`)
    if(a<b){console.log(`${b} is larger`)}
    else{
        console.log(`${a} a is larger`)
    }
}

console.log(maxValue(100,101));