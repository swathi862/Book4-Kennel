import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class OwnerCard extends Component {
  render() {
    return (
    <div className="card">
      <div className="owner-card section-content">
        <p>Owner: {this.props.owner.name}</p>
        <Link to={`/owners/${this.props.owner.id}`}><Button secondary>Details</Button></Link>
      </div>
    </div>
    );
  }
}

export default OwnerCard;