import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import './login.css';

function CreateAccount() {

	const history = useHistory();

	const routeChange = () =>{ 
    let path = '/'; 
    history.push(path);
  }

  return (
    <div>
      <form style={{marginLeft:'480px'}}>
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
              type="username"
              className="form-control"
              placeholder="Enter username"
							style={{marginBottom:'10px'}}
            />
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
              type="password"
              className="form-control"
              placeholder="Enter password"
							style={{marginBottom:'10px'}}
            />
          </div>
					<br></br>
          <button type="submit" class="btn btn-primary" onClick={routeChange}>
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
