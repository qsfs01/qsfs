import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import img2 from '../assets/images/about.jpg';

const About = () => {
  const values = [
    {
      icon: React.createElement(PrecisionManufacturingIcon),
      title: 'Quality Craftsmanship',
      description: 'We maintain the highest standards in every project we undertake.'
    },
    {
      icon: React.createElement(GroupsIcon),
      title: 'Expert Team',
      description: 'Our experienced professionals bring decades of combined expertise.'
    },
    {
      icon: React.createElement(EmojiEventsIcon),
      title: 'Excellence',
      description: 'Committed to delivering exceptional results that exceed expectations.'
    },
    {
      icon: React.createElement(VerifiedUserIcon),
      title: 'Trust & Reliability',
      description: 'Building lasting relationships through integrity and transparency.'
    }
  ];

  return React.createElement(
    'div',
    { className: 'about-page' },
    // Hero Section
    React.createElement(
      'section',
      { className: 'page-hero' },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'page-hero-content fade-in' },
          React.createElement('h1', null, 'About Us'),
          React.createElement('p', null, 'Building Excellence Since Day One')
        )
      )
    ),
    // Company Story Section
    React.createElement(
      'section',
      { className: 'section' },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          Grid,
          { container: true, spacing: 6, alignItems: 'center' },
          React.createElement(
            Grid,
            { item: true, xs: 12, md: 6 },
            React.createElement(
              'div',
              { className: 'slide-in-left' },
              React.createElement(
                'div',
                { className: 'image-wrapper' },
                React.createElement('img', {
                  src: img2,
                  alt: 'Queensland Steel Frame Solutions',
                  style: { width: '100%', borderRadius: '12px' }
                })
              )
            )
          ),
          React.createElement(
            Grid,
            { item: true, xs: 12, md: 6 },
            React.createElement(
              'div',
              { className: 'slide-in-right' },
              React.createElement('h2', { style: { color: 'var(--primary-color)' } }, 'Our Story'),
              React.createElement(
                'p',
                { style: { color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' } },
                'Queensland Steel Frame Solutions has been at the forefront of steel frame construction innovation in Queensland. We specialize in delivering premium quality steel frame solutions for both residential and commercial projects.'
              ),
              React.createElement(
                'p',
                { style: { color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' } },
                'Our commitment to excellence, combined with cutting-edge technology and sustainable practices, has positioned us as a trusted partner for builders and developers across the region.'
              ),
              React.createElement(
                'p',
                { style: { color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' } },
                'We take pride in our attention to detail, timely project delivery, and unwavering dedication to client satisfaction.'
              )
            )
          )
        )
      )
    ),
    // Mission & Vision Section - FIXED: Equal Heights
    React.createElement(
      'section',
      { className: 'section', style: { backgroundColor: 'var(--surface-color)' } },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          Grid,
          { container: true, spacing: 4, alignItems: 'stretch' },
          React.createElement(
            Grid,
            { item: true, xs: 12, md: 6 },
            React.createElement(
              Card,
              { className: 'card scale-up', style: { height: '100%' } },
              React.createElement(
                CardContent,
                { style: { display: 'flex', flexDirection: 'column', height: '100%' } },
                React.createElement('h3', { style: { color: 'var(--primary-color)', marginBottom: '20px' } }, 'Our Mission'),
                React.createElement(
                  'p',
                  { style: { color: 'var(--text-secondary)', lineHeight: '1.8', flex: 1 } },
                  'To provide innovative, high-quality steel frame construction solutions that exceed client expectations while maintaining sustainable and environmentally responsible practices. We strive to be the preferred choice for builders and developers seeking reliability, precision, and excellence.'
                )
              )
            )
          ),
          React.createElement(
            Grid,
            { item: true, xs: 12, md: 6 },
            React.createElement(
              Card,
              { className: 'card scale-up', style: { animationDelay: '0.2s', height: '100%' } },
              React.createElement(
                CardContent,
                { style: { display: 'flex', flexDirection: 'column', height: '100%' } },
                React.createElement('h3', { style: { color: 'var(--primary-color)', marginBottom: '20px' } }, 'Our Vision'),
                React.createElement(
                  'p',
                  { style: { color: 'var(--text-secondary)', lineHeight: '1.8', flex: 1 } },
                  'To be recognized as Queensland\'s leading steel frame construction company, setting industry standards for quality, innovation, and customer service. We envision a future where sustainable construction practices are the norm, and we lead the way in making that vision a reality.'
                )
              )
            )
          )
        )
      )
    ),
    // Values Section
    React.createElement(
      'section',
      { className: 'section' },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'section-title' },
          React.createElement('h2', null, 'Our Core Values')
        ),
        React.createElement(
          Grid,
          { container: true, spacing: 4 },
          values.map((value, index) =>
            React.createElement(
              Grid,
              { item: true, xs: 12, sm: 6, md: 3, key: index },
              React.createElement(
                Card,
                { className: 'card fade-in', style: { animationDelay: `${index * 0.15}s`, textAlign: 'center', height: '100%' } },
                React.createElement(
                  CardContent,
                  { style: { display: 'flex', flexDirection: 'column', height: '100%' } },
                  React.createElement(
                    'div',
                    { style: { marginBottom: '20px' } },
                    React.cloneElement(value.icon, { 
                      style: { fontSize: '3.5rem', color: 'var(--primary-color)' } 
                    })
                  ),
                  React.createElement('h4', { style: { color: 'var(--primary-color)', marginBottom: '15px' } }, value.title),
                  React.createElement('p', { style: { color: 'var(--text-secondary)', flex: 1 } }, value.description)
                )
              )
            )
          )
        )
      )
    ),
    // Why Choose Us Section - FIXED: Equal Card Heights
    React.createElement(
      'section',
      { className: 'section', style: { backgroundColor: 'var(--surface-color)' } },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'section-title' },
          React.createElement('h2', null, 'Why Choose Us?')
        ),
        React.createElement(
          Grid,
          { container: true, spacing: 4 },
          [
            'Experienced & certified professionals',
            'State-of-the-art manufacturing facilities',
            'Competitive pricing without compromising quality',
            'Timely project completion',
            'Comprehensive warranties',
            'Dedicated customer support'
          ].map((item, index) =>
            React.createElement(
              Grid,
              { item: true, xs: 12, sm: 6, md: 4, key: index },
              React.createElement(
                'div',
                { className: 'fade-in', style: { animationDelay: `${index * 0.1}s`, height: '100%' } },
                React.createElement(
                  'div',
                  { 
                    className: 'card',
                    style: { 
                      padding: '25px',
                      backgroundColor: 'var(--background-color)',
                      borderRadius: '8px',
                      borderLeft: '4px solid var(--primary-color)',
                      transition: 'transform 0.3s ease',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center'
                    },
                    onMouseEnter: (e) => e.currentTarget.style.transform = 'translateX(10px)',
                    onMouseLeave: (e) => e.currentTarget.style.transform = 'translateX(0)'
                  },
                  React.createElement(
                    'p',
                    { style: { color: 'var(--text-primary)', margin: 0, fontWeight: '500' } },
                    item
                  )
                )
              )
            )
          )
        )
      )
    )
  );
};

export default About;