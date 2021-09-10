import React from "react";
import "./payment.css";
import { useHistory } from "react-router-dom";
import {useLocation} from "react-router-dom";


function Payment() {

    
const history = useHistory();

const {state} = useLocation();
const { request,info } = state;
console.log(request);
console.log(info);


const routeChange = () =>{ 
let path = '/ticket'; 
history.push(path,{request,info});
}
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-11">
          <div className="card card0 rounded-0">
            <div className="row"  >
              <div className="col-md-5 d-md-block d-none p-0 box">
                <div className="card rounded-0 border-0 card1" id="bill">
                  <h3 id="heading1">Payment Summary</h3>

                  <div className="row">
                    <div className="col-lg-7 col-8 mt-4 line pl-4">
                      <h2 className="bill-head">Trip 1</h2>{" "}
                      <small className="bill-date">2017 Feb 10 at 10:30 PM</small>
                    </div>
                    <div className="col-lg-5 col-4 mt-4">
                      <h2 className="bill-head px-xl-5 px-lg-4"> Alex to Cairo</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-7 col-8 mt-4 line pl-4">
                      <h2 className="bill-head">Trip 2</h2>{" "}
                      <small className="bill-date">2017 Feb 25 at 11:30 PM</small>
                    </div>
                    <div className="col-lg-5 col-4 mt-4">
                      <h2 className="bill-head px-xl-5 px-lg-4">Cairo to Alex</h2>
                    </div>
                  </div>
                  <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                  <div className="row" >
                    <div className="col-md-12 red-bg"  >
                      <p className="bill-date" id="total-label" >
                        Total Price
                      </p>
                      <h2 className="bill-head" id="total">
                          523.65 EGP
                      </h2>{" "}
                      <small className="bill-date" id="total-label">
                        Price includes all taxes
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-sm-12 p-0 box" >
                <div className="card rounded-0 border-0 card2" id="paypage" style={{backgroundColor:'#e0e0eb'}}>
                  <div className="form-card">
                    <h2 id="heading2" className="text-danger">
                      Payment Method
                    </h2>
                    <div className="radio-group">
                      <div className="radio" data-value="credit">
                        <img
                          src="https://i.imgur.com/28akQFX.jpg"
                          width="200px"
                          height="60px"
                          alt="visa"
                        />
                      </div>
                      <div className="radio" data-value="paypal">
                        <img
                          src="https://i.imgur.com/5QFsx7K.jpg"
                          width="200px"
                          height="60px"
                          alt="paypal"
                        />
                      </div>{" "}
                      <br />
                    </div>{" "}
                    <label className="pay">Name on Card</label>{" "}
                    <input
                      type="text"
                      name="holdername"
                      placeholder="Nouran saad"
                    />
                    <div className="row">
                      <div className="col-8 col-md-6">
                        {" "}
                        <label className="pay">Card Number</label>{" "}
                        <input
                          type="text"
                          name="cardno"
                          id="cr_no"
                          placeholder="0000-0000-0000-0000"
                          minLength="19"
                          maxLength="19"
                        />{" "}
                      </div>
                      <div className="col-4 col-md-6">
                        {" "}
                        <label className="pay">CVV</label>{" "}
                        <input
                          type="password"
                          name="cvcpwd"
                          placeholder="&#9679;&#9679;&#9679;"
                          className="placeicon"
                          minLength="3"
                          maxLength="3"
                        />{" "}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        {" "}
                        <label className="pay">Expiration Date</label>{" "}
                      </div>
                      <div className="col-md-12">
                        {" "}
                        <input
                          type="text"
                          name="exp"
                          id="exp"
                          placeholder="MM/YY"
                          minLength="5"
                          maxLength="5"
                        />{" "}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        {" "}
                        <input
                          style={{marginLeft:'200px'}}
                          type="submit"
                          value="MAKE A PAYMENT &nbsp; &#xf178;"
                          className="btn btn-info placeicon"
                          onClick={routeChange}
                        />{" "}
                      </div>
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

export default Payment;
