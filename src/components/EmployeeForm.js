import React from "react";
import "../EmployeeForm.css";

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      title: "",
      department: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const employee = {
      employeeId: Date.now(),
      name: this.state.name,
      email: this.state.email,
      title: this.state.title,
      department: this.state.department,
    };

    if (this.props.onSubmit) {
      this.props.onSubmit(employee);
    }

    this.setState({
      name: "",
      email: "",
      title: "",
      department: "",
    });
  };

  render() {
    return (
      <div className="employee-form-container">
        <h2 className="employee-form-title">New Employee Form</h2>

        <form className="employee-form" onSubmit={this.handleSubmit}>
          <label className="employee-form-label" htmlFor="name">
            Name
          </label>
          <input
            className="employee-form-input"
            id="name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Enter employee name"
            required
          />

          <label className="employee-form-label" htmlFor="email">
            Email
          </label>
          <input
            className="employee-form-input"
            id="email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Enter employee email"
            required
          />

          <label className="employee-form-label" htmlFor="title">
            Job Title
          </label>
          <input
            className="employee-form-input"
            id="title"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Enter job title"
            required
          />

          <label className="employee-form-label" htmlFor="department">
            Department
          </label>
          <input
            className="employee-form-input"
            id="department"
            type="text"
            name="department"
            value={this.state.department}
            onChange={this.handleChange}
            placeholder="Enter department"
            required
          />

          <button className="employee-form-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeeForm;