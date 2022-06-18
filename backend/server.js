const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./db");
const Todo = require("./Todo");
const User = require("./user");
const Register = require("./Register");
// console.log(Todo)

// touch .gitignore

app.use(express.json());
app.use(cors());

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
        ? res.json({message: "Delete this todo successfully"})
        : res.status(404).json({message: "This todo is not found"});
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
        ? res.status(404).json({message: "There is no completed todo found"})
        : res.json({message: "Delete all completed todo successfully"});
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
          ? res.json({message: "update this todo successfully"})
          : res.status(404).json({message: "This todo is not found"});
      }
    }
  );
});

app.put("/tasks/:id/:isCompleted", (req, res) => {
  console.log("125", req.params);
  Todo.updateOne(
    { _id: req.params.id },
    { isCompleted: req.params.isCompleted },
    (err, updateObj) => {
      if (err) {
        // console.log("ERROR: ", err);
        res.status(400).json(err);
      } else {
        // console.log(updateObj);
        updateObj.modifiedCount === 1
          ? res.json({message: "update this todo successfully"})
          : res.status(404).json({message: "This todo is not found"});
      }
    }
  );
});

app.post("/users/Register", (req, res) => {
  console.log("28:", req.body);
  User.create(req.body, (err, newUser) => {
    if (err) {
      // console.log("ERROR: ", err);
      res.status(400).json({ message: "This email already taken" });
    } else {
      // res.status(201).json(newUser);
      res.status(201).json({message: "Create New User successfully",});
    }
  });
});

app.post("/users/login", (req, res) => {
  User.find({ email: req.body.email }, (err, arrUserFound) => {
    if (err) {
      console.log("ERROR: ", err);
    } else {
      // console.log(arrUserFound)
      if (arrUserFound.length === 1) {
        if (req.body.password === arrUserFound[0].password) {
          // password correct
          res.status(200).json({
            message: "login soccessfully",
            username: arrUserFound[0].username,
          });
        } else {
          // password incorrect
          res.status(400).json({ message: "Wrong password" });
        }
      } else {
        res.status(404).json({
          message: "The email entered is not register",
        });
      }
    }
  });
});

app.listen(5000, () => {
  console.log("SERVER IS WORKING ...");
});
