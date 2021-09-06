import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import './login.css';

function Login() {

	const history = useHistory();

	const routeChange = () =>{ 
    let path = '/trains'; 
    history.push(path);
  }

  return (
    <div style={{marginTop:'0px', padding:'0px'}}>
      <form style={{marginLeft:'480px'}}>
      <Card style={{borderRadius:'40px',backgroundColor:'#e0e0eb',marginTop:'80px', width:'50%', paddingRight:'100px', paddingLeft:'100px',paddingBottom:'100px'}}>
        <h2 style={{marginTop:'30px',marginBottom:'30px',textDecoration:'underline'}}>Log in</h2>

        <div className="form-group">
          <label>Username</label>
          <input
            type="username"
            className="form-control"
            placeholder="Enter username"
						style={{marginBottom:'15px'}}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
						style={{marginBottom:'15px'}}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
							style={{marginBottom:'30px'}}
            />
            <label className="custom-control-label" htmlFor="customCheck1" style={{marginBottom:'20px'}}>
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary" onClick={routeChange}>
          Sign in
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
				<br></br>
				<p>New to this website? <a href="/create">Sign Up</a> now</p>
      </Card>
    </form>

    </div>
    
  );
}

export default Login;
