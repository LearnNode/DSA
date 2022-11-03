const express = require('express');
const schoolRoutes = require('./Resources/school/school.routes');
const courseRoutes = require('./Resources/courses/course.routes');
const studentRoutes = require('./Resources/students/student.routes');

const app = express();
app.use(express.json());

const mongooseConnection = require('./helpers/index');

const PORT = 4000;

mongooseConnection();

app.use('/school', schoolRoutes);
app.use('/course', courseRoutes);
app.use('/student', studentRoutes);

app.listen(PORT, () => {
  console.log(`API listening on port: ${PORT}`);
});
