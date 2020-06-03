import AddStudent from '../components/AddStudent';
import { addStudent } from '../redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchTopProps = dispatch => {
  return {
    addStudent: (student, request) => dispatch(addStudent(student, request))
  }
}

export default connect(mapStateToProps, mapDispatchTopProps)(AddStudent);