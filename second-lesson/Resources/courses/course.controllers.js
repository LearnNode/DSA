const Course = require('./course.model.js');

exports.createCourse = async (req, res) => {
  const { name, courseCode, schoolId } = req.body;
  try {
    let newCourse = new Course({ name, courseCode, schoolId });
    let data = await newCourse.save();
    return res.status(200).json({
      msg: 'Course Created Successfully',
      data
    });
  } catch (error) {
    return res.status(500).json({
      msg: error
    });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    let data = await Course.find();
    return res.status(200).json({
      msg: 'Data Fetched successfully',
      data
    })
  } catch (error) {
    return res.status(500).json({
      msg: error
    })
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const id = req.params.id;
    await Course.deleteOne({ _id: id });
    return res.status(200).json({
      msg: 'Course deleted successfully'
    })
  } catch (error) {
    return res.status(500).json({
      msg: error
    })
  }
}