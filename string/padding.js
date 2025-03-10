function pad(str,targetLength,padChar=""){
    let totalpadding=targetLength-str.length;
    if(totalpadding<=0){
        return("cheracter is already smaller")
    }

    let leftPadding=Math.floor(totalpadding/2);
    let rightPadding=totalpadding-leftPadding;

    return padChar.repeat(leftPadding)+str+padChar.repeat(rightPadding)
}

console.log(pad("Hello", 10, "*"));
console.log(pad("World", 12, "-"));
console.log(pad("JavaScript", 15)); 
console.log(pad("Code", 4, ".")); 