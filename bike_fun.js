const prompt = require("prompt-sync")();

let greeting = prompt("welcome to bike fun game, please Enter your Name: ");
console.log("");
console.log(`Good day ${greeting}, welcome to bike rider timer!`);

while (true) {
  let timmer = prompt("please Enter your set time....i count in minutes ");

  if (isNaN(timmer)) {
    console.log("please enter a number");
    break;
  }

  let timerset = prompt(
    "please Enter Press C to continue or R to reset your GOAL, to Quit press Q: "
  ).toUpperCase();

  if (timerset === "Q") {
    console.log(`OK Bye..${greeting}`);
    break;
  } else if (timerset === "R") {
    console.log("Reset Goal?...click (R)");
  } else if (timerset === "C") {
    while (true) {
      console.log();
      console.log(`your set time is ${timmer}mins!`);
      let startride = prompt("click S to START ").toUpperCase();
      if (startride === "S") {
        console.log("yeah!");
        break;
      } else if (startride !== "S") {
        console.log("Quit timmer");
      }
      let Q = prompt("Q for Quit ").toUpperCase();
      if (Q === "Q") {
        console.log("bye", greeting);
      }
      break;
    }
  }
  let confirm = prompt(
    `you want to ride for ${timmer}mins right click y for YES! `
  ).toUpperCase();
  if (confirm === "Y") {
    let timer = setInterval(() => {
      console.log("counting");
    }, timmer * 50);
    break;
  }
  continue;
}


