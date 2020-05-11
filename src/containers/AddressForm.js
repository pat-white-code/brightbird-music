import AddressForm from '../components/AddressForm';
// import { initialLogin } from '../redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

// const mapDispatchToProps = dispatch => {
//   return{
//     initialLogin: (userId)=> dispatch(initialLogin(userId))
//   }
// }

export default connect(mapStateToProps)(AddressForm);