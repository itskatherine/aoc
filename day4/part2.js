const data = require("./data");

let overlap = 0;
const createTaskArray = (start, finish) => {
  const allTasks = [];
  const first = start;
  for (let i = 1; i <= finish - start; i++) {
    allTasks.push(first + i);
  }
  return allTasks;
};
const pairs = data.split("\n");
let overlaps = 0;
for (let i = 0; i < 1; i++) {
  const elf1Tasks = pairs[i]
    .split(",")[0]
    .split("-")
    .map((e) => parseInt(e));
  const elf2Tasks = pairs[i]
    .split(",")[1]
    .split("-")
    .map((e) => parseInt(e));

  const expandedElf1Tasks = createTaskArray(elf1Tasks[0], elf1Tasks[1]);
  const expandedElf2Tasks = createTaskArray(elf2Tasks[0], elf2Tasks[1]);

  console.log(expandedElf1Tasks, "elf1");
  console.log(expandedElf2Tasks, "elf2");
  for (let i = 0; i < expandedElf1Tasks.length; i++) {
    if (expandedElf2Tasks.includes(expandedElf1Tasks[i])) {
      overlap++;
      break;
    }
  }
}
console.log(overlap);
