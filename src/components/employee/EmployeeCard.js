import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class EmployeeCard extends Component {
  render() {
    return (
    <div className = "card">
      <div className="employee-card section-content">
        <p>Employee: {this.props.employee.name}</p>

        <Link to={`/employees/${this.props.employee.id}`}><Button secondary>Details</Button></Link>

      </div>
    </div>
    );
  }
}

export default EmployeeCard;