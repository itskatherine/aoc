const instructions = require("./data.js");

const stacks = [
  ["T", "D", "W", "Z", "V", "P"],
  ["L", "S", "W", "V", "F", "J", "D"],
  ["Z", "M", "L", "S", "V", "T", "B", "H"],
  ["R", "S", "J"],
  ["C", "Z", "B", "G", "F", "M", "L", "W"],
  ["Q", "W", "V", "H", "Z", "R", "G", "B"],
  ["V", "J", "P", "C", "B", "D", "N"],
  ["P", "T", "B", "Q"],
  ["H", "G", "Z", "R", "C"],
];

const allInstructions = instructions.split("\n");
const allInstructionsArr = [];

for (let i = 0; i < allInstructions.length; i++) {
  let eachInstruction = allInstructions[i].split(" ");
  let instructionArray = [
    eachInstruction[1],
    eachInstruction[3],
    eachInstruction[5],
  ];

  allInstructionsArr.push(instructionArray);
}

for (let i = 0; i < allInstructionsArr.length; i++) {
  //move 3 from 1 to 2
  console.log(allInstructionsArr[i]);
  const numberOfBoxesToMove = parseInt(allInstructionsArr[i][0]);
  const movedFrom = parseInt(allInstructionsArr[i][1]);
  const movedTo = parseInt(allInstructionsArr[i][2]);
  const movedBoxes = stacks[movedFrom - 1].splice(-numberOfBoxesToMove);
  console.log(movedBoxes, "movedBoxes");
  console.log(numberOfBoxesToMove, "numberOfBoxesToMove");
  console.log(movedFrom, "movedFrom");
  console.log(movedTo, "movedTo");
  stacks[movedTo - 1].push(...movedBoxes);
  console.log(stacks);
}

const topBoxes = stacks.map((arr) => arr.splice(-1)).join("");

console.log(topBoxes);
