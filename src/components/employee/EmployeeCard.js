import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
    <div className = "card">
      <div className="employee-card">
        <p>Employees: {this.props.employee.name}</p>
        {this.props.employee.animals.length === 0 ? <button type="button" onClick={()=> this.props.fireEmployee(this.props.employee.id)}>Remove</button> : ""}
      </div>
    </div>
    );
  }
}

export default EmployeeCard;