import React from "react";
import "./ticket.css";
import logo from "./qrcode.png";
import { useLocation } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useHistory } from "react-router-dom";

function Ticket() {

  const { state } = useLocation();
  const { request,info } = state;
  console.log(request,info);
  const history = useHistory();


  const routeChange = () => {

    let path = "/trains";
    history.push(path,{request,info});
  };

  return (
    <div
      className="page-content page-container"
      id="page-content"
      style={{ marginTop: "100px", marginLeft: "60px" }}
    >
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-xl-6 col-md-12">
            <div
              className="card user-card-full"
              style={{ borderRadius: "40px" }}
            >
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-4 bg-c-lite-green user-profile">
                  <div className="card-block text-center text-white">
                    <div className="m-b-25">
                      {" "}
                      <img
                        src={logo}
                        className="radius"
                        alt="User-Profile"
                        style={{ width: "160px" }}
                      />{" "}
                    </div>
                    <h6 className="f-w-600">Scan This QR Code</h6>
                  </div>
                </div>
                <div
                  className="col-sm-8"
                  style={{ backgroundColor: "#e0e0eb" }}
                >
                  <div className="card-block">
                    <h2
                      className="m-b-20 p-b-5 b-b-default f-w-600"
                      style={{ textDecoration: "underline" }}
                    >
                      Ticket Information
                    </h2>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">From</p>
                        <h6 className="text-muted f-w-400">Cairo</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">To</p>
                        <h6 className="text-muted f-w-400">Alexandria</h6>
                      </div>
                      <br />
                      <br />
                      <br />

                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Date</p>
                        <h6 className="text-muted f-w-400">25/05/2021</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Time</p>
                        <h6 className="text-muted f-w-400">22:00</h6>
                      </div>
                      <br />
                      <br />
                      <br />
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Train Number</p>
                        <h6 className="text-muted f-w-400">903</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Seat Number</p>
                        <h6 className="text-muted f-w-400">55</h6>
                      </div>
                      <br />
                      <br />
                      <br />
                      <Popup
                        contentStyle={{ height: "300px", width: "300px" }}
                        trigger={
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={routeChange}
                            style={{
                              marginTop: "30px",
                              marginLeft: "100px",
                              width: "150px",
                            }}
                          >
                            Print ticket{" "}
                          </button>
                        }
                        position="right center"
                      >
                        <div
                          style={{
                            textAlign: "center",
                            color: "orange",
                            fontWeight: "bold",
                            marginTop: "80px",
                          }}
                        >
                          {" "}
                          <p>Your trip has been successfully booked</p> <p style={{fontSize:'20px'}}>Thanks for choosing us!</p>
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={routeChange}
                            style={{
                              backgroundColor: "orange",
                              marginTop: "60px",
                              marginLeft: "20px",
                              width: "200px",
                            }}
                          >
                            Go to trains page{" "}
                          </button>{" "}
                        </div>
                      </Popup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
