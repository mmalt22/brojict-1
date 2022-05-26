// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Todo from "./Todo";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get('http://localhost:5000/tasks')
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
    <Todo key={i} task={taskObj} />
  ));

  return (
    <div className="App">
      <p>tuwaiq academy</p>
      <button onClick={getData}>GET TASKS</button>
      {/* <Todo/> */}
      {mapOverTasks}
    </div>
  );
}
