const mongoose = require('mongoose');
const Course = require('../courses/course.model');
const Student = require('../students/student.model');

const { Schema } = mongoose;

const schoolSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true
  }
});

schoolSchema.pre('deleteOne', async function (next) {
  console.log(this.getQuery());
  const schoolId = this.getQuery()['_id'];
  await Course.deleteMany({ schoolId }).exec();
  await Student.deleteMany({ schoolId }).exec();
  next();
});

module.exports = mongoose.model('School', schoolSchema);