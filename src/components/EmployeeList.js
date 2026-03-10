import React from "react";

function EmployeeList({ employees }) {
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.EmployeeId}>
            {employee.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;