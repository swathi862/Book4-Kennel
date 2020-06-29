import React, { Component } from 'react'
//import the components we will need
import ResourceCard from '../reusables/ResourceCard'
import EmployeeManager from '../../modules/EmployeeManager'
import { Button } from 'semantic-ui-react'

    class EmployeeList extends Component {
        //define what this component needs to render
        state = {
            employees: [],
        }
    // deleteEmployee = id => {
    //   EmployeeManager.delete(id)
    //   .then(()=>{
    //     EmployeeManager.getAll()
    //     .then((newEmployees) => {
    //       this.setState({
    //         employees: newEmployees
    //       })
    //     })
    //   })
    // }

    // patchEmployee = id => {
    //   EmployeeManager.patch(id)
    //   .then(()=>{
    //     EmployeeManager.getAll()
    //     .then((newEmployees) => {
    //       this.setState({
    //         employees: newEmployees
    //       })
    //     })
    //   })
    // }

    componentDidMount(){
        console.log("EMPLOYEE LIST: ComponentDidMount");
        //getAll from EmployeeManager and hang on to that data; put it in state
        EmployeeManager.getAll()
        .then((employees) => {
            this.setState({
                employees: employees
            })
        })
    }

    render(){
        console.log("EmployeeList: Render");
      
        return(
          <>
          <br />
          <section className="section-content">
            <Button positive type="button"
                className="btn"
                onClick={() => {this.props.history.push("/employees/new")}}>
                Hire Employee
            </Button>
          </section>
          <div className="container-cards">
            {this.state.employees.map(employee =>
              <ResourceCard key={employee.id} resource={employee} resourceName="employees"/>
              // fireEmployee={this.deleteEmployee} furloughEmployee={this.patchEmployee} 
            )}
          </div>
          </>
        )
      }
}

export default EmployeeList