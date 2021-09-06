import React from "react";
import "./ticket.css";
import logo from "./qrcode.png";

function Ticket() {
  const routeChange = () => {
    alert("Done");
  };

  return (
    <div
      class="page-content page-container"
      id="page-content"
      style={{ marginTop: "100px",marginLeft:'60px' }}
    >
      <div class="padding">
        <div class="row container d-flex justify-content-center">
          <div class="col-xl-6 col-md-12">
            <div class="card user-card-full">
              <div class="row m-l-0 m-r-0">
                <div class="col-sm-4 bg-c-lite-green user-profile">
                  <div class="card-block text-center text-white">
                    <div class="m-b-25">
                      {" "}
                      <img
                        src={logo}
                        class="img-radius"
                        alt="User-Profile-Image"
                        style={{ width: "160px" }}
                      />{" "}
                    </div>
                    <h6 class="f-w-600">Scan This QR Code</h6>
                  </div>
                </div>
                <div class="col-sm-8" style={{backgroundColor:'#e0e0eb'}}>
                  <div class="card-block">
                    <h6 class="m-b-20 p-b-5 b-b-default f-w-600">
                      Information
                    </h6>
                    <div class="row">
                      <div class="col-sm-6">
                        <p class="m-b-10 f-w-600">From</p>
                        <h6 class="text-muted f-w-400">Cairo</h6>
                      </div>
                      <div class="col-sm-6">
                        <p class="m-b-10 f-w-600">To</p>
                        <h6 class="text-muted f-w-400">Alexandria</h6>
                      </div>
                      <br />
                      <br />
                      <br />

                      <div class="col-sm-6">
                        <p class="m-b-10 f-w-600">Date</p>
                        <h6 class="text-muted f-w-400">25/05/2021</h6>
                      </div>
                      <div class="col-sm-6">
                        <p class="m-b-10 f-w-600">Time</p>
                        <h6 class="text-muted f-w-400">22:00</h6>
                      </div>
                      <br />
                      <br />
                      <br />
                      <div class="col-sm-6">
                        <p class="m-b-10 f-w-600">Train Number</p>
                        <h6 class="text-muted f-w-400">903</h6>
                      </div>
                      <div class="col-sm-6">
                        <p class="m-b-10 f-w-600">Seat Number</p>
                        <h6 class="text-muted f-w-400">55</h6>
                      </div>
                      <br />
                      <br />
                      <br />
                      <button
                        type="submit"
                        class="btn btn-primary"
                        onClick={routeChange}
                        style={{
                          marginTop: "30px",
                          marginLeft: "120px",
                          width: "120px",
                        }}
                      >
                        Print{" "}
                      </button>
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
