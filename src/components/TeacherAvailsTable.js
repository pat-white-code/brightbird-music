import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import moment from 'moment';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function AvailabilitiesTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Schedule</TableCell>
            <TableCell align="right">Start Date</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.avails.map((avail) => (
            <TableRow key={avail.teacher_availability_id}>
              <TableCell align="right">{`${moment(avail.start_time_stamp, 'YYYY-MM-DDTHH:mm:ss z').format('dddd')}s at ${moment(avail.start_time_stamp, 'YYYY-MM-DDTHH:mm:ss Z').format('h:mm a')}`}</TableCell>
              <TableCell align="right">{moment(avail.start_time_stamp).format('MM/DD')}</TableCell>
              <TableCell align="right"><button>Book Lesson</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}