import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import ReactMapGL from 'react-map-gl';
// import { accessToken } from 'mapbox-gl';
import partyKey from '../../appKeys'
import { Button } from 'semantic-ui-react'

class LocationDetail extends Component {

  state = {
      name: "",
      address: "",
      image: "",
      loadingStatus: true,
      viewport: {
        width: 0,
        height: 0,
        latitude: 0,
        longitude: 0,
        zoom: 0
      }
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    LocationManager.delete(this.props.locationId)
    .then(() => this.props.history.push("/locations"))
}
  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(this.props.locationId)
    .then((location) => {
      this.setState({
        name: location.name,
        address: location.address,
        image: location.image,
        loadingStatus: false,
        viewport:{
            width: 400,
            height: 400,
            latitude: location.latitude,
            longitude: location.longitude,
            zoom: 16
        }
      });
      console.log(this.state.viewport.longitude)
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content section-content">
          <picture >
            <img className="location-image" src={this.state.image} alt="kennel location" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Address: {this.state.address}</p>
            <Button negative type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Remove</Button>
            <Button type="button" onClick={() => {this.props.history.push(`/locations/${this.props.locationId}/edit`)}}>Edit</Button>

        </div>
            <ReactMapGL
                {...this.state.viewport} mapboxApiAccessToken={partyKey}                  
                onViewportChange={(viewport) => this.setState({viewport})}
            />
        
      </div>
    );
  }
}

export default LocationDetail;