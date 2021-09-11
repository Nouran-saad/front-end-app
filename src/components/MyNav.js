import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo44 from './trainLogo.png'

const myNav=(props)=> {

  const {request,info}=props.user;

  return (
    <div>
      <Card style={{ color: "white", height: "34px" ,width:'100%'}}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  style={{
                    marginLeft: "17px",
                    fontSize: "25px",
                    fontFamily: "Trebuchet MS",
                    fontWeight: "bold",
                  }}
                  to={{
                    pathname: "/trains",
                    state: { request,info},
                  }}
                >
                  Trains
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    marginLeft: "10px",
                    fontSize: "25px",
                    fontFamily: "Trebuchet MS",
                    fontWeight: "bold",
                  }}
                  to={{
                    pathname: "/moreInfo",
                    state: {request,info},
                  }}
                >
                  More Info
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    marginLeft: "10px",
                    fontSize: "25px",
                    fontFamily: "Trebuchet MS",
                    fontWeight: "bold",
                  }}
                  to={{
                    pathname: "/profile",
                    state: {  request,info},
                  }}
                >
                  Profile
                </Link>
              </li>
              <img src= {logo44} alt= 'logoooo' style = {{height: '50 px', width:"50px",marginLeft:'960px'}}/>
              <li
                className="nav-item"
                style={{
                  marginLeft: "10px",
                  fontSize: "35px",
                  fontFamily: "Trebuchet MS",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Go Train
              </li>
              
            </ul>
          </div>
        </nav>
      </Card>
    </div>
  );
}

export default myNav;
