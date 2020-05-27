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
    maxHeight: 500,
    display: 'flex',
    margin: 20
  },
  teacherMedia: {
    width: '35%',
    height:'100%',
    // overflow: 'hidden'
  },
  teacherBio: {
    width: '65%'
  },
  teacherImg: {
    width: '100%'
  },
  availsTable: {
    width: '100%'
  },
  availsContainer: {
    height: 300,
    overflow: 'scroll'
  }
}));

const TeacherCard = (props) => {
  const classes = useStyles()
  return(
    <Card raised className={classes.root}>
      <div className={classes.teacherMedia}>
        <CardMedia>
          <img className={classes.teacherImg}alt='teacher' src={props.teacher.img_url} />
        </CardMedia>
      </div>
      <div className = {classes.teacherBio}>
        <CardContent>
          <h1>{`${props.teacher.first_name} ${props.teacher.last_name}`}</h1>
          <p>{props.teacher.bio}</p>
          <div className={classes.availsContainer}>
            <TeacherAvailsTable className={classes.availsTable} avails={props.teacher.availabilities} />
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

export default TeacherCard