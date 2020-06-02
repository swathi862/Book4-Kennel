import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager'
import { Button } from 'semantic-ui-react'

    class LocationList extends Component {
        //define what this component needs to render
        state = {
            locations: [],
        }
    // deleteLocation = id => {
    //   LocationManager.delete(id)
    //   .then(() => {
    //     LocationManager.getAll()
    //       .then((newLocations) => {
    //         this.setState({
    //           locations: newLocations
    //         })
    //       })
    //     })
    // }

    componentDidMount(){
        console.log("LOCATION LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        LocationManager.getAll()
        .then((locations) => {
            this.setState({
                locations: locations
            })
        })
    }

    render(){
        console.log("LocationList: Render");
      
        return(
          <>
          <br />
          <section className="section-content">
            <Button positive type="button"
                className="btn"
                onClick={() => {this.props.history.push("/locations/new")}}>
                Add New Location
            </Button>
          </section>
          <div className="container-cards">
            {this.state.locations.map(location =>
              <LocationCard key={location.id} location={location} />
              // closeLocation={this.deleteLocation}/>
            )}
          </div>
          </>
        )
      }
}

export default LocationList