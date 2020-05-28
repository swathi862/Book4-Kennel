import React, { Component } from 'react';

class AnimalCard extends Component {
  render() {
    return (
        <div className="card">
        <div className = "animal-card">
        <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
        </picture>          
        <h3>Name: <span className="card-petname">{this.props.animal.name}</span></h3>
        <p>Breed: {this.props.animal.breed}</p>
        <p>Taken Care of by: {this.props.animal.employee.name}</p>
        </div>
        </div>
    );
  }
}

export default AnimalCard;