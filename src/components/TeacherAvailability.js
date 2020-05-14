import React, { Component } from 'react';

class TeacherAvailability extends Component {

  componentDidMount(){
    this.props.fetchClientRequests(this.props.user.id)
  }

  render(){
    return(
      <h1>Teacher Availability</h1>
    )
  }
}



export default TeacherAvailability;