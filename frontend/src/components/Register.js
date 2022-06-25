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
        <input
          type="submit"
          value="Register"
          onClick={registerFunc}
          className="btn btn-dark"
        />
        
      </form>

          */}

      <form className="row m-2 needs-validation" >
        <div className="col-md-4">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="write email here ..."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="write password here ..."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required
          />
        </div>

        

        <div className="col-md-4">
          <label htmlFor="text" className="form-label">
            Username:
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="write username here ..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
              required />
          </div>
        </div>
        
        <div className="col-12">
          <input
            type="submit"
            value="Register"
            onClick={registerFunc}
            className="btn btn-primary"
          />
          <Link to="/Login" className="btn btn-link"> Have an account?</Link>
        </div>
      </form>
    </div>
  );
}
