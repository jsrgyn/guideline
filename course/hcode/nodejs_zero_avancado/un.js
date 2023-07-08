const fs = require("fs");

fs.readFile("tmp/file2.txt", (err, data) => {
  if (err) throw err;

  console.log(data);
});

fs.unlinkSync("tmp/file2.txt");