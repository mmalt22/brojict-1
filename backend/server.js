const express = require("express");
const app = express();
const cors = require("cors")

const db = require("./db");
const Todo = require("./Todo");
// console.log(Todo)

// touch .gitignore

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.json("GET / is Working ...");
});

app.get("/tasks", (req, res) => {
  Todo.find({}, (err, data) => {
    if (err) {
      console.log("ERROR: ", err);
    } else {
      res.json(data);
    }
  });
});

app.get("/filter", (req, res) => {
  console.log(req.query);
  Todo.find({ isCompleted: req.query.isCompleted }, (err, data) => {
    if (err) {
      console.log("ERR", err);
    } else {
      // console.log(data);
      res.json(data);
    }
  });
});

/*

the filter is enaff

app.get("/completed", (req, res) => {
  Todo.find({ isCompleted: true }, (err, data) => {
    if (err) {
      console.log("ERR", err);
    } else {
      // console.log(data);
      res.json(data);
    }
  });
});

app.get("/not_completed", (req, res) => {
  Todo.find({ isCompleted: false }, (err, data) => {
    if (err) {
      console.log("ERR", err);
    } else {
      // console.log(data);
      res.json(data);
    }
  });
});
*/

app.post("/tasks", (req, res) => {
  console.log("28:", req.body);
  Todo.create(req.body, (err, newTask) => {
    if (err) {
      console.log("ERROR: ", err);
    } else {
      res.status(201).json(newTask);
    }
  });
});

app.delete("/tasks/:id", (req, res) => {
  console.log("39:", req.params.id);
  Todo.deleteOne({ _id: req.params.id }, (err, deleteObj) => {
    if (err) {
      console.log("ERROR: ", err);
    } else {
      deleteObj.deletedCount === 1
        ? res.json("Delete this todo successfully")
        : res.status(404).json("This todo is not found");
    }
  });
});

app.delete("/tasks", (req, res) => {
  // console.log("39:", req.params.id);
  Todo.deleteMany({ isCompleted: true }, (err, deleteObj) => {
    if (err) {
      console.log("ERROR: ", err);
    } else {
      console.log(deleteObj);
      deleteObj.deletedCount === 0
        ? res.status(404).json("There is no completed todo found")
        : res.json("Delete all completed todo successfully");
    }
  });
});

app.put("/tasks/:id", (req, res) => {
  Todo.updateOne(
    { _id: req.params.id },
    { title: req.body.newTitle },
    (err, updateObj) => {
      if (err) {
        console.log("ERROR: ", err);
        res.status(400).json(err);
      } else {
        console.log(updateObj);
        updateObj.modifiedCount === 1
          ? res.json("update this todo successfully")
          : res.status(404).json("This todo is not found");
      }
    }
  );
});

app.put("/tasks/:id/:isCompleted", (req, res) => {
  console.log("125", req.params);
  Todo.updateOne(
    { _id: req.params.id },{ isCompleted: req.params.isCompleted },(err, updateObj) => {
      if (err) {
        // console.log("ERROR: ", err);
        res.status(400).json(err);
      } else {
        // console.log(updateObj);
        updateObj.modifiedCount === 1
          ? res.json("update this todo successfully")
          : res.status(404).json("This todo is not found");
      }
    }
  );
});

app.listen(5000, () => {
  console.log("SERVER IS WORKING ...");
});
