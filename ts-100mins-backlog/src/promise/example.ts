import fs = require("fs");
function readFileAsync(filename: string): Promise<any> {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

readFileAsync("README.md").then((res) => {
  console.log(res);
});
