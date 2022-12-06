const data = require("./data");

//find the elf carrying yhe most calories

const arr = data.split("\n\n");
const allElvesTotals = [];
for (let i = 0; i < arr.length; i++) {
  let elf = arr[i].split("\n");
  let elfTotal = 0;
  if (elf.length === 1) {
    elfTotal = parseInt(elf[0]);
  } else {
    elfTotal = elf.reduce((a, b) => {
      return parseInt(a) + parseInt(b);
    });
  }
  allElvesTotals.push(elfTotal);
}

const ascSortedElves = allElvesTotals.sort((a, b) => a - b);
const descSortedElves = ascSortedElves.reverse();

let top3ElvesSum = 0;
for (let i = 0; i < 3; i++) {
  top3ElvesSum += descSortedElves[i];
}
console.log(top3ElvesSum);
