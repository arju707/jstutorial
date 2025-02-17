const fact=(a,b)=>{
    let result=1;
    for( let i=0;i<=a; i++){
        result*=i;
    }

   return result;
}

console.log(fact(5));
