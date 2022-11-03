const Student = require('./student.model');

exports.createStudent = async (req, res) => {
  try {
    const { name, admNo, courseId, schoolId } = req.body;
    let newStudent = await new Student({ name, admNo, courseId, schoolId });
    let data = await newStudent.save();
    return res.status(200).json({
      msg: 'Student created successfully',
      data
    })
  } catch (error) {
    return res.status(500).json({
      msg: error
    })
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    let data = await Student.find();
    return res.status(200).json({
      msg: 'Fetched data successfully',
      data
    })
  } catch (error) {
    return res.status(500).json({
      msg: error
    })
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    await Student.deleteOne({ _id: id });
    return res.status(200).json({
      msg: 'Student deleted successfully'
    })
  } catch (error) {
    return res.status(500).json({
      msg: error
    })
  }
};