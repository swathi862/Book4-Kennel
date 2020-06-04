import React, { Component } from "react"
import OwnerManager from "../../modules/OwnerManager"
import { Button } from 'semantic-ui-react'

class OwnerEditForm extends Component {
    //set the initial state
    state = {
      ownerName: "",
      address: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingOwner = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedOwner = {
        id: this.props.match.params.ownerId,
        name: this.state.ownerName,
        phone_number: this.state.phone,
      };

      OwnerManager.update(editedOwner)
      .then(() => this.props.history.push("/owners"))
    }

    componentDidMount() {
      OwnerManager.get(this.props.match.params.ownerId)
      .then(owner => {
          this.setState({
            ownerName: owner.name,
            phone: owner.phone_number,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="ownerName"
                value={this.state.ownerName}
              />
              <label htmlFor="ownerName">Owner name</label>
            </div>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="phone"
                value={this.state.phone}
              />
              <label htmlFor="phone">Phone Number</label>
            </div>
            <div className="alignRight">
              <Button positive
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingOwner}
                className="btn btn-primary"
              >Submit</Button>
            </div>
          </fieldset>
        </form>
        </>
      )
    }
}

export default OwnerEditForm