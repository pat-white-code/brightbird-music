import { connect } from 'react-redux'
import EditRequest from '../components/EditRequest';

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(EditRequest);