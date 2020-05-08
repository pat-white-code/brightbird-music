import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function ParentForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id='firstName' label="First Name" />
      <TextField id='lastName' label="Last Name" />
      <TextField id='email' label="Email Address" required />
      <TextField id='password' type='password' label='Password' />
      <TextField id='confirm-password' type='password' label='Confirm Password' />
      <Button variant='contained' color='secondary' type='submit'>Next </Button>
    </form>
  );
}