










//cursor pointer

document.addEventListener("DOMContentLoaded",function(){
    const cursor = document.getElementById("cursor");
    console.log(cursor)
    
    document.addEventListener("mousemove", (e) => {
        console.log(e)
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    })
    // Update the position of the circle
});

         

document.addEventListener("DOMContentLoaded",()=>{

const links=document.querySelector("navbar");

const toolTip=document.createElement("div");
toolTip.classList.add("tooltip");
document.body.appendChild(toolTip);




links.forEach(link=> {
    
    link.addEventListener("mouseenter",(e)=>{
        toolTip.innerText=links.getAttribute("data_tooltip")
        toolTip.style.left=e.clientX+"px";
        toolTip.style.right=(e.clientY +20) +px;
    })

    link.addEventListener("mousemove", (e) => {
        toolTip.style.left = e.clientX + "px";
        toolTip.style.top = (e.clientY + 20) + "px";
      });

      link.addEventListener("mouseleave", () => {
        toolTip.style.opacity = "0";
      });

});

})