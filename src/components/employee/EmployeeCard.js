import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
    <div className = "card">
      <div className="employee-card">
        <p>Employees: {this.props.employee.name}</p>
      </div>
    </div>
    );
  }
}

export default EmployeeCard;