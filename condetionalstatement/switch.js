// let day=6;
// let dayName;

// switch (day){
//     case 1:
//         dayName= "monday";
//         break;

//         case 2:
//             dayName="tuesday";
//             break;

//             case 3:
//                 dayName="wednesday";
//                 break;
//                 case 4:
//                     dayName="thursday";
//                     break;
//                     case 5:
//                         dayName="friday";
//                         break;
//                         case 6:
//                             dayName="saturday";
//                             break;
//                             case 7:
//                                 dayName="sunday";
//                                 break;
//                                 default:
//                                 dayName="invalid day";

//                     }

//                     console.log(dayName);
                    
    

let studentscore=1
function score(score){
    switch (true) {
        case (score >= 90 && score <= 100):
          return "A";
        case (score >= 80 && score <= 89):
          return "B";
        case (score >= 70 && score <= 79):
          return "C";
        case (score >= 60 && score <= 69):
          return "D";
        default:
          return "F";
      }
    }
    score();
    console.log(score)
    

