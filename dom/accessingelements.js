const para = document.getElementsByTagName('p')
const clsnm=document.getElementsByClassName('ptag')

for(let i=0;i<para.length;i++){
    para[i].style.color="green"

    console.log(para[i].textContent);
}






// for (let i of peragraphes) {
//     console.log(i.textContent)
// }