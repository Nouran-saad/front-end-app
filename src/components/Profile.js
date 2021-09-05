import React from "react";
import { Navbar, Table } from "react-bootstrap";
import MyNav from "./MyNav";
import "./profile.css";
import logo from "./qr.png";

function Profile() {
  return (
    <div>
      <MyNav />
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

      <div class="container emp-profile">
        <form method="post">
          <div class="row">
            <div class="col-md-4"  >
              
                <img src={logo} alt="nouran" />
              </div>
              
              <div class="col-md-4" >
              <Table striped bordered hover variant="dark"  >
                  
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Train Number</th>
                    <th>Date</th>
                    <th>Ticket Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>12579</td>
                    <td>11/20/2020</td>
                    <td>Paid</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>87581</td>
                    <td>4/9/2021</td>
                    <td>Paid</td>
                  </tr>
                </tbody>
              </Table>
              <div/>
              <div/>
            </div>
            <div class="profile-head">
              <p class="proile-rating">
                RANKINGS : <span>8/10</span>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8">
              <div class="tab-content profile-tab" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <label>User Name</label>
                    </div>
                    <div class="col-md-6">
                      <p>saad</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Email</label>
                    </div>
                    <div class="col-md-6">
                      <p>saad@gmail.com</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Phone Number</label>
                    </div>
                    <div class="col-md-6">
                      <p>0122948585</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
