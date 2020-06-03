import React, {useEffect} from 'react';
import { Container } from '@material-ui/core';
import TeacherCard from './TeacherCard';
// import { getRequestsWithAvail } from '../redux/actions';
// import moment from 'moment';


const TeacherAvailability  = (props) => {
  const {
    getRequestsWithAvail,
    dbUpdatedAt,
    user,
    requests
  } = props

  useEffect(() => {
    // getStudentsByUser(user.id)
    getRequestsWithAvail(user.id)
    // https://github.com/facebook/create-react-app/issues/6880
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dbUpdatedAt]);

  // componentDidMount(){
  //   // this.props.fetchClientRequests(this.props.user.id);
  //   // this.props.getAvailabilitiesByUser(this.props.user.id);
  //   // this.props.getRequestsWithAvail(this.props.user.id);
  // }


  // fetchQualifiedTeachers = () => {
  //   console.log('REQUESTS:',this.props.requests)
  //   this.props.requests.forEach(request => {
  //     console.log(request); 
  //     this.props.getSchedulesByRequest(request)})
  // }


  return(
    <Container maxWidth="md">
      {requests.map(request => (
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



export default TeacherAvailability;