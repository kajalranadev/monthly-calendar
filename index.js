console.clear();
// function getMonth(monthNumber) {
//   switch (monthNumber) {
//     case 1:
//       console.log("January");
//       break;
//     case 2:
//       console.log("February");
//       break;
//     case 3:
//       console.log("March");
//       break;
//     case 4:
//       console.log("April");
//       break;
//     case 5:
//       console.log("May");
//       break;
//     case 6:
//       console.log("June");
//       break;
//     case 7:
//       console.log("July");
//       break;
//     case 8:
//       console.log("August");
//       break;
//     case 9:
//       console.log("September");
//       break;
//     case 10:
//       console.log("October");
//       break;
//     case 11:
//       console.log("November");
//       break;
//     case 12:
//       console.log("December");
//       break;
//     default:
//       console.log("Invalid month number");
//   }
// }


// second function

function getMonth(monthNumber) {
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  if (monthNumber >= 0 && monthNumber <= 12) {
    console.log(months[monthNumber - 1]);
  } else {
    console.log("Invalid month number");
  }
}


getMonth(3);
getMonth(13);
