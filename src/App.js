import React, { useState, useEffect } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem("employees");

    if (savedEmployees) {
      return JSON.parse(savedEmployees);
    }

    return [
      {
        id: 1,
        firstName: "Jacob",
        lastName: "Ovalle",
        email: "jacob@example.com",
        department: "IT Support",
        position: "Technical Support Specialist",
      },
      {
        id: 2,
        firstName: "Nancy",
        lastName: "Smith",
        email: "nancy@example.com",
        department: "Operations",
        position: "Office Coordinator",
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    const newEmployee = {
      ...employee,
      id: Date.now(),
    };

    setEmployees([...employees, newEmployee]);
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Employee Management System</h1>
        <p>Final Project React Application</p>
      </header>

      <main className="main-content">
        <section className="card">
          <h2>Add New Employee</h2>
          <EmployeeForm onAddEmployee={addEmployee} />
        </section>

        <section className="card">
          <h2>Employee Directory</h2>
          <EmployeeList
            employees={employees}
            onDeleteEmployee={deleteEmployee}
          />
        </section>
      </main>
    </div>
  );
}

export default App;