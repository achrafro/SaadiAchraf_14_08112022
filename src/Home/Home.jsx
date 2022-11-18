import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import logo from "../img/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { AddEmployee } from "../Store/Actions.js";
import store from "../Store/Store";
import {verif,verifDate,VerifDropdown} from '../verification'
import {options,listofStates} from '../Home/DropdownOptions.js'

function Home() {
  const Dispatch = useDispatch();
  const state = useSelector((state) => state.EmployeeData);

  const [startDate, setStartDate] = useState("");
  const [newstartDate, setnewStartDate] = useState("");

  const [BirthDate, setBirthDate] = useState("");
  const [newBirthDate, setnewBirthDate] = useState("");

  const firsN = useRef(null);
  const LastN = useRef(null);
  const Street = useRef(null);
  const City = useRef(null);
  const states = useRef(null);
  const Department = useRef(null);
  const ZipCode = useRef(null);
  const DateB = useRef(null);
  const DateS = useRef(null);
  const Departmentlabel = useRef(null);
  const StateLabel = useRef(null);
  
  const defaultOption = options[0];
  //   handle date change of birth :
  const handleFormDateChangeOfbirth = (value) => {
    const newdateformat = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(value);
    setBirthDate(value);
    setnewBirthDate(newdateformat);
  };

  //    handleFormDateChangeOfdateStart
  const handleFormDateChangeOfdateStart = (value) => {
    const newdateformat = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(value);
    setStartDate(value);
    setnewStartDate(newdateformat);
  };

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
    console.log(states.current.state.selected.value);
    console.log(Department.current.state.selected.value);
    console.log(ZipCode.current.value);
    const EmployeeData = {
      fname: firsN.current.value,
      lname: LastN.current.value,
      datebirth: newBirthDate,
      startdate: newstartDate,
      street: Street.current.value,
      city: City.current.value,
      states: states.current.state.selected.value,
      departement: Department.current.state.selected.value,
      zipcode: ZipCode.current.value,
    };






verif(firsN,EmployeeData.fname,"First Name")
verif(LastN,EmployeeData.lname,"Last Name")
verif(City,EmployeeData.city,"City")
verif(Street,EmployeeData.street,"street")
verif(ZipCode,EmployeeData.zipcode,"Zip Code")
 
verifDate(DateB,newBirthDate)
verifDate(DateS,newstartDate)
VerifDropdown(EmployeeData.departement,Departmentlabel)
VerifDropdown(EmployeeData.states,StateLabel)

if (verif(firsN,EmployeeData.fname,"First Name") &&
verif(LastN,EmployeeData.lname,"Last Name") &&
verif(City,EmployeeData.city,"City") &&
verif(Street,EmployeeData.street,"street") &&
verif(ZipCode,EmployeeData.zipcode,"Zip Code") &&
verifDate(DateB,newBirthDate)&&verifDate(DateS,newstartDate) &&
VerifDropdown(EmployeeData.departement,Departmentlabel) &&
VerifDropdown(EmployeeData.states,StateLabel)
) {
  console.log("true");
  Dispatch({
    type: AddEmployee,
    payload: EmployeeData,
  });
}
else { 
  console.log("flaseeee");
}

   
   };

  return (
    <>
      <div className="navbar">
        <div className="title">
          <img src={logo} alt="logo" className="img_logo" />
          <h1>HRnet</h1>
        </div>
        <div className="options">
          <div className="addnew">
            <i className="fa-solid fa-plus"></i>
            <Link to="/" className="test">
              {" "}
              Add New Employee(e){" "}
            </Link>
          </div>
          <div className="viewlist">
            <i className="fa-solid fa-list-ul"></i>
            <Link to="/Employee/Employee" className="test">
              {" "}
              View Current Employees
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="formulaire">
          <h2>Create a New Employee</h2>
          <form action="#" id="create-employee">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              className="form__input"
              id="first-name"
              ref={firsN}
            />

            <label htmlFor="last-name">Last Name</label>
            <input
              className="form__input"
              type="text"
              id="last-name"
              ref={LastN}
            />

            <label htmlFor="date-of-birth" id="datetimepicker"  ref={DateB}>
              Date of Birth
            </label>
            <DatePicker
              selected={BirthDate}
              onChange={handleFormDateChangeOfbirth}
              className="form__input"
             
            />

            <label htmlFor="start-date"     ref={DateS}> Start Date </label>
            <DatePicker
              selected={startDate}
              onChange={handleFormDateChangeOfdateStart}
              className="form__input"

            />
            <label htmlFor="department" ref={Departmentlabel}>Department</label>

            <Dropdown
              options={options}
              ref={Department}
              placeholder="Select an option"
            />

            <fieldset className="address">
              <legend>Address</legend>

              <label htmlFor="street">Street</label>
              <input
                className="form__input"
                id="street"
                type="text"
                ref={Street}
              />

              <label htmlFor="city">City</label>
              <input className="form__input" id="city" type="text" ref={City} />

            
               
                 

              <label htmlFor="zip-code">Zip Code</label>
              <input
                className="form__input"
                id="zip-code"
                name="ZIP code"
                placeholder="Your ZIP code"
                type="number"
                ref={ZipCode}
              ></input>
                            <label htmlFor="state" ref={StateLabel}>State</label>

                <Dropdown
                options={listofStates}
                ref={states}
                placeholder="Select a state"
              />
            </fieldset>
          </form>

          <button className="buttonsave" onClick={HandleSubmit}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
