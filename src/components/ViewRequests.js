import React, {useEffect} from 'react';
import { Container, Grid } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import RequestCard from '../containers/RequestCard';
import FormModal from './FormModal';

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
//   grid: {
//     flexGrow: 1,
//   },
// }))

const ViewRequests = (props) => {
  const {
    dbUpdatedAt,
    user,
    getRequestsWithAvail
  } = props;
  // const classes=useStyles()
  // get requests from state
  // get user from state
  // For each student: <H1>Student Name</H1>
  // Then let student requests = props.requests.filter(request => request.student_id = student.id)

  useEffect(() => {
    getRequestsWithAvail(user.id)
    // https://github.com/facebook/create-react-app/issues/6880
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dbUpdatedAt]);

  return(
    <Container>
      {props.user.students.map(student=> (
        <>
          <h1>{`${student.first_name} ${student.last_name}`}</h1>
          <Grid container spacing={3}>
            {props.requests.filter(request => request.student_id === student.id).map(request => (
              <Grid item xs>
                <RequestCard request={request} />
              </Grid>
          ))}
            <Grid item xs>
              <FormModal student={student} />
            </Grid>
          </Grid>
        </>
      )
      )}
    </Container>
  )
}

export default ViewRequests;