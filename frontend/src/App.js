// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Todo from './Todo'

export default function App() {
  const getData=()=>{
    
  }
  return (
    <div className="App">
      <p>tuwaiq academy</p>
      <button onClick={getData}>GET TASKS</button>
      <Todo/>
    </div>
  );
}

