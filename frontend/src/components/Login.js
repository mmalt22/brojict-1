import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginFunc = (e) => {
    e.preventDefault()
    // عشان الصفحة ماتسوي ريفريش
    const userInfo = {
      email,
      password,
    };
    axios
      .post(`http://localhost:5000/users/login`, userInfo)
      .then((response) => {
        console.log("DATA", response.data);
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
    </div>
  );
}
