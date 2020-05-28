import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia } from '@material-ui/core';
// import TeacherAvailsHeader from './TeacherAvailsHeader';
// import TeacherAvailsBody from './TeacherAvailsBody';
import TeacherAvailsTable from './TeacherAvailsTable';


const useStyles = makeStyles((theme) => ({
  root: {
    // border: '1px red solid',
    width: '100%',
    maxHeight: 300,
    display: 'flex',
    margin: 20
  },
  teacherMedia: {
    width: '35%',
    // overflow: 'hidden'
  },
  teacherBio: {
    width: '65%',
    overflow: 'scroll'
  },
  teacherImg: {
    width: '100%'
  },
  availsTable: {
    width: '100%',
    overflow:'scroll'
  }
  // availsContainer: {
  //   height: 300,
  //   overflow: 'scroll'
  // }
}));

const TeacherCard = (props) => {
  const classes = useStyles()
  return(
    <Card raised className={classes.root}>
      <CardMedia 
        className={classes.teacherMedia}
        component="img"
        height="100%"
        title="Teacher headshot"
        image={props.teacher.img_url} />
          {/* <img className={classes.teacherImg}alt='teacher' src={props.teacher.img_url} /> */}
      {/* <div className = {classes.teacherBio}> */}
      <CardContent className={classes.teacherBio}>
        <h1>{`${props.teacher.first_name} ${props.teacher.last_name}`}</h1>
        <p>{props.teacher.bio}</p>
        <div className={classes.availsContainer}>
          <TeacherAvailsTable className={classes.availsTable} avails={props.teacher.availabilities} />
        </div>
      </CardContent>
      {/* </div> */}
    </Card>
  )
}

export default TeacherCard