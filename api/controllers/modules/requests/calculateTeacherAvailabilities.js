const moment = require('moment')

const calculateTeacherAvailabilities = (req, res) => {
  let lessons = req.body.lessonData;
  let requestedTime = req.body.lessonDuration;
  let availabilitiesAfter = []
  lessons.forEach(lesson => {
    // if lesson_start_time + driveTime + requestedTime + next_lesson_drive + 5 Min is less than next_lesson_startMoment, create a new lesson (lesson end moment + driveTime)
    let availabilityAfter = {
      requestId: req.body.requestId,
      teacherId: lesson.teacher_id,
      instrumentId: req.body.instrumentId,
      // lessonDuration: requestedTime,
      studentId: req.body.studentId,
      startTime: null,
      
    }
    availabilityAfter.startTime = lesson.endMoment.clone().add(lesson.driveTime, 'minutes');
    // if availability after this lesson + driveTime + requestedTime > next Lesson start time, return it to the new array;
    if(availabilityAfter.startTime.clone().add(lesson.next_lesson_drive + requestedTime, 'minutes').valueOf() - lesson.next_lesson_startMoment.valueOf() < 0) {
      availabilityAfter.startTime = availabilityAfter.startTime.format('YYYY-MM-DDTHH:mm:ss Z')
      availabilitiesAfter.push(availabilityAfter)
    }
  })

  req.body.teacherAvailabilities = availabilitiesAfter;
  console.log('REQUEST BODY', req.body)
  res.status(200).send("Availabilities posted to body")
}

module.exports = calculateTeacherAvailabilities;