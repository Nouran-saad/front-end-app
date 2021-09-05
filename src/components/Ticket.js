import React from 'react'
import './ticket.css'
import logo from './barcode.png'

function Ticket() {
    return (
        <section class="container">
        <h1>Tickets</h1>
          
          <div class="row">
            <article class="card fl-left">
              <section class="date">
								<img src={logo} alt="nouran" style={{width:'100px', height:'150px',flexDirection: 'row', marginTop:'4	0px'}}/>
              </section>
              <section class="card-cont">
                <h2 style={{marginLeft:'90px'}}>Ticket Info</h2>
                <h3 style={{marginLeft:'90px'}}>From : Cairo        To : Alexandria</h3>
                <div class="even-date">
                  <i class="fa fa-calendar"></i>
                  <time >
                    <span style={{marginLeft:'120px'}}>Date: 28 december 2014</span>
                    <span style={{marginLeft:'120px'}}>Time: 08:55pm </span>
                  </time>
                </div>
                <div class="even-info">
                  <i class="fa fa-map-marker"></i>
                  <h3 style={{marginLeft:'120px'}}> Train Number: 901</h3>
									<h3 style={{marginLeft:'120px'}}> Seat Number: 55</h3>
                </div>
                <a href="#">Print</a>
              </section>
            </article>
            <article class="card fl-left">
              <section class="date">
							<img src={logo} alt="nouran" style={{width:'100px', height:'150px',flexDirection: 'row', marginTop:'4	0px'}}/>
              </section>
              <section class="card-cont">
							<h2 style={{marginLeft:'90px'}}>Ticket Info</h2>
                <h3 style={{marginLeft:'90px', textDecoration:'none'}}>From : Cairo        To : Alexandria</h3>
                <div class="even-date">
                  <i class="fa fa-calendar"></i>
                  <time>
									<span style={{marginLeft:'120px'}}>Date: 28 december 2014</span>
                  <span style={{marginLeft:'120px'}}>Time: 08:55pm </span>
                  </time>
                </div>
                <div class="even-info">
                  <i class="fa fa-map-marker"></i>
                  <h3 style={{marginLeft:'120px' ,textDecoration:'none'}}> Train Number: 901</h3>
									<h3 style={{marginLeft:'120px',textDecoration:'none'}}> Seat Number: 55</h3>
                </div>
                <a href="#">Print</a>
              </section>
            </article>
          </div>
  
          </section>
    )
}

export default Ticket