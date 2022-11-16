import React from "react";
import { useffect } from "react";
import "./Employee.css";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";

function Employee() {
  const employeeData = useSelector((state) => state.EmployeeData);
  
console.log(employeeData);
 
 
 
 

//  employeeData.map((user,key)=>{

// console.log(user[key]);
 
 

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

      }
  ];

let data = [{
   
}


]
employeeData.map( (user,key)=>{
 data= [user,...data,] 

})

 


//    const data = 
 
//     [
      
//     {
    
//       fname: employeeData[0][0],
//       lname: employeeData[0][1],
//       datebirth: employeeData[0][2],
//       startdate: employeeData[0][3],
//       street: employeeData[0][4],
//       states: employeeData[0][6],
//       zipcode: employeeData[0][8],
//       city: employeeData[0][5],
//       departement: employeeData[0][7],

//     },
     
    
//   ]
 console.log(data);
 console.log(data);


  return (
    <div>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <div className="dataTables_length" id="employee-table_length">
          <label>
            Show{" "}
            <select
              name="employee-table_length"
              aria-controls="employee-table"
              className=""
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>{" "}
            entries
          </label>
        </div>
        <div id="employee-table_filter" className="dataTables_filter">
          <label>
            Search:
            <input
              type="search"
              className=""
              placeholder=""
              aria-controls="employee-table"
            />
          </label>
        </div>

        <div
          className="dataTables_info"
          id="employee-table_info"
          role="status"
          aria-live="polite"
        >
          Showing 0 to 0 of 0 entries
        </div>
        <DataTable  columns={columns} data={data} pagination  />

        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default Employee;
