const rps = require("./data");
const choiceScore = { X: 1, Y: 2, Z: 3 };
const loss = { A: "Y", B: "Z", C: "X" };
const draw = { A: "X", B: "Y", C: "Z" };
const win = { A: "Y", B: "Z", C: "X" };

const allPlaysStr = rps.split("\n");
const allPlaysArr = allPlaysStr.map((string) => {
  return string.split(" ");
});

let score = 0;

for (let i = 0; i < allPlaysArr.length; i++) {
  const currentPlay = allPlaysArr[i];
  if (draw[currentPlay[0]] === currentPlay[1]) {
    score += 3;
  } else if (win[currentPlay[0]] === currentPlay[1]) {
    score += 6;
  }
  score += choiceScore[currentPlay[1]];
}

console.log(score);
