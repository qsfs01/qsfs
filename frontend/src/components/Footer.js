import React from 'react';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/Footer.css';
import logo from '../assets/images/logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return React.createElement(
    'footer',
    { className: 'footer' },
    React.createElement(
      'div',
      { className: 'footer-content' },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { 
            className: 'footer-grid',
            style: {
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '40px',
              padding: '40px 0'
            }
          },
          // Company Info Column
          React.createElement(
            'div',
            { className: 'footer-column' },
            React.createElement(
              'div',
              { className: 'footer-logo', style: { marginBottom: '20px' } },
              React.createElement('img', {
                src: logo,
                alt: 'Queensland Steel Frame Solutions',
                style: { 
                  objectFit: 'contain', 
                  borderRadius: '4px',
                  height: '50px',
                  width: 'auto',
                  marginBottom: '15px',
                  filter: 'none',
                  mixBlendMode: 'normal',
                  display: 'block'
                }
              }),
              React.createElement('h3', { style: { margin: '10px 0 5px 0', fontSize: '1.2rem' } }, 'Queensland Steel Frame Solutions')
            ),
            React.createElement(
              'p',
              { className: 'footer-description', style: { lineHeight: '1.6', fontSize: '0.95rem' } },
              'Building excellence with premium steel frame construction solutions. Your trusted partner in quality construction.'
            )
          ),
          // Quick Links Column
          React.createElement(
            'div',
            { className: 'footer-column' },
            React.createElement('h4', { style: { marginBottom: '20px', fontSize: '1.1rem' } }, 'Quick Links'),
            React.createElement(
              'ul',
              { className: 'footer-links', style: { listStyle: 'none', padding: '0', margin: '0' } },
              React.createElement(
                'li',
                { style: { marginBottom: '12px' } },
                React.createElement(Link, { to: '/', style: { textDecoration: 'none', fontSize: '0.95rem' } }, 'Home')
              ),
              React.createElement(
                'li',
                { style: { marginBottom: '12px' } },
                React.createElement(Link, { to: '/about', style: { textDecoration: 'none', fontSize: '0.95rem' } }, 'About Us')
              ),
              React.createElement(
                'li',
                { style: { marginBottom: '12px' } },
                React.createElement(Link, { to: '/services', style: { textDecoration: 'none', fontSize: '0.95rem' } }, 'Services')
              ),
              React.createElement(
                'li',
                { style: { marginBottom: '12px' } },
                React.createElement(Link, { to: '/products', style: { textDecoration: 'none', fontSize: '0.95rem' } }, 'Products')
              ),
              React.createElement(
                'li',
                { style: { marginBottom: '12px' } },
                React.createElement(Link, { to: '/projects', style: { textDecoration: 'none', fontSize: '0.95rem' } }, 'Projects')
              ),
              React.createElement(
                'li',
                { style: { marginBottom: '12px' } },
                React.createElement(Link, { to: '/contact', style: { textDecoration: 'none', fontSize: '0.95rem' } }, 'Contact Us')
              )
            )
          ),
          // Contact Info Column
          React.createElement(
            'div',
            { className: 'footer-column' },
            React.createElement('h4', { style: { marginBottom: '20px', fontSize: '1.1rem' } }, 'Contact Info'),
            React.createElement(
              'ul',
              { className: 'contact-info', style: { listStyle: 'none', padding: '0', margin: '0' } },
              React.createElement(
                'li',
                { style: { display: 'flex', alignItems: 'flex-start', marginBottom: '15px', gap: '10px' } },
                React.createElement(LocationOnIcon, { className: 'contact-icon', style: { fontSize: '20px', marginTop: '2px' } }),
                React.createElement('span', { style: { fontSize: '0.95rem', lineHeight: '1.5' } }, 'Queensland, Australia')
              ),
              React.createElement(
                'li',
                { style: { display: 'flex', alignItems: 'center', marginBottom: '15px', gap: '10px' } },
                React.createElement(PhoneIcon, { className: 'contact-icon', style: { fontSize: '20px' } }),
                React.createElement('span', { style: { fontSize: '0.95rem' } }, '+61 735 328 696')
              ),
              React.createElement(
                'li',
                { style: { display: 'flex', alignItems: 'flex-start', marginBottom: '15px', gap: '10px' } },
                React.createElement(EmailIcon, { className: 'contact-icon', style: { fontSize: '20px', marginTop: '2px' } }),
                React.createElement('span', { style: { fontSize: '0.95rem', lineHeight: '1.5', wordBreak: 'break-word' } }, 'admin@qsfs.com.au')
              )
            )
          ),
          // Social Media Column
          React.createElement(
            'div',
            { className: 'footer-column' },
            React.createElement('h4', { style: { marginBottom: '20px', fontSize: '1.1rem' } }, 'Follow Us'),
            React.createElement(
              'div',
              { className: 'social-links', style: { display: 'flex', gap: '15px', marginBottom: '20px' } },
              React.createElement(
                'a',
                { 
                  href: '#', 
                  target: '_blank', 
                  rel: 'noopener noreferrer', 
                  'aria-label': 'Facebook',
                  style: { transition: 'transform 0.2s' }
                },
                React.createElement(FacebookIcon, { style: { fontSize: '28px' } })
              ),
              React.createElement(
                'a',
                { 
                  href: '#', 
                  target: '_blank', 
                  rel: 'noopener noreferrer', 
                  'aria-label': 'LinkedIn',
                  style: { transition: 'transform 0.2s' }
                },
                React.createElement(LinkedInIcon, { style: { fontSize: '28px' } })
              ),
              React.createElement(
                'a',
                { 
                  href: 'https://www.instagram.com/qsfs', 
                  target: '_blank', 
                  rel: 'noopener noreferrer', 
                  'aria-label': 'Instagram',
                  style: { transition: 'transform 0.2s' }
                },
                React.createElement(InstagramIcon, { style: { fontSize: '28px' } })
              )
            ),
            React.createElement(
              'p',
              { className: 'footer-cta', style: { fontSize: '0.95rem', lineHeight: '1.6', fontStyle: 'italic' } },
              'Get in touch with us today for a consultation!'
            )
          )
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'footer-bottom' },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'p',
          { style: { textAlign: 'center', padding: '20px 0', margin: '0', fontSize: '0.9rem' } },
          `© ${currentYear} Queensland Steel Frame Solutions. All rights reserved.`
        )
      )
    )
  );
};

export default Footer;