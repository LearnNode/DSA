const mongoose = require('mongoose');

const { Schema } = mongoose;

const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  courseCode: {
    type: String
  },
  schoolId: {
    type: Schema.Types.ObjectId,
    ref: 'School',
  }
});

module.exports = mongoose.model('Course', courseSchema);

