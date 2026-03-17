import React from "react";

function EmployeeList({ employees, onDeleteEmployee }) {
  if (employees.length === 0) {
    return <p className="empty-message">No employees added yet.</p>;
  }

  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <div className="employee-card" key={employee.id}>
          <h3>
            {employee.firstName} {employee.lastName}
          </h3>

          <p>
            <strong>Email:</strong> {employee.email}
          </p>

          <p>
            <strong>Department:</strong> {employee.department}
          </p>

          <p>
            <strong>Position:</strong> {employee.position}
          </p>

          <button
            className="delete-btn"
            onClick={() => onDeleteEmployee(employee.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;