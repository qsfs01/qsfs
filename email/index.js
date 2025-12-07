const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// IMPORTANT: Enable CORS to allow requests from your backend
app.use(cors({
  origin: '*', // In production, replace with your backend URL
  methods: ['POST', 'GET', 'OPTIONS'],
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Email service is running',
    timestamp: new Date().toISOString()
  });
});

// Main email sending endpoint
app.post('/send-email', async (req, res) => {
  try {
    const { toEmail, subject, content, attachments } = req.body;

    // Validate input
    if (!toEmail || !subject || !content) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields: toEmail, subject, or content' 
      });
    }

    console.log('Sending email to:', toEmail);
    console.log('Subject:', subject);
    if (attachments) {
      console.log('Attachments:', attachments.length, 'file(s)');
    }

    // Define email options
    const mailOptions = {
      from: `"Queensland Steel Frame Solutions" <${process.env.EMAIL_USER}>`,
      to: toEmail,
      subject: subject,
      html: content,
    };

    // Add attachments if provided
    if (attachments && Array.isArray(attachments)) {
      mailOptions.attachments = attachments;
    }

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);
    
    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: info.messageId 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error sending email', 
      error: error.message 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ 
    success: false, 
    message: 'Internal server error' 
  });
});

// Start server (for local testing)
const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Email service running on port ${PORT}`);
  });
}

// Export for Vercel
module.exports = app;