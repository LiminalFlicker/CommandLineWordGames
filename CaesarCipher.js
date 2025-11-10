const exitCodes = {
  Success: 0,
  GeneralError: 1,
  ShellError: 2,
};

const LETTER_NOT_FOUND = -1;
const DEFAULT_SHIFT = 3;
const DEBUG = false;
const SHIFT_VALUE_CHECK = false;

const alphabet = [
  "a", // 0
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k", // idx = 10;
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u", // idx = 20
  "v",
  "w",
  "x",
  "y",
  "z", // idx = 25
  //   "»",
  //   "«",
  //   "?",
  //   ".",
  //   " ",
  //   ",",
];

/* Check command line input */
if (process.argv[2] === undefined && process.argv[3] === undefined) {
  console.error("Missing arguments");
  process.exit(exitCodes.ShellError);
}

/* -> A negative shift means shift to the left.
   -> A positive shift means shift to the right */
const shift_number = Number(process.argv[3])
  ? /* Check if shift parameter is in passable format */
    Number(process.argv[3])
  : /* Use default shift, if input parameter value is unlucky */
    DEFAULT_SHIFT;

if (SHIFT_VALUE_CHECK) {
  if (Math.abs(shift_number) >= alphabet.length) {
    console.error(`Shift parameter value ${shift_number} out of range.`);
    process.exit(exitCodes.GeneralError);
  }
}

const sentence_array = process.argv[2].toLowerCase().split("");

if (DEBUG) console.log(sentence_array);

let ciphered = [];

sentence_array.forEach((letter_s) => {
  let idx = alphabet.findIndex((letter_a) => {
    return letter_a === letter_s;
  });
  if (DEBUG) console.log(idx);
  if (idx === LETTER_NOT_FOUND) {
    ciphered.push(letter_s);
  } else {
    ciphered.push(alphabet.at((idx + shift_number) % alphabet.length));
  }
});

console.log(ciphered.join(""));

process.exit(exitCodes.Success);
