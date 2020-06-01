import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LocationCard extends Component {
  render() {
    return (
    <div className="card">
      <div className="location-card">
          <picture>
            <img src={this.props.location.image} alt="kennel location" />
          </picture><br />
        <p>Location: {this.props.location.name}</p>
        <button type="button" onClick={()=> this.props.closeLocation(this.props.location.id)}>Remove</button>
        <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
      </div>
    </div>
    );
  }
}

export default LocationCard;