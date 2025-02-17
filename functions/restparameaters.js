// function sum(...numberes){
//     return numberes.reduce((total,num)=>total+num,0);
// }
// console.log(sum(1,2,3,4,));



function add(...numbers){

    return numbers.reduce((sum,num)=>sum+num,0);
}
console.log(add(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1))



//this is used when we dont know howmany arguments will a function will recive

// ... used are called the rest parameaters