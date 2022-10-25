const fs = require("fs");

function runMockSECO() {
  let output;
  try {
    output = fs.readFileSync("./output.txt");
  } catch {
    console.error("File output.txt not found.");
  }

  const lines = output.toString().split("\n");

  for (const line of lines) {
    console.log(line.toString());
  }
}

runMockSECO();
