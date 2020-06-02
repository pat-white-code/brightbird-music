import AddStudent from '../components/AddStudent';
// import { initialAddress } from '../redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

// const mapDispatchTopProps = dispatch => {
//   return {
//     initialAddress: (addressId) => dispatch(initialAddress(addressId))
//   }
// }

export default connect(mapStateToProps)(AddStudent);