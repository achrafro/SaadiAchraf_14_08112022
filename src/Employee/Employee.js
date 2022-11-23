import React, { useRef } from "react";
import { useEffect, useState, useMemo } from "react";
import "./Employee.css";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import logo from "../img/logo.png";

function Employee() {
  const employeeData = useSelector((state) => state.EmployeeData);
  const searching = useRef(null);
  const [textfiltredchanged, settextfiltredchanged] = useState(false);
  const [filtredDataState, setfiltredDataState] = useState();

  //   })

  const columns = [
    {
      name: "FIRST NAME",
      selector: (row) => row.fname,
      sortable: true,
    },
    {
      name: "LAST NAME",
      selector: (row) => row.lname,
      sortable: true,
    },
    {
      name: "DATE OF BIRTH",
      selector: (row) => row.datebirth,
      sortable: true,
    },

    {
      name: "START DATE",
      selector: (row) => row.startdate,
      sortable: true,
    },
    {
      name: "STATE",
      selector: (row) => row.states,
      sortable: true,
    },
    {
      name: "ZIP CODE",
      selector: (row) => row.zipcode,
      sortable: true,
    },
    {
      name: "STREET",
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: "CITY",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "DEPARTMENT",
      selector: (row) => row.departement,
      sortable: true,
    },
  ];

  let data = [];
  employeeData.map((user, key) => {
    data = [...data, user];
  });
  let filtredData;

  const filtringData = () => {
    if (searching.current.value == "") {
      filtredData = data;
      settextfiltredchanged(false);
    } else {
      const arr = data;

      const found = data.filter((obj) => {
        return obj.fname.toLowerCase() == searching.current.value.toLowerCase();
      });

      setfiltredDataState(found);

      settextfiltredchanged(true);
    }
  };

  return (
    <div>
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

      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <div className="dataTables_length" id="employee-table_length">
          <label className="search">
            SEARCH:
            <input
              id="search"
              type="text"
              placeholder="Search by First Name"
              aria-label="Search Input"
              ref={searching}
              onChange={filtringData}
            />
          </label>
        </div>
        <div id="employee-table_filter" className="dataTables_filter"></div>
        {!textfiltredchanged && (
          <DataTable columns={columns} data={data} pagination />
        )}
        {textfiltredchanged && (
          <DataTable columns={columns} data={filtredDataState} pagination />
        )}
      </div>
    </div>
  );
}

export default Employee;
