const express = require("express");
const app = express();

const db = require("./db");
const Todo = require("./Todo");
// console.log(Todo)

// touch .gitignore

const port = 3000;

app.get("./", (req, res) => {
  res.json("GET / is Working ...");
});
app.get("./tasks", (req, res) => {
  res.json("GET / is Working ...");
});

app.listen(port, () => {
  console.log("SERVER IS WORKING ...");
});
