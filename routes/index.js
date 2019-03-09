var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/doctors', require('./doctors'));
router.use('/appointments',require('./appointments'))
router.use('/doctor',require('./doctors/doctor'))
router.use('/appointment',require('./appointments/appointment'))

module.exports = router;
