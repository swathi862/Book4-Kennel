import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
    <div className="card">
      <div className="location-card">
        <p>Location: {this.props.location.name}</p>
        <button type="button" onClick={()=> this.props.closeLocation(this.props.location.id)}>Remove</button>
      </div>
    </div>
    );
  }
}

export default LocationCard;