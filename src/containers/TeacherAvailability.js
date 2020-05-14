import TeacherAvailability from '../components/TeacherAvailability';
import { fetchClientRequests } from '../redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.user,
    requests: state.requests
  }
}

const mapDispatchTopProps = dispatch => {
  return {
    fetchClientRequests: (userId) => dispatch(fetchClientRequests(userId))
  }
}

export default connect(mapStateToProps, mapDispatchTopProps)(TeacherAvailability);