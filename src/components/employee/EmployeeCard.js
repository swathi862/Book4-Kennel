import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class EmployeeCard extends Component {
  render() {
    return (
    <div className = "card">
      <div className="employee-card">
        <p>Employees: {this.props.employee.name}</p>
        {this.props.employee.animals.length === 0 && this.props.employee.active ? <Button primary type="button" onClick={()=> this.props.furloughEmployee(this.props.employee.id)}>Furlough</Button> : ""}
        {this.props.employee.animals.length === 0 ? <Button secondary type="button" onClick={()=> this.props.fireEmployee(this.props.employee.id)}>Fire</Button> : ""}

      </div>
    </div>
    );
  }
}

export default EmployeeCard;