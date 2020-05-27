import { connect } from 'react-redux';
import ViewRequests from '../components/ViewRequests';

const mapStateToProps = state => {
  return {
    requests: state.requests,
    user: state.user
  }
}

export default connect(mapStateToProps)(ViewRequests)