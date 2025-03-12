// let arr=[1,2,3,4,5]

// let sr= arr.map(num=>Math.sqrt(arr));
// console.log(sr)



// let arr=[2,3,6,8,10,20]

// let result=arr.map(function(val,index){   //it takes 2 parameaters val and index
//     return{key:index, value:val*val};// index is the index value val is the value of the index 
// })


// console.log(result) // the result is consoled here 

//map will itrate through the array willnot change the original array 


//try map in another methode


 let arr=[2,3,6,8,10,20]

 let result=arr.map(arr=>arr*arr)

 console.log(result)
 console.log(arr);
 

