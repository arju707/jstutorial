// it is a methode of selecting the element by its class for dom manupulation 
// for selectiong class the comand is (document.getElementsByClass)
// here elements are written because there will be many classes



const changes=document.getElementsByClassName('class')
// console.log(changes);

for(let i=0;i<changes.length;i++){
    changes[i].style.color="red"
}


