let array=[10,20,30,40,50,60,70,100,90,200]
console.log(array)

let min=array[0]
let max=array[0]
for(let i=0;i<array.length;i++)
{
    if(array[i]<min){
        min=array[i]
    }
    if(array[i]>max){
        max=array[i]
    }
}
console.log("maxvalue is",max);
console.log("mai value is ",min);