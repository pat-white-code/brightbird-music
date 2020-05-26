import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TeacherAvailsTable from './TeacherAvailsTable';


const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px red solid',
    width: 750,
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    margin: 20
  },
  teacher: {
    height: '50%',
    border: '1px blue solid',
    width: '100%',
    display: 'flex',
  },
  avails: {
    height: '50%',
    border: '1px green solid',
    width: '100%'
  },
  teacherMedia: {
    width: '50%',
    height:'100%',
    overflow: 'hidden'
  },
  teacherBio: {
    width: '50%',
    height: '100%',
  }
}));

const TeacherCard = (props) => {
  const classes = useStyles()
  return(
    <div className={classes.root}>
      <div className={classes.teacher}>
        <div className={classes.teacherMedia}>
          <img alt='teacher' src='/src/img/jim-foster-headshot.jpg' />
        </div>
        <div className = {classes.teacherBio}>
          <h1>{`${props.teacher.first_name} ${props.teacher.last_name}`}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos omnis vel beatae unde! Obcaecati cumque velit molestias, deleniti aut officia eos eveniet, assumenda aliquid placeat fuga similique hic voluptatem.</p>
        </div>
      </div>
      <div className={classes.avail}>
        <TeacherAvailsTable avails={props.teacher.availabilities} />
      </div>
    </div>
  )
}

export default TeacherCard