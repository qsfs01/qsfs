import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ContactForm from '../components/ContactForm';

const ContactUs = () => {
    const contactInfo = [
        {
            icon: React.createElement(LocationOnIcon),
            title: 'Visit Us',
            content: ['Yeerongpilly QLD, Australia', 'Head Office Location']
        },
        {
            icon: React.createElement(PhoneIcon),
            title: 'Call Us',
            content: ['+61 735 328 696']
        },
        {
            icon: React.createElement(EmailIcon),
            title: 'Email Us',
            content: ['om@qsfs.com.au', 'admin@qsfs.com.au']
        },
        {
            icon: React.createElement(AccessTimeIcon),
            title: 'Business Hours',
            content: ['Monday - Friday: 7:00 AM - 4:00 PM', 'Saturday: 7:00 AM - 4:00 PM']
        }
    ];

    return React.createElement(
        'div',
        { className: 'contact-page' },
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
                    React.createElement('h1', null, 'Contact Us'),
                    React.createElement('p', null, 'Get in Touch for Your Next Project')
                )
            )
        ),
        // Contact Form and Info Section
        React.createElement(
            'section',
            { className: 'section' },
            React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    Grid,
                    { container: true, spacing: 5, alignItems: 'stretch' },
                    // Contact Form
                    React.createElement(
                        Grid,
                        { item: true, xs: 12, md: 7 },
                        React.createElement(
                            Card,
                            { className: 'card slide-in-left', style: { height: '100%' } },
                            React.createElement(
                                CardContent,
                                { style: { padding: '40px', height: '100%', display: 'flex', flexDirection: 'column' } },
                                React.createElement(
                                    'h2',
                                    { style: { color: 'var(--primary-color)', marginBottom: '10px' } },
                                    'Send Us a Message'
                                ),
                                React.createElement(
                                    'p',
                                    { style: { color: 'var(--text-secondary)', marginBottom: '30px' } },
                                    'Fill out the form below and we\'ll get back to you as soon as possible'
                                ),
                                React.createElement(ContactForm)
                            )
                        )
                    ),
                    // Contact Information
                    React.createElement(
                        Grid,
                        { item: true, xs: 12, md: 5 },
                        React.createElement(
                            'div',
                            { className: 'slide-in-right', style: { height: '100%', display: 'flex', flexDirection: 'column' } },
                            React.createElement(
                                'h2',
                                { style: { color: 'var(--primary-color)', marginBottom: '30px' } },
                                'Contact Information'
                            ),
                            React.createElement(
                                'div',
                                { style: { display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 } },
                                contactInfo.map((info, index) =>
                                    React.createElement(
                                        Card,
                                        {
                                            key: index,
                                            className: 'card',
                                            style: {
                                                transition: 'all 0.3s ease',
                                                flex: 1
                                            },
                                            onMouseEnter: (e) => {
                                                e.currentTarget.style.transform = 'translateX(10px)';
                                            },
                                            onMouseLeave: (e) => {
                                                e.currentTarget.style.transform = 'translateX(0)';
                                            }
                                        },
                                        React.createElement(
                                            CardContent,
                                            { style: { display: 'flex', alignItems: 'flex-start', gap: '20px' } },
                                            React.createElement(
                                                'div',
                                                {
                                                    style: {
                                                        width: '50px',
                                                        height: '50px',
                                                        borderRadius: '50%',
                                                        backgroundColor: 'var(--primary-color)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: 0
                                                    }
                                                },
                                                React.cloneElement(info.icon, {
                                                    style: { color: '#ffffff', fontSize: '1.5rem' }
                                                })
                                            ),
                                            React.createElement(
                                                'div',
                                                { style: { flex: 1, minWidth: 0 } },
                                                React.createElement(
                                                    'h4',
                                                    { style: { color: 'var(--primary-color)', marginBottom: '8px' } },
                                                    info.title
                                                ),
                                                info.content.map((line, i) =>
                                                    React.createElement(
                                                        'p',
                                                        {
                                                            key: i,
                                                            style: {
                                                                color: 'var(--text-secondary)',
                                                                margin: '4px 0',
                                                                fontSize: info.title === 'Email Us' ? '0.85rem' : '0.95rem',
                                                                wordBreak: 'break-word',
                                                                overflowWrap: 'break-word',
                                                                lineHeight: '1.4'
                                                            }
                                                        },
                                                        line
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        ),
        // Map Section
        React.createElement(
            'section',
            {
                className: 'section',
                style: { backgroundColor: 'var(--surface-color)', paddingTop: '60px', paddingBottom: '60px' }
            },
            React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'div',
                    {
                        style: {
                            width: '100%',
                            backgroundColor: 'var(--background-color)',
                            borderRadius: '12px',
                            border: '2px solid var(--border-color)',
                            overflow: 'hidden'
                        }
                    },
                    // Google Map Embed
                    React.createElement(
                        'iframe',
                        {
                            src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3538.0887300326185!2d153.01240667546105!3d-27.52870237628541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDMxJzQzLjMiUyAxNTPCsDAwJzUzLjkiRQ!5e0!3m2!1sen!2sin!4v1759469878554!5m2!1sen!2sin",
                            width: "100%",
                            height: "450",
                            style: { border: "0", display: 'block' },
                            allowFullScreen: true,
                            loading: "lazy",
                            referrerPolicy: "no-referrer-when-downgrade"
                        }
                    ),
                    // Title + clickable link
                    React.createElement(
                        'div',
                        { style: { textAlign: 'center', padding: '20px', backgroundColor: 'var(--background-color)' } },
                        React.createElement(LocationOnIcon, {
                            style: { fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '10px' }
                        }),
                        React.createElement(
                            'h3',
                            { style: { color: 'var(--text-primary)', marginBottom: '10px' } },
                            'Find Us Here'
                        ),
                        React.createElement(
                            'p',
                            { style: { color: 'var(--text-secondary)', marginBottom: '10px' } },
                            '193/49 Station Rd, Yeerongpilly QLD 4105, Australia'
                        ),
                        React.createElement(
                            'a',
                            {
                                href: "https://www.google.com/maps/place/27%C2%B031'43.3%22S+153%C2%B000'53.9%22E/@-27.5287024,153.0124067,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-27.5287024!4d153.0149816?entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: { 
                                    color: 'var(--primary-color)', 
                                    textDecoration: 'underline',
                                    fontSize: '1rem',
                                    fontWeight: '500'
                                }
                            },
                            'Open in Google Maps'
                        )
                    )
                )
            )
        )
    );
};

export default ContactUs;