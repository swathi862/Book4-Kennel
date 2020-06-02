import React, { Component } from 'react'
// import 'semantic-ui-css/semantic.min.css'
import './Kennel.css'
// import AnimalCard from './animal/AnimalCard'
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

class Kennel extends Component {
    // kennelName = "Student Kennels"

    render() {
        return (
	        <>
            <NavBar />
            <ApplicationViews />
            </>
        );
    }
}

export default Kennel