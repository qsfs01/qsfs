import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import axios from 'axios';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [otp, setOtp] = useState('');
  const [showOtpDialog, setShowOtpDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });
  const [tempContactId, setTempContactId] = useState('');

  // const API_URL = 'https://queensland-steel-frame.onrender.com' || process.env.REACT_APP_API_URL || 'http://localhost:5000';
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert({ show: false, type: '', message: '' });

    try {
      const response = await axios.post(`${API_URL}/api/contact/send-otp`, formData);
      
      if (response.data.success) {
        setTempContactId(response.data.contactId);
        setShowOtpDialog(true);
        setAlert({
          show: true,
          type: 'success',
          message: 'OTP sent to your email. Please check your inbox.'
        });
      }
    } catch (error) {
      setAlert({
        show: true,
        type: 'error',
        message: error.response?.data?.message || 'Failed to send OTP. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    setAlert({ show: false, type: '', message: '' });

    try {
      const response = await axios.post(`${API_URL}/api/contact/verify-otp`, {
        contactId: tempContactId,
        otp: otp
      });

      if (response.data.success) {
        setAlert({
          show: true,
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We will contact you soon.'
        });
        setShowOtpDialog(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setOtp('');
        setTempContactId('');
      }
    } catch (error) {
      setAlert({
        show: true,
        type: 'error',
        message: error.response?.data?.message || 'Invalid OTP. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseDialog = () => {
    setShowOtpDialog(false);
    setOtp('');
  };

  return React.createElement(
    'div',
    { className: 'contact-form' },
    alert.show && React.createElement(
      Alert,
      { 
        severity: alert.type,
        onClose: () => setAlert({ show: false, type: '', message: '' }),
        sx: { marginBottom: '20px' }
      },
      alert.message
    ),
    React.createElement(
      'form',
      { onSubmit: handleSubmit },
      React.createElement(TextField, {
        fullWidth: true,
        label: 'Full Name',
        name: 'name',
        value: formData.name,
        onChange: handleChange,
        required: true,
        margin: 'normal',
        variant: 'outlined',
        sx: { marginBottom: '20px' }
      }),
      React.createElement(TextField, {
        fullWidth: true,
        label: 'Email Address',
        name: 'email',
        type: 'email',
        value: formData.email,
        onChange: handleChange,
        required: true,
        margin: 'normal',
        variant: 'outlined',
        sx: { marginBottom: '20px' }
      }),
      React.createElement(TextField, {
        fullWidth: true,
        label: 'Phone Number',
        name: 'phone',
        value: formData.phone,
        onChange: handleChange,
        required: true,
        margin: 'normal',
        variant: 'outlined',
        sx: { marginBottom: '20px' }
      }),
      React.createElement(TextField, {
        fullWidth: true,
        label: 'Subject',
        name: 'subject',
        value: formData.subject,
        onChange: handleChange,
        required: true,
        margin: 'normal',
        variant: 'outlined',
        sx: { marginBottom: '20px' }
      }),
      React.createElement(TextField, {
        fullWidth: true,
        label: 'Message',
        name: 'message',
        value: formData.message,
        onChange: handleChange,
        required: true,
        multiline: true,
        rows: 5,
        margin: 'normal',
        variant: 'outlined',
        sx: { marginBottom: '20px' }
      }),
      React.createElement(
        Button,
        {
          type: 'submit',
          variant: 'contained',
          size: 'large',
          disabled: loading,
          fullWidth: true,
          className: 'btn btn-primary',
          sx: {
            backgroundColor: 'var(--primary-color)',
            '&:hover': {
              backgroundColor: 'var(--primary-light)'
            }
          }
        },
        loading 
          ? React.createElement(CircularProgress, { size: 24, sx: { color: '#fff' } })
          : 'Send Message'
      )
    ),
    // OTP Dialog
    React.createElement(
      Dialog,
      {
        open: showOtpDialog,
        onClose: handleCloseDialog,
        maxWidth: 'sm',
        fullWidth: true
      },
      React.createElement(
        DialogTitle,
        { sx: { color: 'var(--primary-color)', fontWeight: 600 } },
        'Verify Your Email'
      ),
      React.createElement(
        DialogContent,
        null,
        React.createElement(
          'p',
          { style: { color: 'var(--text-secondary)', marginBottom: '20px' } },
          'Please enter the 6-digit OTP sent to your email address.'
        ),
        React.createElement(TextField, {
          fullWidth: true,
          label: 'Enter OTP',
          value: otp,
          onChange: (e) => setOtp(e.target.value),
          variant: 'outlined',
          inputProps: { maxLength: 6 },
          sx: { marginTop: '10px' }
        })
      ),
      React.createElement(
        DialogActions,
        { sx: { padding: '16px 24px' } },
        React.createElement(
          Button,
          { 
            onClick: handleCloseDialog,
            disabled: loading 
          },
          'Cancel'
        ),
        React.createElement(
          Button,
          {
            onClick: handleVerifyOtp,
            variant: 'contained',
            disabled: loading || otp.length !== 6,
            sx: {
              backgroundColor: 'var(--primary-color)',
              '&:hover': {
                backgroundColor: 'var(--primary-light)'
              }
            }
          },
          loading 
            ? React.createElement(CircularProgress, { size: 20, sx: { color: '#fff' } })
            : 'Verify'
        )
      )
    )
  );
};

export default ContactForm;