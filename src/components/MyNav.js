import React from 'react'
import { Card } from "react-bootstrap";

function myNav() {
    return (
        <div>
            <Card style={{ color: "white", height: "34px" }}>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/trains" style={{marginLeft:'17px', fontSize:'25px',fontFamily:'Trebuchet MS',fontWeight:'bold'}}>
                  Trains
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/moreInfo" style={{marginLeft:'10px', fontSize:'25px',fontFamily:'Trebuchet MS',fontWeight:'bold'}}>
                  More Info
                </a>
              </li>
              <li class="nav-item">
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
    )
}

export default myNav
