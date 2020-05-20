import TeacherAvailability from '../components/TeacherAvailability';
import { fetchClientRequests, fetchQualifiedTeachers, setRequests } from '../redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.user,
    requests: state.requests,
    requestIsLoaded: state.requestIsLoaded
  }
}

const mapDispatchTopProps = dispatch => {
  return {
    fetchClientRequests: (userId) => dispatch(fetchClientRequests(userId)),
    fetchQualifiedTeachers: (request) => dispatch(fetchQualifiedTeachers(request)),
    setRequests: (requests) => dispatch(setRequests(requests))
  }
}

export default connect(mapStateToProps, mapDispatchTopProps)(TeacherAvailability);