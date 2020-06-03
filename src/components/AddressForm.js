import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import state from '../redux/state';
import axios from 'axios';
import { useHistory } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const AddressForm = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const [address, setAddress] = useState('');
  const [streetLineTwo, setStreetLineTwo] = useState('');
  const [city, setCity] = useState('');
  const [geoState, setGeoState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleAddress = e => {
    console.log('Address : ',address)
    setAddress(e.target.value)
  }
  const handleStreetLineTwo = e => {
    console.log('Street 2:', streetLineTwo)
    setStreetLineTwo(e.target.value)
  }
  const handleCity = e => {
    console.log('CITY: ',city)
    setCity(e.target.value)
  }
  const handleGeoState = e => {
    console.log('GeoState: ',geoState)
    setGeoState(e.target.value)
  }

  const handleZipCode = e => {
    console.log('ZIP CODE:', zipCode)
    setZipCode(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let fullAddress = `${address}, ${city}, ${geoState} ${zipCode}`;
    console.log(state);
    axios.post(`/api/addresses/${props.user.id}`, 
      { address:fullAddress, streetLineTwo, city, geoState, zipCode })
      .then(res => props.initialAddress(res.data.id))
      .then(()=> props.getAddressesByUser(props.user.id))
      .then(()=> history.push('/signup/student'));
      // .catch(err=> setErr(err.response.data));
  }
  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
      <TextField id='address' label="Address" required onChange={handleAddress} />
      <TextField id='streetLineTwo' label="Street Line 2" onChange={handleStreetLineTwo} />
      <TextField id='city' label="City" onChange={handleCity} required />
      <TextField id='geoState' label='State' onChange={handleGeoState} />
      <TextField id='zipcode' label='Zip Code' required  onChange={handleZipCode}/>
      <Button variant='contained' color='secondary' type='submit'>Next </Button>
    </form>
  );
}

export default AddressForm;