import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BuildIcon from '@mui/icons-material/Build';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import RoofingIcon from '@mui/icons-material/Roofing';
import LayersIcon from '@mui/icons-material/Layers';
import '../styles/Home.css';
import s1 from '../assets/images/services/eng.jpg';
import s2 from '../assets/images/services/fab1.jpg';
import s3 from '../assets/images/services/supply1.jpg';
import prod1 from '../assets/images/products/prod1.jpg';
import prod2 from '../assets/images/products/prod2.jpg';
import prod3 from '../assets/images/products/prod3.jpg';

import p6_1 from '../assets/images/projects/ZARRAFFAS CURRUMBIN/1.jpg';
import p6_2 from '../assets/images/projects/ZARRAFFAS CURRUMBIN/2.jpg';
import p6_3 from '../assets/images/projects/ZARRAFFAS CURRUMBIN/3.jpg';
import p6_4 from '../assets/images/projects/ZARRAFFAS CURRUMBIN/4.jpg';
import p6_5 from '../assets/images/projects/ZARRAFFAS CURRUMBIN/5.jpg';
import p6_6 from '../assets/images/projects/ZARRAFFAS CURRUMBIN/6.jpg';
import p6_7 from '../assets/images/projects/ZARRAFFAS CURRUMBIN/7.jpg';
import p6_8 from '../assets/images/projects/ZARRAFFAS CURRUMBIN/8.jpg';
import p6_9 from '../assets/images/projects/ZARRAFFAS CURRUMBIN/9.jpg';
import p6_10 from '../assets/images/projects/ZARRAFFAS CURRUMBIN/10.jpg';

import p3_1 from '../assets/images/projects/MAIN BUILDING GEMLIFE/1.jpg';
import p3_2 from '../assets/images/projects/MAIN BUILDING GEMLIFE/2.jpg';
import p3_3 from '../assets/images/projects/MAIN BUILDING GEMLIFE/3.jpg';
import p3_4 from '../assets/images/projects/MAIN BUILDING GEMLIFE/4.jpg';
import p3_5 from '../assets/images/projects/MAIN BUILDING GEMLIFE/5.jpg';
import p3_6 from '../assets/images/projects/MAIN BUILDING GEMLIFE/6.jpg';

import p4_1 from '../assets/images/projects/TOWN HOUSES SOUTHPORT/1.jpg';
import p4_2 from '../assets/images/projects/TOWN HOUSES SOUTHPORT/2.jpg';
import p4_3 from '../assets/images/projects/TOWN HOUSES SOUTHPORT/3.jpg';
import p4_4 from '../assets/images/projects/TOWN HOUSES SOUTHPORT/4.jpg';
import p4_5 from '../assets/images/projects/TOWN HOUSES SOUTHPORT/5.jpg';
import p4_6 from '../assets/images/projects/TOWN HOUSES SOUTHPORT/6.jpg';
import p4_7 from '../assets/images/projects/TOWN HOUSES SOUTHPORT/7.jpg';
import p4_8 from '../assets/images/projects/TOWN HOUSES SOUTHPORT/8.jpg';
import p4_9 from '../assets/images/projects/TOWN HOUSES SOUTHPORT/9.jpg';
import p4_10 from '../assets/images/projects/TOWN HOUSES SOUTHPORT/10.jpg';

