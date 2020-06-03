import AddressForm from '../components/AddressForm';
import { initialAddress, getAddressesByUser } from '../redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchTopProps = dispatch => {
  return {
    initialAddress: (addressId) => dispatch(initialAddress(addressId)),
    getAddressesByUser: (userId) => dispatch(getAddressesByUser(userId))
  }
}

export default connect(mapStateToProps, mapDispatchTopProps)(AddressForm);