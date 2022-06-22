import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// react router in google
// 1. read the Docs
// - GETTING STARTED
// - INSTALLATION
// npm install react-router-dom@6 in frontend

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginFunc = (e) => {
    e.preventDefault();
    // عشان الصفحة ماتسوي ريفريش
    const userInfo = {
      email,
      password,
    };
    axios
      .post(`http://localhost:5000/users/login`, userInfo)
      .then((response) => {
        console.log("DATA", response.data);
        props.setIsLoggedIn(true);
        props.setUsername(response.data.username);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="Login">
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
        <input type="submit" value="Login" onClick={LoginFunc} />
      </form>
      <Link to="/Register">Don't Have an account?</Link>
    </div>
  );
}
