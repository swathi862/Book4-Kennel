import React, { Component } from 'react'
//import the components we will need
import OwnerCard from './OwnerCard'
import OwnerManager from '../../modules/OwnerManager'
import { Button } from 'semantic-ui-react'

    class OwnerList extends Component {
        //define what this component needs to render
        state = {
            owners: [],
        }
    // deleteOwner = id => {
    //   OwnerManager.delete(id)
    //     .then(() => {
    //     OwnerManager.getAll()
    //       .then((newOwners) => {
    //         this.setState({
    //           owners: newOwners
    //         })
    //       })
    //     })
    // }

    componentDidMount(){
        console.log("OWNER LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        OwnerManager.getAll()
        .then((owners) => {
            this.setState({
                owners: owners
            })
        })
    }

    render(){
        console.log("OwnerList: Render");
      
        return(
          <>
          <br />
          <section className="section-content">
            <Button positive type="button"
                className="btn"
                onClick={() => {this.props.history.push("/owners/new")}}>
                Add Owner
            </Button>
          </section>
          <div className="container-cards">
            {this.state.owners.map(owner =>
              <OwnerCard key={owner.id} owner={owner} />
              // removeOwner={this.deleteOwner} />
            )}
          </div>
          </>
        )
      }
}

export default OwnerList