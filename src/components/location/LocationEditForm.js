import React, { Component } from "react"
import LocationManager from "../../modules/LocationManager"
import { Button } from 'semantic-ui-react'

class LocationEditForm extends Component {
    //set the initial state
    state = {
      locationName: "",
      address: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingLocation = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedLocation = {
        id: this.props.match.params.locationId,
        name: this.state.locationName,
        address: this.state.address,
        longitude: this.unchangedElements.longitude,
        latitude: this.unchangedElements.latitude,
        image: this.unchangedElements.image,
      };

      LocationManager.update(editedLocation)
      .then(() => this.props.history.push("/locations"))
    }

    unchangedElements ={}

    componentDidMount() {
      LocationManager.get(this.props.match.params.locationId)
      .then(location => {
          this.unchangedElements.image = location.image
          this.unchangedElements.latitude = location.latitude
          this.unchangedElements.longitude = location.longitude

          this.setState({
            locationName: location.name,
            address: location.address,
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
                id="locationName"
                value={this.state.locationName}
              />
              <label htmlFor="locationName">Location name</label>
            </div>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="address"
                value={this.state.address}
              />
              <label htmlFor="address">Address</label>
            </div>
            <div className="alignRight">
              <Button positive
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingLocation}
                className="btn btn-primary"
              >Submit</Button>
            </div>
          </fieldset>
        </form>
        </>
      )
    }
}

export default LocationEditForm