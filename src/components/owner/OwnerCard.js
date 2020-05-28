import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
    <div className="card">
      <div className="owner-card">
        <p>Owner: {this.props.owner.name}</p>
        <p>Phone Number: {this.props.owner.phone_number}</p>
      </div>
    </div>
    );
  }
}

export default OwnerCard;