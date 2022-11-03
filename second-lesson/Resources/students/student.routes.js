const express = require('express');

const router = express.Router();

const studentController = require('./student.controllers');

router.get('', studentController.getAllStudents);
router.post('', studentController.createStudent);
router.delete('/:id', studentController.deleteStudent);

module.exports = router;