import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import { Button } from 'semantic-ui-react'

class EmployeeDetail extends Component {

    state = {
        employeeName: "",
        loadingStatus: true,
        animals: [],
        active: ""
    };

  handleDelete = () => {
    //invoke the delete function in OwnerManger and re-direct to the Owner list.
    this.setState({loadingStatus: true})
    EmployeeManager.delete(this.props.employeeId)
    .then(() => this.props.history.push("/employees"))
   }

  handlePatch = () => {
    this.setState({loadingStatus: true})
    EmployeeManager.patch(this.props.employeeId)
    .then(() => this.props.history.push("/employees"))
  }

  componentDidMount(){
    console.log("EmployeeDetail: ComponentDidMount");
    //get(id) from OwnerManager and hang on to the data; put it into state
    EmployeeManager.get(this.props.employeeId)
    .then((employee) => {
      this.setState({
        employeeName: employee.name,
        animals: employee.animals,
        active: employee.active,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content section-content">
          <picture>
            <img className="anon-image" src={'https://www.booksie.com/files/profiles/22/mr-anonymous.png'} alt="Profile Pic" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.employeeName}</span></h3>
            {this.state.animals.length === 0 && this.state.active ? <Button primary type="button" disabled={this.state.loadingStatus} onClick={this.handlePatch}>Furlough</Button> : ""}
            {this.state.animals.length === 0 ? <Button negative type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Fire</Button> : ""}
        </div>
      </div>
    );
  }
}

export default EmployeeDetail;