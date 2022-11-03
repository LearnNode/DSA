const express = require('express');
const router = express.Router();

const schoolController = require('./school.controllers');

router.post('/create', schoolController.createSchool);
router.get('', schoolController.getAllSchools);
router.delete('/:id', schoolController.deleteSchool);

module.exports = router;