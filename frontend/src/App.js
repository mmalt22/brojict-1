// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Todo from "./components/Todo";
import Add from "./components/Add";
import Register from "./components/Register";
import Login from "./components/Login";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const loguotFunc = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  const getData = () => {
    axios
      .get("http://localhost:5000/tasks")
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        setTasks(response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  const postNewTodo = (body) => {
    axios
      .post("http://localhost:5000/tasks", body)
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        // setTasks(response.data);
        getData();
        //   ندورها  في قوقل بدال جلب الداتا
        // change react state using spread operator
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:5000/tasks/${id}`)

      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        // setTasks(response.data);
        getData();
        //   ندورها  في قوقل بدال جلب الداتا
        // change react state using spread operator
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  const ToogleTodo = (id, newStatus) => {
    axios
      .put(`http://localhost:5000/tasks/${id}/${newStatus}`)

      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        // setTasks(response.data);
        getData();
        //   ندورها  في قوقل بدال جلب الداتا
        // change react state using spread operator
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  const deleteTasks = () => {
    axios
      .delete(`http://localhost:5000/tasks`)

      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        // setTasks(response.data);
        getData();
        //   ندورها  في قوقل بدال جلب الداتا
        // change react state using spread operator
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  // uuid اذا اردنا ارقام الايدي توجد مكتبة اسمها

  // .env ملف الحماية

  const filterData = (status) => {
    axios
      .get(`http://localhost:5000/filter?isCompleted=${status}`)
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        setTasks(response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  const mapOverTasks = tasks.map((taskObj, i) => (
    <Todo
      key={taskObj._id}
      task={taskObj}
      deleteTodo={deleteTodo}
      ToogleTodo={ToogleTodo}
    />
  ));

  // const postNewRegister = (body) => {
  //   axios
  //     .post("http://localhost:5000/users/register", body)
  //     .then((response) => {
  //       // console.log('RESPONSE: ', response);
  //       console.log("DATA: ", response.data);
  //       // setTasks(response.data);
  //       getData();
  //       //   ندورها  في قوقل بدال جلب الداتا
  //       // change react state using spread operator
  //     })
  //     .catch((err) => {
  //       console.log("ERR: ", err);
  //     });
  // };

  return (
    <div className="App">
      <p>App </p>
      <p>NAME: {username}</p>

      {/* <nav>
        <Link to="/home">Home</Link> {" | "}
        <Link to="/login">Login</Link> {" | "}
        <Link to="/register">Register</Link>
      </nav>
      <br /> */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Todos
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/home" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <button onClick={loguotFunc}>Loguot</button>
      <Routes>
        <Route
          path="/home"
          element={
            <div className="Home">
              <Add createFunction={postNewTodo} />
              <button onClick={getData}>GET TASKS</button>
              <button onClick={deleteTasks}>DELETE COMPLETED TASKS</button>
              <button
                onClick={() => {
                  filterData(true);
                }}
              >
                GET DONE
              </button>
              <button
                onClick={() => {
                  filterData(false);
                }}
              >
                GET PENDING
              </button>

              

              {/* <Todo/> */}
              {/* <button postNewRegister={postNewRegister}>Register</button> */}

              {mapOverTasks}
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
