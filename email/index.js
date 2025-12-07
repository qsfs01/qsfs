// index.js

// 1. Import required modules
const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables from .env file

// 2. Initialize the Express app
const app = express();
app.use(express.json({ limit: '10mb' })); // Increase limit to handle base64 images

// 3. Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 4. Create the API endpoint
app.post('/send-email', async (req, res) => {
  // Extract data from the request body
  const { toEmail, subject, content, attachments } = req.body; // Added attachments

  console.log(toEmail, subject, content);
  if (attachments) {
    console.log('Attachments:', attachments.length, 'file(s)');
  }

  // 5. Define the email options
  const mailOptions = {
    from: `"Queensland Steel Frame Solutions" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: subject,
    html: content,
  };

  // 6. Add attachments if provided
  if (attachments && Array.isArray(attachments)) {
    mailOptions.attachments = attachments;
  }

  // 7. Send the email
  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to:', toEmail);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

// 8. Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});