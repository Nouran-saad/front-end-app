import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import './login.css';
import axios from "axios";
import { useState } from "react";

function CreateAccount() {

	const history = useHistory();
  const [invalidUser, setInvalidUser] = useState(false);
  const [invalidPass, setInvalidPass] = useState(false);

	const routeChange = (e) =>{ 
    e.preventDefault();
    let request = {
      username: document.getElementById("user_input").value,
      password: document.getElementById("pass_input").value,
    };
    axios
      .post("http://localhost:4000/create", request)
      .then((resp) => {
        if (resp.data.message === "User added") {
          let path = "/";
          history.push(path);
        }
        if (resp.data.message === "Fill username") {
          setInvalidUser(true);
          setInvalidPass(false);
        }
        if (resp.data.message === "Fill password") {
          setInvalidUser(false);
          setInvalidPass(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={(e) => {
          routeChange(e);
        }} 
        style={{marginLeft:'480px'}}>
        <Card style={{borderRadius:'40px',backgroundColor:'#e0e0eb',marginTop:'30px', width:'50%', paddingRight:'100px', paddingLeft:'100px',paddingBottom:'50px',marginBottom:'20px'}}>
          <h2 style={{marginTop:'30px',marginBottom:'30px',textDecoration:'underline',marginLeft:'10px'}}>Register</h2>

          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
							style={{marginBottom:'10px'}}
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
							style={{marginBottom:'10px'}}
            />
          </div>

          <div className="form-group">
            <label>Phone number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Telephone number"
							style={{marginBottom:'10px'}}
            />
          </div>

          <div className="form-group">
            <label>Username</label>
            <input
              id="user_input"
              type="username"
              className="form-control"
              placeholder="Enter username"
							style={{marginBottom:'10px'}}
            />
            {invalidUser ? (
              <span style={{ color: "red" }}>Empty username</span>
            ):( <p></p>)}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
							style={{marginBottom:'10px'}}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              id="pass_input"
              type="password"
              className="form-control"
              placeholder="Enter password"
							style={{marginBottom:'10px'}}
            />
            {invalidPass ? (
              <span style={{ color: "red" }}>Invalid password</span>
            ):( <p></p>)}
          </div>
					<br></br>
          <button type="submit" class="btn btn-primary">
          Sign Up
        </button>
          <p className="forgot-password text-right">
            Already registered <a href="/">log in?</a>
          </p>
        </Card>
      </form>
    </div>
  );
}

export default CreateAccount;
