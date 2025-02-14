// let num1=prompt("input a number");
// let num2=prompt("input2nd number");

// let calculation=prompt("enter an operator(+,-,/,*):");


// let result;

// switch(calculation){
//     case '+':
//     result=num1+num2;
//     break;

//     case '-':
//         result=num1-num2;
// break;

//         case '/':
//             result=num1/num2;

//             break;

//             case '*':
//                 result=num1*num2

//                 break;

//                 default:
//                     alert("invalied input");
//                     break;
// }

// alert("the result is :" +result);





let num1 = Number(prompt("Input a number"));
let num2 = Number(prompt("Input 2nd number"));
let calculation = prompt("Enter an operator (+, -, /, *):");
let result;

switch (calculation) {
  case '+': 
    result = num1 + num2;
    break;
  case '-': 
    result = num1 - num2;
    break;
  case '/': 
    result = num1 / num2;
    break;
  case '*': 
    result = num1 * num2;
    break;
  default:
    alert("Invalid input");
    break;
}

alert("The result is: " + result);



