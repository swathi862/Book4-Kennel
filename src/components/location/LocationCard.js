import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class LocationCard extends Component {
  render() {
    return (
    <div className="card">
      <div className="location-card section-content">
          <picture>
            <img className="location-image" src={this.props.location.image} alt="kennel location" />
          </picture><br />
        <p>Location: {this.props.location.name}</p>
        <Link to={`/locations/${this.props.location.id}`}><Button secondary>Details</Button></Link>
      </div>
    </div>
    );
  }
}

export default LocationCard;