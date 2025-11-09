/* Check command line input */
if (process.argv[2] === undefined) {
  console.error("Missing arguments");
  process.exit(2);
}

/* Save input of user in meaningful variables */
const playerInput = process.argv[2];
const option0 = process.argv[3];

const figures = ["rock", "paper", "scissors"];

/* Generate random computer input */
const fe_comInput = (max = 3, option) => {
  return figures[Math.floor(Math.random() * max)];
};

/* Check if input is valid and correctly written and output choice to console */
if (
  playerInput.toLowerCase() === "rock" ||
  playerInput.toLowerCase() === "paper" ||
  playerInput.toLowerCase() === "scissors"
) {
  console.log(`You chose ${playerInput.toUpperCase()}`);
} else {
  /* Message when player choice is not allowed and exit program */
  console.log(
    `${playerInput}? -> Only Rock ✊, Paper ✋ or Scissors ✌️ is allowed.`
  );
  process.exit(2);
}

/* Generate random computer input */
const computer = fe_comInput();

/* Output computer choice to console */
console.log(`Computer chose ${computer.toUpperCase()}`);

/* Find out result of game */
if (computer === playerInput) {
  console.log(`Result: DRAW`);
} else {
  if (playerInput.toLowerCase() == "scissors" && computer === "paper") {
    console.log(`Result: WIN`);
  } else if (playerInput.toLowerCase() == "paper" && computer === "rock") {
    console.log(`Result: WIN`);
  } else if (playerInput.toLowerCase() == "rock" && computer === "scissors") {
    console.log(`Result: WIN`);
  } else {
    console.log(`Result: LOSE`);
  }
}

process.exit(0);
