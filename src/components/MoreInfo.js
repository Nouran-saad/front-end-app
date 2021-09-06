import React from "react";
import MyNav from "./MyNav";
import { Card } from "react-bootstrap";
import logo from "./roundedtrain.png";
import logo1 from "./rounded2.png";
import logo2 from "./rounded3.png";

function MoreInfo() {
  return (
    <div>
      <MyNav />
      <h1 style={{marginTop:'60px',textDecoration:'underline'}}>All Trains</h1>
      <Card
        style={{
          backgroundColor: "#e0e0eb",
          marginTop: "30px",
          width: "50%",
          height: "250px",
          marginLeft: "350px",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        <div style={{ width: "33%" }}>
          <img
            src={logo}
            class="img-radius"
            alt="User-Profile"
            style={{ width: "160px", marginLeft: "50px" , marginTop: '50px'}}
          />
        </div>
        <div style={{ width: "33%", marginTop:'30px' }}>
          <p>Number:</p>
          <h6 style={{ color: "#3333ff" }}>302</h6>
          <p>Type:</p>
          <h6 style={{ color: "#3333ff" }}>Express</h6>
          <p>From:</p>
          <h6 style={{ color: "#3333ff" }}>Cairo</h6>
        </div>
        <div style={{ width: "33%", marginTop:'30px' }}>
          <p>Time:</p>
          <h6 style={{ color: "#3333ff" }}>3:00 PM</h6>
          <p>Price Range:</p>
          <h6 style={{ color: "#3333ff" }}>100-200</h6>
          <p>To:</p>
          <h6 style={{ color: "#3333ff" }}>Alexandria</h6>
        </div>
      </Card>
      <Card
        style={{
          backgroundColor: "#e0e0eb",
          marginTop: "50px",
          width: "50%",
          height: "250px",
          marginLeft: "350px",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        <div style={{ width: "33%" }}>
          <img
            src={logo1}
            class="img-radius"
            alt="User-Profile"
            style={{ width: "160px", marginLeft: "50px" , marginTop: '50px' }}
          />
        </div>
        <div style={{ width: "33%", marginTop:'30px' }}>
          <p>Number:</p>
          <h6 style={{ color: "#3333ff" }}>500</h6>
          <p>Type:</p>
          <h6 style={{ color: "#3333ff" }}>Express</h6>
          <p>From:</p>
          <h6 style={{ color: "#3333ff" }}>Cairo</h6>
        </div>
        <div style={{ width: "33%" , marginTop:'30px'}}>
          <p>Time:</p>
          <h6 style={{ color: "#3333ff" }}>9:00 PM</h6>
          <p>Price Range:</p>
          <h6 style={{ color: "#3333ff" }}>50-100</h6>
          <p>To:</p>
          <h6 style={{ color: "#3333ff" }}>Marsa-Matrouh</h6>
        </div>
      </Card>
      <Card
        style={{
          backgroundColor: "#e0e0eb",
          marginTop: "50px",
          width: "50%",
          height: "250px",
          marginLeft: "350px",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row"
        }}
      >
        <div style={{ width: "33%" }}>
          <img
            src={logo2}
            class="img-radius"
            alt="User-Profile"
            style={{ width: "160px",  marginLeft: "50px" , marginTop: '50px' }}
          />
        </div>
        <div style={{ width: "33%" , marginTop:'30px'}}>
          <p>Number:</p>
          <h6 style={{ color: "#3333ff" }}>222</h6>
          <p>Type:</p>
          <h6 style={{ color: "#3333ff" }}>Express</h6>
          <p>From:</p>
          <h6 style={{ color: "#3333ff" }}>Alexandria</h6>
        </div>
        <div style={{ width: "33%", marginTop:'30px' }}>
          <p>Time:</p>
          <h6 style={{ color: "#3333ff" }}>6:00 AM</h6>
          <p>Price Range:</p>
          <h6 style={{ color: "#3333ff" }}>150-250</h6>
          <p>To:</p>
          <h6 style={{ color: "#3333ff" }}>Cairo</h6>
        </div>
      </Card>
    </div>
  );
}

export default MoreInfo;
