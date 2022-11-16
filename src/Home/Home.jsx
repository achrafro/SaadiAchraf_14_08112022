import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import logo from "../img/logo.png"
import {useSelector,useDispatch} from 'react-redux'
import {AddEmployee}
 from '../Store/Actions.js'
 import store from '../Store/Store'
  

function Home() {
  const Dispatch= useDispatch();
  const state = useSelector((state) => state.EmployeeData)
  console.log(state);

    const [startDate, setStartDate] = useState("");
    const [newstartDate, setnewStartDate] = useState("");

    const [BirthDate, setBirthDate] = useState("");
    const [newBirthDate, setnewBirthDate] = useState("");

  


    const firsN = useRef(null)
    const LastN = useRef(null)
    const Street = useRef(null);
    const City = useRef(null);
    const states = useRef(null)
    const Department = useRef(null)
    const ZipCode = useRef(null)


    // drop down 
    const options = [
        'Sales', 'Marketing', 'Engineering','Human Resources','Legal'
      ];
      const defaultOption = options[0];
    //   handle date change of birth : 
   const  handleFormDateChangeOfbirth =(value) =>{
    const newdateformat = 
    new Intl.DateTimeFormat
    ('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(value)
    setBirthDate(value)
    setnewBirthDate(newdateformat)
   }

//    handleFormDateChangeOfdateStart
const  handleFormDateChangeOfdateStart =(value) =>{
    const newdateformat =
     new Intl.DateTimeFormat
     ('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(value)
    setStartDate(value)
    setnewStartDate(newdateformat)
   }

// get information from form : 



    // function hundle submite : verif des donnés : 
 
    const HandleSubmit = (e) => {
 e.preventDefault();
 console.log(newBirthDate);
 console.log(newstartDate);

 console.log(Street.current.value);
 console.log(firsN.current.value);
 console.log(LastN.current.value);
 console.log(City.current.value);
 console.log(states.current.value);
 console.log(Department.current.state.selected.value    );
 console.log(ZipCode.current.value);
 const EmployeeData = {
 fname:firsN.current.value,
 lname:LastN.current.value,
 datebirth:newBirthDate,
 startdate:newstartDate,
 street:Street.current.value,
 city: City.current.value,
 states:states.current.value,
 departement:Department.current.state.selected.value ,
 zipcode:ZipCode.current.value

}
 Dispatch ({
  type : AddEmployee ,
  payload : EmployeeData
});
 console.log(store);





    }

  return (
     <>
    <div className="title">
    <img src={logo} alt="logo" className="img_logo" />
        <h1>HRnet</h1>
        
      </div>
      <div className="container">
        <Link to="/Employee/Employee"> View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" ref={firsN}  />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name"  ref={LastN} />

          <label htmlFor="date-of-birth" id="datetimepicker">
            Date of Birth
          </label>
          <DatePicker
            selected={BirthDate}
             onChange={handleFormDateChangeOfbirth}
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={handleFormDateChangeOfdateStart}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" ref={Street} />

            <label htmlFor="city">City</label>
            <input id="city" type="text" ref={City} />

            <label htmlFor="state">State</label>
            <select id="State" name="State" ref ={states}>
              <option value="AL" defaultValue="">
                Alabama
              </option>
              <option value="AK">Alaska</option>
              <option value="AS">American Samoa</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FM">Federated States Of Micronesia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="GU">Guam</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MH">Marshall Islands</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PW">Palau</option>
              <option value="PA">Pennsylvania</option>
              <option value="PR">Puerto Rico</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VI">Virgin Islands</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              name="ZIP code"
              placeholder="Your ZIP code"
              type="number"
              ref={ZipCode}
            ></input>
          </fieldset>

          <label htmlFor="department">Department</label>
       
          <Dropdown options={options} ref={Department}   placeholder="Select an option" />

         
        </form>

        <button onClick={HandleSubmit}>Save</button>
      </div>


        
    </>


   )
}

export default Home