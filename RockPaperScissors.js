if (process.argv[2] === undefined) {
  console.error("Missing arguments");
  process.exit(2);
}

const playerInput = process.argv[2];
const option0 = process.argv[3];

const figures = ["rock", "paper", "scissors"];

/* */
const fe_comInput = (max = 3, option) => {
  return figures[Math.floor(Math.random() * max)];
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

if (
  playerInput.toLowerCase() + computer === "scissorspaper" ||
  playerInput.toLowerCase() + computer === "paperscissors"
) {
  if (playerInput.toLowerCase() === "scissors") {
    console.log(`Result: WIN`);
  } else {
    console.log(`Result: LOSE`);
  }
}

if (
  playerInput.toLowerCase() + computer === "paperrock" ||
  playerInput.toLowerCase() + computer === "rockpaper"
) {
  if (playerInput.toLowerCase() === "paper") {
    console.log(`Result: WIN`);
  } else {
    console.log(`Result: LOSE`);
  }
}

if (
  playerInput.toLowerCase() + computer === "scissorsrock" ||
  playerInput.toLowerCase() + computer === "rockscissors"
) {
  if (playerInput.toLowerCase() === "rock") {
    console.log(`Result: WIN`);
  } else {
    console.log(`Result: LOSE`);
  }
}

process.exit(0);
