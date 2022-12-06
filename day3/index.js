const data = require("./data");

const rucksacks = data.split("\n");
const allWrongItems = [];
for (let i = 0; i < rucksacks.length; i++) {
  const rucksack = rucksacks[i];
  const rucksackSize = rucksack.length;

  const compartment1 = rucksack.slice(0, rucksackSize / 2);
  const compartment2 = rucksack.slice(rucksackSize / 2, rucksackSize);

  for (let j = 0; j < compartment1.length; j++) {
    if (compartment2.includes(compartment1[j])) {
      allWrongItems.push(compartment1[j]);
      break;
    }
  }
}

const priorityString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let score = 0;
for (let i = 0; i < allWrongItems.length; i++) {
  const priorityScore = priorityString.indexOf(allWrongItems[i]) + 1;
  score += priorityScore;
}

console.log(score);

