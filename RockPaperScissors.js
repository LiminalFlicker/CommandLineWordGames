const playerInput = String(process.argv[2]);
const option0 = String(process.argv[3]);

/* */
const fe_comInput = (max = 3, option) => {
  let retVal = "";
  switch (Math.floor(Math.random() * max)) {
    case 0:
      retVal = "rock";
      break;
    case 1:
      retVal = "paper";
      break;
    case 2:
      retVal = "scissors";
      break;
    default:
      retVal = "error";
  }
  return retVal;
};

if (
  playerInput.toLowerCase() === "rock" ||
  playerInput.toLowerCase() === "paper" ||
  playerInput.toLowerCase() === "scissors"
) {
  console.log(`You chose ${playerInput.toUpperCase()}`);
} else {
  console.log(
    `${playerInput}? -> Only Rock ✊, Paper ✋ or Scissors ✌️ is allowed.`
  );
  process.exit(2);
}

const computer = fe_comInput();
console.log(`Computer chose ${computer.toUpperCase()}`);

if (computer === playerInput) {
  console.log(`Result: DRAW`);
}
if (playerInput.toLowerCase() === "scissors" && computer === "paper") {
  console.log(`Result: WIN`);
}
if (playerInput.toLowerCase() === "paper" && computer === "rock") {
  console.log(`Result: LOSE`);
}
if (playerInput.toLowerCase() === "rock" && computer === "scissors") {
  console.log(`Result: WIN`);
}
if (playerInput.toLowerCase() === "paper" && computer === "scissors") {
  console.log(`Result: LOSE`);
}
if (playerInput.toLowerCase() === "rock" && computer === "paper") {
  console.log(`Result: WIN`);
}
if (playerInput.toLowerCase() === "scissors" && computer === "rock") {
  console.log(`Result: LOSE`);
}

process.exit(0);

// TODO:
// const https = require("https");

// https
//   .get(
//     "https://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5",
//     (resp) => {
//       let data = "";

//       // A chunk of data has been received.
//       resp.on("data", (chunk) => {
//         data += chunk;
//       });

//       // The whole response has been received. Print out the result.
//       resp.on("end", () => {
//         console.log(data);
//       });
//     }
//   )
//   .on("error", (err) => {
//     console.log("Error: " + err.message);
//   });
