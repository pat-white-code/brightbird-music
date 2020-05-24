const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const port = process.env.port || 8080;
const teachersRouter = require('./routes/teachers');
const schedulesRouter = require('./routes/schedules');
const studentsRouter = require('./routes/students');
const subscriptionsRouter = require('./routes/subsciptions');
const driveTimesRouter = require('./routes/driveTimes');
const requestsRouter = require('./routes/requests');
const lessonsRouter = require('./routes/lessons');
const usersRouter = require('./routes/users');
const addressesRouter = require('./routes/addresses');
const availabilitiesRouter = require('./routes/availabilities');

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.get('/test', (req,res)=>{
  res.send('server hit')
})

app.use('/api/teachers', teachersRouter);
app.use('/api/schedules', schedulesRouter);
app.use('/api/students', studentsRouter);
app.use('/api/subscriptions', subscriptionsRouter);
app.use('/api/driveTimes', driveTimesRouter);
app.use('/api/requests', requestsRouter);
app.use('/api/lessons', lessonsRouter);
app.use('/api/users', usersRouter);
app.use('/api/addresses', addressesRouter);
app.use('/api/availabilities', availabilitiesRouter);


app.listen(port, ()=> {
  console.log(`Listening on ${port}!`)
});