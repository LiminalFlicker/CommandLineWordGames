const exitCodes = {
  Success: 0,
  GeneralError: 1,
  ShellError: 2,
};

const LETTER_NOT_FOUND = -1;

/* Check command line input */
// if (process.argv[2] === undefined) {
//   console.error("Missing arguments");
//   process.exit(exitCodes.Success);
// }

/* -> A negative shift means shift to the left.
   -> A positive shift means shift to the right */
const shift_number = 3;

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
  "»",
  "«",
  "?",
  ".",
  " ",
  ",",
];

// console.log(alphabet.at(-3));

const satz =
  "»Wen glaubst du zu beschützen? Der Krieg ist vorbei. Holdfast ist tot. Die Ewige Flamme ist erloschen. Es gibt niemanden mehr, den du retten kannst.«";

const satz_array = satz.split("");

// console.log(satz_array);

// console.log(satz);

// console.log(alphabet.findIndex((element) => element === "v"));

let ciphered = [];

satz_array.forEach((letter_s) => {
  console.log(letter_s);
  let idx = alphabet.findIndex((letter_a) => {
    // console.log(letter_a);
    return letter_a === letter_s;
  });
  console.log(idx);
  console.log(alphabet.at(idx + shift_number));
  //   ciphered.push(alphabet.at(idx + shift_number));
});

console.log(ciphered);

// process.stdin.on("data", (data) => {
//   console.log(`You typed ${data.toString()}`);
//   process.exit();
// });
