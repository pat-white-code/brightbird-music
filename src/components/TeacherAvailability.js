import React, { Component } from 'react';
// import moment from 'moment';


class TeacherAvailability extends Component {

  componentDidMount(){
    // this.props.fetchClientRequests(this.props.user.id);
    this.props.getAvailabilitiesByUser(this.props.user.id);
  }

  fetchQualifiedTeachers = () => {
    console.log('REQUESTS:',this.props.requests)
    this.props.requests.forEach(request => {
      console.log(request); 
      this.props.getSchedulesByRequest(request)})
  }

  render(){
    return(
      <>
        <h1>Teacher Availabilities</h1>

        <button onClick={this.fetchQualifiedTeachers}></button>
        {this.props.requests.map(request => (
          <>
            <h1>
              {`Teachers Available for ${request.first_name}`}
            </h1>
            <ul>
              <li>{request.instrument_name}</li>
              <li>{request.address}</li>
            </ul>
          </>
        ))}
      </>
    )
  }
}



export default TeacherAvailability;