import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import TeacherCard from './TeacherCard';
// import { getRequestsWithAvail } from '../redux/actions';
// import moment from 'moment';


class TeacherAvailability extends Component {

  componentDidMount(){
    // this.props.fetchClientRequests(this.props.user.id);
    this.props.getAvailabilitiesByUser(this.props.user.id);
    this.props.getRequestsWithAvail(this.props.user.id);
  }

  // fetchQualifiedTeachers = () => {
  //   console.log('REQUESTS:',this.props.requests)
  //   this.props.requests.forEach(request => {
  //     console.log(request); 
  //     this.props.getSchedulesByRequest(request)})
  // }

  render(){
    return(
      <Container maxWidth="md">
        {this.props.requests.map(request => (
          <>  
            <h1>
              {`Teachers Available for ${request.first_name}`}
            </h1>
            <h4>{`${request.lesson_duration}-minute ${request.instrument_name}`}</h4>
            {request.availableTeachers.map(teacher => (
              <TeacherCard teacher={teacher} />
            ))}
          </>
        ))}
      </Container>
    )
  }
}



export default TeacherAvailability;