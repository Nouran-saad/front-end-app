import React from "react";
import { Table } from "react-bootstrap";
import "./profile.css";
import logo from "./qr.png";
import { Card } from "react-bootstrap";

function Profile() {
  return (
    <div>
      <div>
            <Card id="aaa" style={{ color: "white", height: "55px" }}>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/trains" style={{ fontSize:'25px',fontFamily:'Trebuchet MS',fontWeight:'bold'}}>
                  Trains
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/moreInfo" style={{marginLeft:'10px', fontSize:'25px',fontFamily:'Trebuchet MS',fontWeight:'bold'}}>
                  More Info
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="/profile" style={{marginLeft:'10px', fontSize:'25px',fontFamily:'Trebuchet MS',fontWeight:'bold'}}>
                  Profile
                </a>
              </li>
              <li class="nav-item" style={{marginLeft:'1030px', fontSize:'35px',fontFamily:'Trebuchet MS',fontWeight:'bold',color:'black'}}>
                Go Train
              </li>

            </ul>
          </div>
        </nav>
      </Card>
        </div>
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <div class="container emp-profile" style={{borderRadius:'40px',width: '800px',backgroundColor:'#e0e0eb'}}>
        <form method="post" style={{textAlign:'center', marginLeft:'70px'}}>
          <h1 style={{marginBottom:'30px', textDecoration:'underline',marginRight:'55px'}}>Your Profile</h1>
          <div class="row">
            <div class="col-md-4" style={{marginRight: '70px'}}  >
              
                <img src={logo} alt="nouran" />
              </div>
              
              <div class="col-md-4" >
              <Table striped bordered hover variant="light" style={{marginTop:'30px'}} >
                  
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
                      <label style={{marginTop:'15px',marginRight:'80px',marginLeft:'50px'}}>User Name</label>
                    </div>
                    <div class="col-md-6"  style={{marginTop:'15px',maxWidth:'1 0%',flex:'60%'}}>
                      <p style={{marginLeft:'100px'}}>saad</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label style={{marginRight:'69px',}}>Email</label>
                    </div>
                    <div class="col-md-6" >
                      <p style={{marginRight:'180px',marginLeft:'100px'}}>saad@gmail.com</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label style={{marginRight:'80px',marginLeft:'48px'}}>Phone No.</label>
                    </div>
                    <div class="col-md-6">
                      <p style={{marginRight:'180px',marginLeft:'120px'}}>0122948585</p>
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
