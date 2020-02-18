import React from "react";
import Employee from "./Employee"


const EmployeeList = props => {
    
    return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      
        <Employee result = {props.results} /> 
    
    </table>
    
    )
}

export default EmployeeList