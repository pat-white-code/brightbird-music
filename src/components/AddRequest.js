import React, {useState} from 'react';
import { Button, FormControl, FormHelperText, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const AddRequest = () => {
  // instrument
  // lesson duration
  const classes=useStyles();
  const [instrumentId, setInstrumentId] = useState(0);
  const [experience, setExperience] = useState(0);
  const [lessonDuration, setLessonDuration] = useState(30);


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
  return (
    <form>
    <FormControl className={classes.formControl}>
      <InputLabel id="instrument">Instrument</InputLabel>
      <Select
        labelId="instrument-select"
        id="instrument"
        value={instrumentId}
        onChange={handleInstrumentId}
      >
        <MenuItem value={0}>Select Instrument</MenuItem>
        <MenuItem value={1}>Piano</MenuItem>
        <MenuItem value={2}>Guitar</MenuItem>
        <MenuItem value={3}>Drums</MenuItem>
        <MenuItem value={4}>Voice</MenuItem>
        <MenuItem value={5}>Violin</MenuItem>
        <MenuItem value={6}>Bass Guitar</MenuItem>
        <MenuItem value={7}>Ukulele</MenuItem>
        <MenuItem value={8}>Early Music Enrichment</MenuItem>
      </Select>
    </FormControl>
    <FormControl className={classes.formControl}>
        <InputLabel id="experience">Years of Experience</InputLabel>
        <Select
          labelId="experience-select"
          id="experience"
          value={experience}
          onChange={handleExperience}
        >
          <MenuItem value={0}>Beginner/Novice</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8+</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="lesson-duration">Preferred Lesson Duration</InputLabel>
        <Select
          labelId="lesson-duration-select"
          id="lesson-duration"
          value={lessonDuration}
          onChange={handleLessonDuration}
        >
          <MenuItem value={30}>30-Min ($40) </MenuItem>
          <MenuItem value={45}>45-Min ($56) </MenuItem>
          <MenuItem value={60}>60-Min ($72) </MenuItem>
        </Select>
        <FormHelperText>Lessons providede Weekly</FormHelperText>
      </FormControl>
      <Button type='submit'>Add Request</Button>
      <Button>Cancel</Button>
  </form>
  )
}

export default AddRequest