const data = require("./data");

const rucksacks = data.split("\n");

const elfGroups = [];
const rucksacksCopy = [...rucksacks];

while (rucksacksCopy.length > 0) {
  elfGroups.push(rucksacksCopy.splice(0, 3));
}

const allBadges = [];
for (let i = 0; i < elfGroups.length; i++) {
  const elf1 = elfGroups[i][0];
  const elf2 = elfGroups[i][1];
  const elf3 = elfGroups[i][2];
  for (let j = 0; j < elf1.length; j++) {
    const item = elf1[j];
    if (elf2.includes(item) && elf3.includes(item)) {
      allBadges.push(item);
      break;
    }
  }
}

const priorityString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let score = 0;
for (let i = 0; i < allBadges.length; i++) {
  const priorityScore = priorityString.indexOf(allBadges[i]) + 1;
  score += priorityScore;
}

console.log(score);
