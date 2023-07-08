const fs = require("fs");

fs.readFile("tmp/file2.txt", (err, data) => {
  if (err) throw err;

  console.log(data);

  fs.unlink("tmp/file2.txt", (unlinkErr) => {
    if (unlinkErr) throw unlinkErr;
    console.log("Arquivo Excluído com sucesso!")
  });
  
});

// fs.unlinkSync("tmp/file2.txt");