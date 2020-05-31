import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RequestCard from './RequestCard';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FormModal from './FormModal';
import AddRequest from '../containers/AddRequest';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}))

const ViewRequests = (props) => {
  const classes=useStyles()
  // get requests from state
  // get user from state
  // For each student: <H1>Student Name</H1>
  // Then let student requests = props.requests.filter(request => request.student_id = student.id)

  return(
    <Container>
      {props.user.students.map(student=> (
        <>
          <h1>{`${student.first_name} ${student.last_name}`}</h1>
          {props.requests.filter(request => request.student_id === student.id).map(request => (
            <RequestCard request={request} />
        ))}
          <>
            <IconButton aria-label="delete" className={classes.margin}>
              <AddCircleIcon fontSize="large" />
            </IconButton>
            <FormModal>
              <AddRequest/>
            </FormModal>
          </>
        </>

      )
      )}
    </Container>
  )
}

export default ViewRequests;