// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Todo from "./components/Todo";
import Add from "./components/Add";

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

  const postNewTodo = (body) => {
    axios
      .post('http://localhost:5000/tasks', body)
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        // setTasks(response.data);
        getData()
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
        getData()
        //   ندورها  في قوقل بدال جلب الداتا
        // change react state using spread operator
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  }; 

  const mapOverTasks = tasks.map((taskObj, i) => (
    <Todo key={i} task={taskObj} deleteTodo={deleteTodo} />
  ));

  return (
    <div className="App">
      <p>tuwaiq academy</p>
      <Add createFunction={postNewTodo}/>
      <button onClick={getData}>GET TASKS</button>
      {/* <Todo/> */}
      {mapOverTasks}
    </div>
  );
}
