const School = require('./school.model');

exports.createSchool = async (req, res) => {
  const { name, location } = req.body;
  try {
    let newSchool = await new School({ name, location });
    let data = await newSchool.save({ name, location });
    return res.status(200).json({
      msg: 'School created successfully',
      data
    })
  } catch (error) {
    return res.status(500).json({
      msg: error
    })
  }
};

exports.getAllSchools = async (req, res) => {
  try {
    let data = await School.find();
    return res.status(200).json({
      msg: 'Data Fetched Successfully',
      data
    })
  } catch (error) {
    return res.status(500).json({
      msg: error
    })
  }
};

exports.deleteSchool = async (req, res) => {
  const id = req.params.id;
  try {
    await School.deleteOne({ _id: id });
    return res.status(200).json({
      msg: 'School deleted successfully',
    })
  } catch (error) {
    return res.status(500).json({
      msg: error
    })
  }
}