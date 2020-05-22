const moment = require('moment')

const calculateTeacherAvailabilities = (req, res) => {
  let lessons = req.body.lessonData;
  let requestedTime = req.body.lessonDuration;
  let teacherAvailabilities = []
  lessons.forEach(lesson => {
    // if lesson_start_time + driveTime + requestedTime + next_lesson_drive + 5 Min is less than next_lesson_startMoment, create a new lesson (lesson end moment + driveTime)
    let availabilityAfter = {
      requestId: req.body.requestId,
      teacherId: lesson.teacher_id,
      // instrumentId: req.body.instrumentId,
      // lessonDuration: requestedTime,
      // studentId: req.body.studentId,
      startTime: null,
    }
    availabilityAfter.startTime = lesson.endMoment.clone().add(lesson.driveTime, 'minutes');
    // if availability after this lesson + driveTime + requestedTime > next Lesson start time, return it to the new array;
    if(availabilityAfter.startTime.clone().add(lesson.next_lesson_drive + requestedTime, 'minutes').valueOf() < lesson.next_lesson_startMoment.valueOf()) {
      availabilityAfter.startTime = availabilityAfter.startTime.format('YYYY-MM-DD HH:mm:ss')
      teacherAvailabilities.push(availabilityAfter)
    }

    let availabilityBefore = {
      requestId: req.body.requestId,
      teacherId: lesson.teacher_id,
      startTime: null,
    }
    // if lesson at 3:30, subtract 15 minute drive + 30-minute lesson = 2:15.
    availabilityBefore.startTime = lesson.startMoment.clone().subtract(lesson.driveTime + requestedTime, 'minutes')
    // if start time minus the previous lessons drive time is greater than the previous lessons end time, that means the subtraction will result in positive value, thus they conflict.
    if(availabilityBefore.startTime.clone().subtract(lesson.prev_lesson_drive, 'minutes').valueOf() > lesson.prev_lesson_endMoment.valueOf()) {
      //  formats for MYSQL
      availabilityBefore.startTime = availabilityBefore.startTime.format('YYYY-MM-DD HH:mm:ss')
      teacherAvailabilities.push(availabilityBefore)
    }
  })

  req.body.teacherAvailabilities = teacherAvailabilities;
  console.log('REQUEST BODY', req.body)
  res.status(200).send("Availabilities posted to body")
}

module.exports = calculateTeacherAvailabilities;