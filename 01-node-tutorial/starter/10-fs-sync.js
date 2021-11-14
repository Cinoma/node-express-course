const { readFileSync, writeFileSync } = require("fs");
// const fs = require("fs");
// fs.readFileSync === readFileSync

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

// console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  //append (add to file)
  { flag: "a" }
);
