// let i = 1 ;  // Start from 1

// do {
//   console.log("Number:", i);
//   i++;  // Increase i by 1 in each iteration
// } while (i <= 10);  // Run while i is less than or equal to 5



// let pswrd;
// do{
//   pswrd=prompt("enter a password(alteast 6 char:");

// }
// while(pswrd.length<6);
// console.log("password is inval");
// alert("password is valied")


let a=[4,5,3,5,367,7,4,2,3,9,0,7,6,5,4,3,2,11]

let thevalue=3;


for(let i=0;i<a.length;i++){
  console.log("checking", a[i]);
  if(a[i]===thevalue){
    console.log("found",thevalue ,"in index" ,i);
    break;
  }
  console.log("value not match");
}

