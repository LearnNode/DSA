const mongoose = require('mongoose');

const { Schema } = mongoose;

const studentSchema = new Schema({
  name: {
    type: 'String',
    required: true,
    unique: true,
  },
  admNo: {
    type: String,
  },
  courseId: {
    type: Schema.Types.ObjectId,
    ref: 'Course'
  },
  schoolId: {
    type: Schema.Types.ObjectId,
    ref: 'School'
  }
});

module.exports = mongoose.model('Student', studentSchema);