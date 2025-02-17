// <--------------------------------------------min and max------------------------------------------------------>


// let a=10.99;



// let b=3;
// let c=56;

//  let minimum;
// //  let maximum;


//  minimum=Math.min(a,b,c)
//  maximum=Math.max(a,b,c)

// console.log(minimum);
// console.log(maximum);



// ------------------------------------------------ROUNDING NUMBER WHEN HAVE DECIMAL POINTS---------------------------------------------------------------------------

// let x= (10.55,12,23,45,667,76)

// x=Math.round(x)       ->>>>>for rounding a point value 

// x=Math.floor(x)        ___________________________it is for rounding a number down when it is __________________________________________________

// x=Math.ceil(x)    ------------------------------------to round a number to its top -------------------------------------------------


// x=Math.random(x)


// x=Math.max(x)

// x=Math.min(x)


// console.log(x)




// --------------------------------------------MIN AND MAX IN AN ARRAY-------------------------------------------------------------------------------


// let array=[10.33,11.45,12.67,1.3,14,111.5,16,48,35,89]

// let minvalue=Math.min(...array);   //the ...array are used to spread the the sintax this is called the spreading methode


// let maxvalue=Math.max(...array)
// console.log("minimum value is ",minvalue)

// console.log("maxvalue is ",maxvalue)



// ----------------------------------------------round the numbers in an array and add the rounded numbers to another array-----------------------------------------------------------------------------



// let numbers=[12.3,23.45,44.3,223.2,55.6,3.3,5.5]
// let roundednumbers=[]

// for(let i=0;i<numbers.length;i++){

//     let roundedarray=Math.ceil(numbers[i])
//     roundednumbers.push(roundedarray)

// }

// console.log("the original numbers",numbers)

// console.log( "and this are the roundednumbers" ,roundednumbers)


// ------------------------------------------------------RANDOM NUMBERS----------------------------------------------------------------------

let i=10;
let x= 15;

const randomnumber=Math.floor(Math.random(i,x) * x-i+1)+i;

console.log(randomnumber);


