import React, { Component } from 'react'
//import the components we will need
import ResourceCard from '../reusables/ResourceCard'
import AnimalManager from '../../modules/AnimalManager'
import { Button } from 'semantic-ui-react'

    class AnimalList extends Component {
        //define what this component needs to render
        state = {
            animals: [],
        }
  // deleteAnimal = id => {
  //   AnimalManager.delete(id)
  //     .then(() => {
  //     AnimalManager.getAll()
  //       .then((newAnimals) => {
  //         this.setState({
  //           animals: newAnimals
  //         })
  //       })
  //     })
  // }

    componentDidMount(){
        console.log("ANIMAL LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        AnimalManager.getAll()
        .then((animals) => {
            this.setState({
                animals: animals
            })
        })
    }

    render(){
        console.log("AnimalList: Render");
      
        return(
          <>
          <br />
          <section className="section-content">
            <Button positive type="button"
                className="btn"
                onClick={() => {this.props.history.push("/animals/new")}}>
                Admit Animal
            </Button>
          </section>
          <div className="container-cards">
            {this.state.animals.map(animal =>
              <ResourceCard key={animal.id} resource={animal} resourceName="animals"/> 
              // dischargeAnimal={this.deleteAnimal}/>
            )}
          </div>
          </>
        )
      }
}

export default AnimalList