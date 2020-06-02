import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'

class AnimalCard extends Component {
  render() {
    return (
        <div className="card">
        <div className = "animal-card section-content">
        <picture>
            <img className="animal-image" src={require('./dog.svg')} alt="My Dog" />
        </picture>          
        <h3>Name: <span className="card-petname">{this.props.animal.name}</span></h3>
        <p>Breed: {this.props.animal.breed}</p>
        <Link to={`/animals/${this.props.animal.id}`}><Button secondary>Details</Button></Link>
        </div>
        </div>
    );
  }
}

export default AnimalCard;