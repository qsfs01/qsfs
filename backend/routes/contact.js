const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Route to send OTP
router.post('/send-otp', contactController.sendOTP);

// Route to verify OTP and send email to owner
router.post('/verify-otp', contactController.verifyOTP);

module.exports = router;