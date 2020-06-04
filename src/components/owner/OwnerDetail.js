import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import { Button } from 'semantic-ui-react'

class OwnerDetail extends Component {

    state = {
        ownerName: "",
        phoneNumber: "",
        loadingStatus: true,
    };

  handleDelete = () => {
    //invoke the delete function in OwnerManger and re-direct to the Owner list.
    this.setState({loadingStatus: true})
    OwnerManager.delete(this.props.ownerId)
    .then(() => this.props.history.push("/owners"))
   }

  componentDidMount(){
    console.log("OwnerDetail: ComponentDidMount");
    //get(id) from OwnerManager and hang on to the data; put it into state
    OwnerManager.get(this.props.ownerId)
    .then((owner) => {
      this.setState({
        ownerName: owner.name,
        phoneNumber: owner.phone_number,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content section-content">
          <picture>
            <img className="anon-image" src={'https://www.booksie.com/files/profiles/22/mr-anonymous.png'} alt="Profile Pic" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.ownerName}</span></h3>
            <p>Phone Number: {this.state.phoneNumber}</p>
            <Button primary type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Remove</Button>
            <Button type="button" onClick={() => {this.props.history.push(`/owners/${this.props.ownerId}/edit`)}}>Edit</Button>
        </div>
      </div>
    );
  }
}

export default OwnerDetail;