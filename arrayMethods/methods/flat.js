const a1= [['1', '2'], ['3', '4', '5',['6'], '7']]; 

const a2=a1.flat(Infinity) //will flat all array

const a3=a1.flat(1) //will flat 1st depth means if an array is inside the 1st array it will remain there

let a4=a1.flat(2) //2nd array will also be flatted

console.log(a2)

console.log(a3)

console.log(a4)