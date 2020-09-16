const fs = require("fs");
const path = require("path");

module.exports = function () {
  let obj = {};
  const baseDir = path.join(__dirname, "..", "public", "words");

  fs.readdirSync(baseDir).forEach((element) => {
    fs.readdirSync(path.join(baseDir, element)).forEach((file) => {
      let data = fs.readFileSync(path.join(baseDir, element, file));
      obj[element] = { file: data.toString().split("\r\n") };
    });
  });

  return obj;
};

// wordsObject();
