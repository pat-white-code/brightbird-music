import AddRequest from '../components/AddRequest';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(AddRequest)