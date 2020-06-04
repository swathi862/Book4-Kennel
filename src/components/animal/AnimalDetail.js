import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css'
import { Button } from 'semantic-ui-react'

class AnimalDetail extends Component {
 existingAnimalId = () => this.state.name !== undefined

  state = {
      name: "",
      breed: "",
      employee: "",
      loadingStatus: true,
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    AnimalManager.delete(this.props.animalId)
    .then(() => this.props.history.push("/animals"))
   }

  componentDidMount(){
    console.log("AnimalDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(this.props.animalId)
    .then((animal) => {
      this.setState({
        name: animal.name,
        breed: animal.breed,
        employee: animal.employee,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
    this.existingAnimalId() ?
      <div className="card">
        <div className="card-content section-content">
          <picture>
            <img className="animal-image" src={require('./dog.svg')} alt="My Dog" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Breed: {this.state.breed}</p>
            <p>Taken Care of by: {this.state.employee.name}</p>
            <Button primary type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</Button>
            <Button type="button" onClick={() => {this.props.history.push(`/animals/${this.props.animalId}/edit`)}}>Edit</Button>
        </div>
      </div>
      : <h1>       This animal currently doesn't reside at our kennel!</h1> 
    );
  }
}

export default AnimalDetail;