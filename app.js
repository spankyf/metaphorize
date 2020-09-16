const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");
const wordMaker = require(path.join(__dirname, "utils", "getWords.js"));

const words = wordMaker();

app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "pug");

app.get("/", function (req, res) {
  res.render("main", { title: "Metaphor maker", data: words });
});

app.listen(3000);
