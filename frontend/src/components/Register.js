import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const registerFunc = (e) => {
    e.preventDefault();
    console.log("reg");
    const newUser = {
      email,
      password,
      username,
    };
    axios
      .post(`http://localhost:5000/users/register`, newUser)
      .then((response) => {
        console.log("DATA", response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="Register">
      <form action="">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          placeholder="write email here ..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          placeholder="write password here ..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <br />
        <label htmlFor="text">Username: </label>
        <input
          type="text"
          placeholder="write username here ..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
        <br />
        <input type="submit" value="Register" onClick={registerFunc} 
        className="btn btn-dark"/>
        {/* <button type="button" class="btn btn-dark">Dark</button> */}
      </form>
      <Link to="/Login"> Have an account?</Link>
    </div>
  );
}
