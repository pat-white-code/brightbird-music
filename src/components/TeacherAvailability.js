import React, { Component } from 'react';
// import moment from 'moment';


class TeacherAvailability extends Component {

  componentDidMount(){
    this.props.fetchClientRequests(this.props.user.id);
    // this.props.requests.forEach(request => this.props.fetchQualifiedTeachers(request))
    // for each request, fetch qualified teacher
    // .then(props.requests.forEach(request => fetchQualifiedTeachers(request)))
    // for each qualified teacher, fetchSchedules
    // .then(props.requests.teachers.forEach(teacher=> fetchTeacherSchedule))
    // for each teacher schedule, fetch lessons that day
    // .then(props.requests.teachers.schedules.forEach(day => fetchLessons))
    // Calculate lesson availability.
  }

  // componentDidUpdate(prevProps){
  //   if(this.props.requestIsLoaded !== prevProps.requestIsLoaded) {
  //     if(this.props.requestIsLoaded) {
  //       this.props.requests.forEach(request => this.props.fetchQualifiedTeachers(request));
  //     }
  //   }
  // }

  fetchQualifiedTeachers = () => {
    console.log('REQUESTS:',this.props.requests)
    this.props.requests.forEach(request => {
      console.log(request); 
      this.props.getSchedulesByRequest(request)})
  }

  render(){
    return(
      <>
        <h1>Teacher Availability</h1>
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