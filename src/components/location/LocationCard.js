import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
    <div className="card">
      <div className="location-card">
        <p>Location: {this.props.location.name}</p>
      </div>
    </div>
    );
  }
}

export default LocationCard;