import React from "react";
import { Card,DropdownButton,Dropdown } from "react-bootstrap";
import './trains.css'
import DatePicker from "react-datepicker";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import MyNav from "./MyNav";

function Trains() {

  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());

  const history = useHistory();

  const routeChange = () =>{ 
    let path = '/payment'; 
    history.push(path);
  }

  return (
    <div>
      <MyNav/>

      <div style={{opacity:'0.8',padding:'50px',height: '660px',textAlign:'left',backgroundSize: 'cover',backgroundImage:'url("https://images.pexels.com/photos/159148/regional-train-rail-cars-platform-deutsche-bahn-159148.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")',backgroundRepeat: 'no-repeat'}}>

        <Card class="card-product" style={{backgroundColor: "#e0e0eb", opacity:1 ,marginLeft:'50px',marginBottom:'30px', marginTop:'10px', width:'500px', paddingRight:'50px', paddingLeft:'80px',paddingBottom:'20px'}}>
          <h1 style={{textAlign:'center', marginTop: '10px',marginBottom: '20px'}}>Book Now!</h1>
          <div style={{display:'flex', flexWrap:'wrap'}}>
            <input type="radio" value="Male" name="gender" /> One Way Ticket
            <input type="radio" value="Female" name="gender" style={{marginLeft:'40px' , marginBottom:'40px'}} /> Going and coming back
          </div>
          
          <div style={{display:'flex', flexWrap:'wrap'}}>
            <label style={{marginLeft:'30px',marginRight:'40px', marginBottom:'50px'}}>Travel From</label>
            <DropdownButton id="dropdown-basic-button" title="Travel from" style={{textAlign:'center'}}>
              <Dropdown.Item href="#/action-1">Cairo</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Alexandria</Dropdown.Item>
            </DropdownButton>
            <label style={{marginLeft:'33px', marginBottom:'50px'}}>Arriving to</label>
            <DropdownButton id="dropdown-basic-button" title="Arriving to" style={{textAlign:'center' , marginLeft:'45px'}}>
              <Dropdown.Item href="#/action-1">Cairo</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Alexandria</Dropdown.Item>
            </DropdownButton>

          </div>
          <div style={{display:'flex', flexWrap:'wrap',flexDirection:'row', marginLeft:'60px'}}>
            <label style={{marginRight:'20px' }}>Choose the date and time</label>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect  dateFormat="Pp" />
            <label style={{marginRight:'20px'}}>Return date</label>
            <DatePicker selected={startDate2} onChange={(date2) => setStartDate2(date2)} showTimeSelect  dateFormat="Pp" />
          </div>

          <label style={{marginTop:'20px',marginRight:'10px'}}>Number of passegers</label>
          <input
            type="Number"
            placeholder="Enter number"
						style={{marginBottom:'10px'}}
          />
          <button type="submit" class="btn btn-primary" onClick={routeChange} style={{marginTop:'30px',marginLeft:'120px', width:'120px'}}>
          Sign in
        </button>

        </Card>


      </div>
    </div>
  );
}

export default Trains;
