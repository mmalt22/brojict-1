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
  const [loginStatus, setLoginStatus] = useState(null);
  const [loginMessage, setLoginMessage] = useState("");

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
        setLoginStatus(response.status);
        setLoginMessage(response.data.message);
        console.log("DATA", response.data);
        props.setIsLoggedIn(true);
        props.setUsername(response.data.username);
      })
      .catch((err) => {
        console.log("err", err);
        setLoginStatus(err.response.status);
        setLoginMessage(err.response.data.message);
        props.setIsLoggedIn(false);
        props.setUsername(null);
      });
  };

  return (
    <div className="Login">
      {/* 
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
        <input
          type="submit"
          value="Login"
          onClick={LoginFunc}
          className="btn btn-success"
        />
        
        <Link to="/Register">Don't Have an account?</Link>
        </form>
       */}
      <form action="" className="m-3">
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <br />
            {/* التحقق من  الايميل و الباسورد */}
        { loginStatus === 200  &&  (
        <div class="alert alert-success" role="alert">
          {loginMessage}
        </div>
            )}

            {(loginStatus === 400 || loginStatus===404) && (
               (
                <div class="alert alert-danger" role="alert">
                {loginMessage}
                </div>
                )
             )}
              {/* التحقق من  الايميل و الباسورد */}
        <input
          type="submit"
          value="Login"
          onClick={LoginFunc}
          className="btn btn-success"
        />
        <Link to="/Register" className="btn btn-link">
          Don't Have an account?
        </Link>
      </form>
    </div>
  );
}