import img1 from '../assets/images/home-hero.jpg';
import img2 from '../assets/images/about.jpg';

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState(''); // 'service', 'product', or 'project'
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const services = [
    {
      icon: React.createElement(DesignServicesIcon),
      title: 'Engineering & Detailing',
      description: 'Meticulous engineering and detailing excellence ensuring precision and care in every design.',
      image: s1,
      fullContent: {
        sections: [
          {
            title: 'The Art of Engineering',
            content: 'Our commitment to engineering excellence is at the heart of what we do. We embrace the latest advancements in engineering technology and techniques to create steel structures that stand as paragons of strength and reliability.'
          },
          {
            title: 'Meticulous Detailing',
            content: 'In the realm of steel structures, every detail matters. That\'s why Queensland Steel Frame Solutions places a premium on meticulous detailing. We leave no bolt, no joint, and no connection to chance.'
          },
          {
            title: 'Sustainability by Design',
            content: 'In an age of environmental consciousness, our engineering and detailing process also encompasses sustainability. We incorporate eco-friendly practices into our designs, promoting energy efficiency and reducing waste.'
          }
        ]
      }
    },
    {
      icon: React.createElement(BuildIcon),
      title: 'Fabrication & Production',
      description: 'Advanced fabrication using the renowned Scottsdale system and our proprietary Quick Frame machine.',
      image: s2,
      fullContent: {
        intro: 'At Queensland Steel Frame Solutions, our dedication to superior construction solutions drives our commitment to innovation and excellence.',
        sections: [
          {
            title: 'Scottsdale System: Proven Excellence',
            content: 'The Scottsdale system stands as a testament to precision engineering and reliability. Widely recognized in the construction sector, this system embodies excellence in steel framing.'
          },
          {
            title: 'Quick Frame Innovation',
            content: 'Our proprietary Quick Frame system is a testament to our commitment to innovation and efficiency. The Quick Frame machine streamlines the fabrication of frames and trusses, ensuring high precision and reduced lead times.'
          }
        ]
      }
    },
    {
      icon: React.createElement(LocalShippingIcon),
      title: 'Supply & Installation',
      description: 'Queensland-wide supply and installation services delivering steel framing solutions to every corner of the state.',
      image: s3,
      fullContent: {
        intro: 'When it comes to steel framing solutions in Queensland, look no further than Queensland Steel Frame Solutions. We\'re your go-to choice for supply and installation services.',
        sections: [
          {
            title: 'Queensland-Wide Reach',
            content: 'From the bustling cities to the serene countryside, we serve all corners of Queensland. No location is too remote for our dedicated team.'
          },
          {
            title: 'Quality You Can Trust',
            content: 'We take pride in delivering steel framing solutions that not only meet but exceed industry standards. Your project\'s structural integrity is in safe hands with us.'
          }
        ]
      }
    }
  ];

  const products = [
    {
      icon: React.createElement(HomeWorkIcon),
      name: 'Wall Frames',
      category: 'Structural',
      description: 'Internal & external walls for ground and all upper levels. LGS screw fixed assembly wall frames designed to nominated wind codes.',
      image: prod1,
      fullContent: {
        intro: 'Our wall frames are engineered for both internal and external applications, designed to meet the highest standards of structural integrity and wind resistance.',
        sections: [
          {
            title: 'Design Specifications',
            content: 'LGS screw fixed assembly wall frames are available in 70mm or 90mm thickness, designed and fabricated to the nominated wind code including all nominated openings.'
          },
          {
            title: 'Applications',
            content: 'Suitable for ground level and all upper levels, our wall frames are ideal for residential, commercial, and industrial construction.'
          }
        ]
      }
    },
    {
      icon: React.createElement(RoofingIcon),
      name: 'Roof Trusses',
      category: 'Structural',
      description: 'Engineered roof trusses designed to nominated wind loads. Bolted assembly trusses can span up to ten meters.',
      image: prod2,
      fullContent: {
        intro: 'Our engineered roof trusses provide superior structural support while allowing for versatile architectural designs.',
        sections: [
          {
            title: 'Truss Specifications',
            content: 'Engineered roof trusses generally vary from 900mm to maximum 1200mm centres for sheet roof or tile roof applications. Designed to nominated wind loads.'
          },
          {
            title: 'Material & Construction',
            content: 'Our bolted assembly trusses are manufactured using 0.75mm or 0.95mm premium grade steel, capable of spanning up to ten meters on a single span length.'
          }
        ]
      }
    },
    {
      icon: React.createElement(LayersIcon),
      name: 'Floor Joists',
      category: 'Structural',
      description: 'Engineered trussed/webbed floor joists 355mm deep allowing ease of access for services.',
      image: prod3,
      fullContent: {
        intro: 'Our engineered floor joists provide exceptional strength and functionality, with integrated design features that simplify construction.',
        sections: [
          {
            title: 'Joist Design',
            content: 'Engineered trussed/webbed floor joists 355mm deep at maximum 450mm centres. The open webbed design allows ease of access for electrical, plumbing, and HVAC services.'
          },
          {
            title: 'Load Distribution',
            content: 'Our floor joists are engineered to provide optimal load distribution across the floor system, ensuring minimal deflection and a solid, stable platform.'
          }
        ]
      }
    }
  ];

  const projects = [
    {
      title: "ZARRAFFA'S CURRUMBIN",
      category: 'Commercial',
      location: 'Currumbin, QLD',
      year: '2024',
      description: 'Commercial steel frame construction for Zarraffa\'s Coffee location in Currumbin.',
      images: [p6_1, p6_2, p6_3, p6_4, p6_5, p6_6, p6_7, p6_8, p6_9, p6_10],
      scope: 'Commercial retail space, steel frame structure',
      fullContent: {
        sections: [
          {
            title: 'Project Overview',
            content: 'The Zarraffa\'s Currumbin project represents our commitment to delivering high-quality commercial steel frame solutions for the retail and hospitality sector.'
          },
          {
            title: 'Construction Details',
            content: 'We provided comprehensive steel frame construction including wall frames, roof trusses, and structural steel components with careful attention to aesthetic appeal and structural integrity.'
          }
        ]
      }
    },
    {
      title: 'TOWN HOUSES SOUTHPORT',
      category: 'Residential',
      location: 'Southport, QLD',
      year: '2024',
      description: 'Multi-unit townhouse development featuring modern steel frame construction.',
      images: [p4_1, p4_2, p4_3, p4_4, p4_5, p4_6, p4_7, p4_8, p4_9, p4_10],
      scope: 'Multi-unit residential development, 2-story townhouses',
      fullContent: {
        sections: [
          {
            title: 'Development Overview',
            content: 'The Southport Townhouses project showcases our expertise in multi-residential steel frame construction featuring multiple two-story townhouses.'
          },
          {
            title: 'Structural Design',
            content: 'Each townhouse was constructed using light gauge steel frames for walls, engineered roof trusses, and floor joists allowing for open-plan living areas.'
          }
        ]
      }
    },
    {
      title: 'MAIN BUILDING GEMLIFE',
      category: 'Commercial',
      location: 'Queensland',
      year: '2023',
      description: 'Large-scale commercial development for GemLife retirement community.',
      images: [p3_1, p3_2, p3_3, p3_4, p3_5, p3_6],
      scope: 'Community center, commercial-grade steel construction',
      fullContent: {
        sections: [
          {
            title: 'Community Development',
            content: 'The GemLife Main Building project represents one of our significant commercial undertakings in the retirement community sector.'
          },
          {
            title: 'Construction Scope',
            content: 'Our team delivered complete steel frame solutions including structural steel posts and beams for large open spaces, wall frames, and roof trusses.'
          }
        ]
      }
    }
  ];

  const handleOpenModal = (item, type) => {
    setSelectedItem(item);
    setModalType(type);
    setCurrentImageIndex(0);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedItem(null);
    setModalType('');
    setCurrentImageIndex(0);
  };

  const handlePrevImage = () => {
    if (selectedItem && selectedItem.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedItem.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedItem && selectedItem.images) {
      setCurrentImageIndex((prev) =>
        prev === selectedItem.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const renderModalContent = (item) => {
    if (!item.fullContent) return null;
    const { fullContent } = item;

    return (
      <div>
        {fullContent.intro && (
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '24px' }}>
            {fullContent.intro}
          </p>
        )}

        {fullContent.sections.map((section, index) => (
          <div key={index} style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '12px', fontSize: '1.2rem' }}>
              {section.title}
            </h3>
            {section.content && (
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '16px' }}>
                {section.content}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  };

  return React.createElement(
    'div',
    { className: 'home-page' },
    // Hero Section
    React.createElement(
      'section',
      { className: 'hero-section' },
      React.createElement(
        'div',
        {
          className: 'hero-background',
          style: { backgroundImage: `url(${img1})` }
        }
      ),
      React.createElement(
        'div',
        { className: 'hero-overlay' },
        React.createElement(
          'div',
          { className: 'container' },
          React.createElement(
            'div',
            { className: 'hero-content fade-in' },
            React.createElement('h1', { className: 'hero-title' }, 'Building Tomorrow with Steel Excellence'),
            React.createElement(
              'p',
              { className: 'hero-subtitle' },
              'Premium steel frame solutions for residential and commercial construction across Queensland'
            ),
            React.createElement(
              'div',
              { className: 'hero-buttons' },
              React.createElement(
                Link,
                { to: '/services', style: { textDecoration: 'none' } },
                React.createElement(
                  Button,
                  { variant: 'contained', size: 'large', className: 'btn btn-primary' },
                  'Our Services'
                )
              ),
              React.createElement(
                Link,
                { to: '/contact', style: { textDecoration: 'none' } },
                React.createElement(
                  Button,
                  { variant: 'outlined', size: 'large', className: 'btn btn-secondary hero-btn-secondary' },
                  'Get a Quote'
                )
              )
            )
          )
        )
      )
    ),
    // About Preview Section
    React.createElement(
      'section',
      { className: 'section about-preview' },
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
              { className: 'about-content slide-in-left' },
              React.createElement('h2', null, 'About Queensland Steel Frame Solutions'),
              React.createElement(
                'p',
                null,
                'With years of excellence in steel frame construction, we deliver innovative and sustainable building solutions across Queensland. Our commitment to quality and precision has made us a trusted name in the industry.'
              ),
              React.createElement(
                'p',
                null,
                'We specialize in both residential and commercial projects, providing end-to-end solutions from design to installation.'
              ),
              React.createElement(
                Link,
                { to: '/about', style: { textDecoration: 'none' } },
                React.createElement(
                  Button,
                  { variant: 'contained', className: 'btn btn-primary' },
                  'Learn More About Us'
                )
              )
            )
          ),
          React.createElement(
            Grid,
            { item: true, xs: 12, md: 6 },
            React.createElement(
              'div',
              { className: 'image-wrapper slide-in-right' },
              React.createElement('img', {
                src: img2,
                alt: 'Steel Frame Construction',
                className: 'about-image'
              })
            )
          )
        )
      )
    ),
    // Services Preview Section
    React.createElement(
      'section',
      { className: 'section services-preview' },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'section-title' },
          React.createElement('h2', null, 'Our Services')
        ),
        React.createElement(
          Grid,
          { container: true, spacing: 4 },
          services.map((service, index) =>
            React.createElement(
              Grid,
              { item: true, xs: 12, sm: 6, md: 4, key: index },
              React.createElement(
                Card,
                {
                  className: 'service-card scale-up',
                  style: {
                    animationDelay: `${index * 0.2}s`,
                    cursor: 'pointer',
                    height: '100%'
                  },
                  onClick: () => handleOpenModal(service, 'service')
                },
                React.createElement(CardMedia, {
                  component: 'img',
                  height: '240',
                  image: service.image,
                  alt: service.title,
                  style: {
                    objectFit: 'cover',
                    width: '100%',
                    minHeight: '240px',
                    maxHeight: '240px'
                  }
                }),
                React.createElement(
                  CardContent,
                  {
                    style: {
                      minHeight: '200px',
                      display: 'flex',
                      flexDirection: 'column'
                    }
                  },
                  React.createElement(
                    'div',
                    { className: 'service-icon' },
                    service.icon
                  ),
                  React.createElement('h3', { style: { marginBottom: '12px' } }, service.title),
                  React.createElement('p', { style: { flex: 1 } }, service.description)
                )
              )
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'section-cta', style: { marginBottom: '-80px' } },
          React.createElement(
            Link,
            { to: '/services', style: { textDecoration: 'none' } },
            React.createElement(
              Button,
              { variant: 'contained', className: 'btn btn-primary' },
              'View All Services'
            )
          )
        )
      )
    ),
    // Products Preview Section
    React.createElement(
      'section',
      { className: 'section products-preview', style: { backgroundColor: 'var(--surface-color)' } },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'section-title' },
          React.createElement('h2', null, 'Our Products')
        ),
        React.createElement(
          Grid,
          { container: true, spacing: 4 },
          products.map((product, index) =>
            React.createElement(
              Grid,
              { item: true, xs: 12, sm: 6, md: 4, key: index },
              React.createElement(
                Card,
                {
                  className: 'service-card scale-up',
                  style: {
                    animationDelay: `${index * 0.2}s`,
                    cursor: 'pointer',
                    height: '100%'
                  },
                  onClick: () => handleOpenModal(product, 'product')
                },
                React.createElement(CardMedia, {
                  component: 'img',
                  height: '240',
                  image: product.image,
                  alt: product.name,
                  style: {
                    objectFit: 'cover',
                    width: '100%',
                    minHeight: '240px',
                    maxHeight: '240px'
                  }
                }),
                React.createElement(
                  CardContent,
                  {
                    style: {
                      minHeight: '220px',
                      display: 'flex',
                      flexDirection: 'column'
                    }
                  },
                  React.createElement(
                    'div',
                    { style: { marginBottom: '12px' } },
                    React.createElement(Chip, {
                      label: product.category,
                      size: 'small',
                      sx: {
                        backgroundColor: 'var(--primary-color)',
                        color: '#ffffff',
                        fontWeight: '500'
                      }
                    })
                  ),
                  React.createElement(
                    'div',
                    { className: 'service-icon' },
                    product.icon
                  ),
                  React.createElement('h3', { style: { marginBottom: '12px' } }, product.name),
                  React.createElement('p', { style: { flex: 1 } }, product.description)
                )
              )
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'section-cta' },
          React.createElement(
            Link,
            { to: '/products', style: { textDecoration: 'none' } },
            React.createElement(
              Button,
              { variant: 'contained', className: 'btn btn-primary' },
              'View All Products'
            )
          )
        )
      )
    ),
    // Projects Preview Section
    React.createElement(
      'section',
      { className: 'section projects-preview' },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'section-title' },
          React.createElement('h2', null, 'Featured Projects')
        ),
        React.createElement(
          Grid,
          { container: true, spacing: 4 },
          projects.map((project, index) =>
            React.createElement(
              Grid,
              { item: true, xs: 12, sm: 6, md: 4, key: index },
              React.createElement(
                Card,
                {
                  className: 'project-card fade-in',
                  style: {
                    animationDelay: `${index * 0.2}s`,
                    transition: 'box-shadow 0.3s ease',
                    cursor: 'pointer'
                  },
                  onClick: () => handleOpenModal(project, 'project'),
                  onMouseEnter: (e) => {
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.boxShadow = '';
                  }
                },
                React.createElement(
                  'div',
                  { className: 'image-wrapper' },
                  React.createElement(CardMedia, {
                    component: 'img',
                    height: '240',
                    image: project.images[0],
                    alt: project.title,
                    style: {
                      transition: 'none',
                      objectFit: 'cover',
                      width: '100%',
                      minHeight: '240px',
                      maxHeight: '240px'
                    }
                  })
                ),
                React.createElement(
                  CardContent,
                  {
                    style: {
                      minHeight: '180px',
                      display: 'flex',
                      flexDirection: 'column'
                    }
                  },
                  React.createElement(
                    'div',
                    { style: { marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
                    React.createElement(Chip, {
                      label: project.category,
                      size: 'small',
                      sx: {
                        backgroundColor: 'var(--primary-color)',
                        color: '#ffffff',
                        fontWeight: '500'
                      }
                    }),
                    React.createElement(
                      'span',
                      { style: { color: 'var(--text-secondary)', fontSize: '0.85rem' } },
                      project.year
                    )
                  ),
                  React.createElement('h3', { style: { marginBottom: '8px' } }, project.title),
                  React.createElement('p', { className: 'project-location', style: { marginTop: 'auto' } }, '📍 ' + project.location)
                )
              )
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'section-cta' },
          React.createElement(
            Link,
            { to: '/projects', style: { textDecoration: 'none' } },
            React.createElement(
              Button,
              { variant: 'contained', className: 'btn btn-primary' },
              'View All Projects'
            )
          )
        )
      )
    ),
    // CTA Section
    React.createElement(
      'section',
      { className: 'cta-section' },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'cta-content' },
          React.createElement('h2', null, 'Ready to Start Your Project?'),
          React.createElement('p', null, 'Contact us today for a free consultation and quote'),
          React.createElement(
            Link,
            { to: '/contact', style: { textDecoration: 'none' } },
            React.createElement(
              Button,
              { variant: 'contained', size: 'large', className: 'btn btn-primary' },
              'Get in Touch'
            )
          )
        )
      )
    ),
    // Universal Modal
    selectedItem && React.createElement(
      Dialog,
      {
        open: openModal,
        onClose: handleCloseModal,
        maxWidth: 'md',
        fullWidth: true,
        PaperProps: {
          sx: {
            backgroundColor: 'var(--surface-color)',
            color: 'var(--text-primary)'
          }
        }
      },
      React.createElement(
        DialogTitle,
        {
          sx: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pb: 2,
            borderBottom: '1px solid var(--border-color)'
          }
        },
        React.createElement(
          'span',
          { style: { color: 'var(--primary-color)', fontSize: '1.5rem', fontWeight: '600' } },
          selectedItem.title || selectedItem.name
        ),
        React.createElement(
          IconButton,
          { onClick: handleCloseModal, sx: { color: 'var(--text-secondary)' } },
          React.createElement(CloseIcon)
        )
      ),
      React.createElement(
        DialogContent,
        { sx: { p: 3, mt: 2 } },
        // Image Slideshow for Projects
        modalType === 'project' && selectedItem.images && React.createElement(
          Box,
          { sx: { mb: 3, position: 'relative' } },
          React.createElement(
            Box,
            { sx: { position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderRadius: '8px' } },
            React.createElement('img', {
              src: selectedItem.images[currentImageIndex],
              alt: `${selectedItem.title} - View ${currentImageIndex + 1}`,
              style: {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }
            }),
            React.createElement(
              IconButton,
              {
                onClick: handlePrevImage,
                sx: {
                  position: 'absolute',
                  left: 10,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,1)' }
                }
              },
              React.createElement(ArrowBackIosNewIcon)
            ),
            React.createElement(
              IconButton,
              {
                onClick: handleNextImage,
                sx: {
                  position: 'absolute',
                  right: 10,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,1)' }
                }
              },
              React.createElement(ArrowForwardIosIcon)
            ),
            React.createElement(
              Box,
              {
                sx: {
                  position: 'absolute',
                  bottom: 10,
                  right: 10,
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  color: '#fff',
                  padding: '4px 12px',
                  borderRadius: '4px',
                  fontSize: '0.85rem'
                }
              },
              `${currentImageIndex + 1} / ${selectedItem.images.length}`
            )
          ),
          React.createElement(
            Box,
            { sx: { display: 'flex', gap: 1, mt: 2, overflowX: 'auto' } },
            selectedItem.images.map((image, idx) =>
              React.createElement(
                Box,
                {
                  key: idx,
                  onClick: () => setCurrentImageIndex(idx),
                  sx: {
                    minWidth: '80px',
                    height: '60px',
                    border: idx === currentImageIndex ? '3px solid var(--primary-color)' : '2px solid var(--border-color)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    opacity: idx === currentImageIndex ? 1 : 0.6,
                    transition: 'all 0.3s ease',
                    '&:hover': { opacity: 1 }
                  }
                },
                React.createElement('img', {
                  src: image,
                  alt: `Thumbnail ${idx + 1}`,
                  style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }
                })
              )
            )
          )
        ),
        // Single Image for Services and Products
        (modalType === 'service' || modalType === 'product') && React.createElement(
          Box,
          { sx: { mb: 3 } },
          React.createElement('img', {
            src: selectedItem.image,
            alt: selectedItem.title || selectedItem.name,
            style: {
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '8px'
            }
          })
        ),
        // Additional Info for Projects
        modalType === 'project' && React.createElement(
          Box,
          { sx: { mb: 2, display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' } },
          React.createElement(Chip, {
            label: selectedItem.category,
            size: 'small',
            sx: {
              backgroundColor: 'var(--primary-color)',
              color: '#ffffff'
            }
          }),
          React.createElement(
            'span',
            { style: { color: 'var(--text-secondary)' } },
            '📍 ' + selectedItem.location
          ),
          React.createElement(
            'span',
            { style: { color: 'var(--text-secondary)' } },
            '📅 ' + selectedItem.year
          )
        ),
        // Scope for Projects
        modalType === 'project' && React.createElement(
          'p',
          { style: { color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '0.95rem' } },
          React.createElement('strong', { style: { color: 'var(--primary-color)' } }, 'Scope: '),
          selectedItem.scope
        ),
        // Category for Products
        modalType === 'product' && React.createElement(
          Box,
          { sx: { mb: 2 } },
          React.createElement(Chip, {
            label: selectedItem.category,
            size: 'small',
            sx: {
              backgroundColor: 'var(--primary-color)',
              color: '#ffffff'
            }
          })
        ),
        // Description
        React.createElement(
          'p',
          { style: { color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '24px' } },
          selectedItem.description
        ),
        // Full Content
        renderModalContent(selectedItem)
      ),
      React.createElement(
        DialogActions,
        { sx: { p: 3, borderTop: '1px solid var(--border-color)' } },
        React.createElement(
          Button,
          {
            onClick: handleCloseModal,
            sx: {
              color: 'var(--text-secondary)',
              '&:hover': {
                backgroundColor: 'rgba(128, 128, 128, 0.1)'
              }
            }
          },
          'Close'
        ),
        React.createElement(
          Button,
          {
            variant: 'contained',
            onClick: () => window.location.href = '/contact',
            sx: {
              background: 'linear-gradient(135deg, var(--primary-color), var(--primary-light))',
              color: '#ffffff',
              '&:hover': {
                background: 'linear-gradient(135deg, var(--primary-dark), var(--primary-color))',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px var(--shadow-hover)'
              }
            }
          },
          modalType === 'project' ? 'Start Your Project' : 'Get a Quote'
        )
      )
    )
  );
};

export default Home;