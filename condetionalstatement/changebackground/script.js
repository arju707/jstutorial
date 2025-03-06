const btn = document.getElementById("changeColour");
let currentColour = document.getElementById("colourBox");

btn.addEventListener("click", function () {
  console.log("Button clicked");

  if (currentColour.style.backgroundColor === "red") {
    console.log("Colour is red");
    currentColour.style.backgroundColor = "yellow";
    console.log("Colour changed to yellow");
  } else if (currentColour.style.backgroundColor === "yellow") {
    console.log("Colour is yellow");
    currentColour.style.backgroundColor = "blue";
    console.log("Colour changed to blue");
  } else {
    console.log("Colour is not red or yellow, setting to red");
    currentColour.style.backgroundColor = "red";
  }
});
