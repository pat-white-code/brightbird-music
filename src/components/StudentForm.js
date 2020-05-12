import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import DatePicker from './DatePicker';
// import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const AddressForm = (props) => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // const [selectedDate, handleDateChange] = useState(new Date());
  const [dob, setDob] = useState(new Date());
  const [instrumentId, setInstrumentId] = useState(0);
  const [experience, setExperience] = useState(0);
  const [lessonDuration, setLessonDuration] = useState(0);

  // const handleDateChange = () => {
  //   console.log('SELECTED DATE: ', selectedDate)
  //   setSelectedDate
  // }

  const handleFirstName = e => {
    console.log('firstName : ', firstName)
    setFirstName(e.target.value)
  }
  const handleLastName = e => {
    console.log('Last Name:', lastName)
    setLastName(e.target.value)
  }

  const handleInstrumentId = e => {
    console.log('INSTRUMENT ID: ',instrumentId)
    setInstrumentId(e.target.value)
  }

  const handleExperience = e => {
    console.log('Experience:', experience)
    setExperience(e.target.value)
  }
  const handleLessonDuration = e => {
    console.log('LESSON DURATION:', lessonDuration)
    setLessonDuration(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( firstName, lastName, dob, instrumentId, experience, lessonDuration );

  }
  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
      <TextField id='firstName' label="First Name" required onChange={handleFirstName} />
      <TextField id='lastName' label="Last Name" onChange={handleLastName} />
      <DatePicker dob={dob} setDob={setDob} />
      <TextField id='instrument' label='Instrument' onChange={handleInstrumentId} />
      <TextField id='experience' label='Experience Level' required  onChange={handleExperience}/>
      <TextField id='lessonDuration' label='Preferred lesson Duration' required  onChange={handleLessonDuration}/>
      <Button variant='contained' color='secondary' type='submit'>Next </Button>
    </form>
  );
}

export default AddressForm;