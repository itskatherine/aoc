const data = require("./data");

const findUnique4Chars = (string) => {
  for (let i = 4; i < string.length; i++) {
    const latest4Chars = string.slice(i - 4, i);
    const latest4CharsArr = latest4Chars.split("");
    for (let j = 0; j < latest4Chars.length; j++) {
      //check that no characters match in this array
      const setVersion = new Set(latest4CharsArr);
      if (setVersion.size === 4) {
        return i;
      }
    }
  }
};

console.log(findUnique4Chars(data));
