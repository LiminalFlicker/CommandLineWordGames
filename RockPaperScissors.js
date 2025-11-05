const playerInput = process.argv[2];
const option0 = process.argv[3];

const figures = ["rock", "paper", "scissors"];

console.log(figures);

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
