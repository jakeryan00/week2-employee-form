import React, { useEffect, useState } from "react";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  const [employees, setEmployees] = useState(() => {
    try {
      const saved = localStorage.getItem("employees");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees((prev) => [...prev, employee]);
  };

  return (
    <div style={{ padding: "24px" }}>
      <EmployeeForm onSubmit={addEmployee} />

      <h2>Employee Data in Local Storage</h2>

      {employees.length === 0 ? (
        <p>No employees saved yet.</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>EmployeeId</th>
              <th>Name</th>
              <th>Email</th>
              <th>Title</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e) => (
              <tr key={e.employeeId}>
                <td>{e.employeeId}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.title}</td>
                <td>{e.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;