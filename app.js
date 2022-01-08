// Упражнение

//// let lang = prompt ("Введите букву");

// switch (lang) {
//   case "a, i , e o, u ":
//     console.log("гласная");
//     break;
//     case "y":
//     console.log("гласная ,согласная");
//   default:
//     console.log("согласная");
//     break;
// }

// 
// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(numbers); // [1, 2, 3, 4, 5]



const Jackhammer = 130;
const gasLawnMower = 106;
const Alarmclock = 70;
const QuietRoom = 40;

let userInput = 86;

if (userInput <QuietRoom) {
  document.write("Очень тихо");
} else if (userInput === QuietRoom) {
  document.write("Тихая команата");
} else if (userInput > QuietRoom && userInput <Alarmclock) {
  document.write("Громче тихой комнаты и тише будильника");
} else if (userInput === Alarmclock) {
  document.write("Будильник");
} else if (userInput > Alarmclock && userInput < gasLawnMower) {
  document.write("Громче будильника тише газонокосилки");
} else if (userInput === Jackhammer) {
  document.write("Отбойный молоток");
} else if (userInput > gasLawnMower && userInput < Jackhammer) {
  document.write("Громче газонокосилки тише отбойного молотка");
} else {
  document.write("Очень громко!");
}

// let userDollar = prompt("введенно номинала банкноты:");

// switch (userDollar) {
//   case "1$":
//     document.write("George Washington");
//     break;
//   case "2$":
//     document.write("Thomas Jefferson");
//     break;
//   case "5$":
//     document.write("Abraham Lincoln");
//     break;
//   case "10$":
//     document.write("Alexander Hamilton");
//     break;
//   case "20$":
//     document.write("Andrew Jackson");
//     break;
//   case "50$":
//     document.write("Ulysses Grant");
//     break;
//   case "100$":
//     document.write("Benjamin Franklin");
//     break;
//   default:
//     document.write("Нет банкноты такого номинала!");
// }


// hw-3

// let userDay = 29;
// let userMonth = "february";
// let userYear = 2020;

// let outputDate;
// let outputMonth;
// let outputYear = userYear;

// switch (userMonth) {
//   case "february":
//     if (userYear % 4 === 0 && userDay === 29) {
//       outputDate = 1;
//       outputMonth = "march";
//     } else if (userYear % 4 !== 0 && userDay === 28) {
//       outputDate = 1;
//       outputMonth = "march";
//     } else {
//       outputDate = userDay + 1;
//       outputMonth = userMonth;
//     }
//     break;
//   case "january":
//     if (userDay === 31) {
//       outputDate = 1;
//       outputMonth = "february";
//     } else {
//       outputDate = userDay + 1;
//       outputMonth = userMonth;
//     }
//     break;
//   case "march":
//     if (userDay === 31) {
//       outputDate = 1;
//       outputMonth = "april";
//     } else {
//       outputDate = userDay + 1;
//       outputMonth = userMonth;
//     }
//     break;
//   case "july":
//     if (userDay === 31) {
//       outputDate = 1;
//       outputMonth = "august";
//     } else {
//       outputDate = userDay + 1;
//       outputMonth = userMonth;
//     }
//     break;
//   case "august":
//     if (userDay === 31) {
//       outputDate = 1;
//       outputMonth = "september";
//     } else {
//       outputDate = userDay + 1;
//       outputMonth = userMonth;
//     }
//     break;
//   case "october":
//     if (userDay === 31) {
//       outputDate = 1;
//       outputMonth = "november";
//     } else {
//       outputDate = userDay + 1;
//       outputMonth = userMonth;
//     }
//     break;
//   case "december":
//     if (userDay === 31) {
//       outputDate = 1;
//       outputMonth = "january";
//       outputYear = userYear + 1;
//     } else {
//       outputDate = userDay + 1;
//       outputMonth = userMonth;
//     }
//     break;
//   default:
//     outputDate = userDay + 1;
//     outputMonth = userMonth;
//     break;
// }

// let message = `Следующая дата: ${outputDate} ${outputMonth} ${outputYear}`;

// document.write(message);
