//the function dont have a name so it is assigned to a variable the function is called by the variable
// here the name of the variable is functions

// const functions= function functions(){
//     console.log("wencome to anonymous function")
// };

// functions();



// lets check it as a call back

// setTimeout(function(){
//     console.log("theis is an anonymous function")
// },500);       //the 500 here is the delay of consoling it will be in microseconds\




// let fruits = ["apple", "banana", "cherry"];

// fruits.forEach(function(item) {
//     console.log(item);
// });


//anonymous function by using forloop
 

let fruit=["APPLE","BANANA","GRAPES"];

(function (array){
    for(let i=0;i<array.length;i++)
        console.log(array[i])
}
)(fruit);