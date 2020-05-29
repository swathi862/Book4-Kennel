import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
    <div className="card">
      <div className="owner-card">
        <p>Owner: {this.props.owner.name}</p>
        <p>Phone Number: {this.props.owner.phone_number}</p>
        <button type="button" onClick={()=> this.props.removeOwner(this.props.owner.id)}>Remove</button>
      </div>
    </div>
    );
  }
}

export default OwnerCard;