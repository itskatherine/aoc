const data = require("./data");

const pairs = data.split("\n");
let overlaps = 0;
for (let i = 0; i < pairs.length; i++) {
  const elf1Tasks = pairs[i]
    .split(",")[0]
    .split("-")
    .map((e) => parseInt(e));
  const elf2Tasks = pairs[i]
    .split(",")[1]
    .split("-")
    .map((e) => parseInt(e));
  console.log(elf1Tasks);
  console.log(elf2Tasks);
  if (elf1Tasks[0] <= elf2Tasks[0] && elf1Tasks[1] >= elf2Tasks[1]) {
    console.log("elf1 has all elf2 tasks ");
    overlaps++;
  } else if (elf2Tasks[0] <= elf1Tasks[0] && elf2Tasks[1] >= elf1Tasks[1]) {
    console.log("elf2 has all elf1 tasks");
    overlaps++;
  }
}
console.log("overlaps: ", overlaps);
