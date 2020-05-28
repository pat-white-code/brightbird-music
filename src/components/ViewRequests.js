import React from 'react';
import { Container, Card } from '@material-ui/core';
import RequestCard from './RequestCard';

const ViewRequests = (props) => {
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
            <>
              <RequestCard />
              <Card>
                {`${request.lesson_duration}${request.instrument_name}`}
              </Card>
            </>
        ))}
        </>

      )
      )}
    </Container>
  )
}

export default ViewRequests;