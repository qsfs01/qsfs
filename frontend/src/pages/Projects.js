import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// HOUSE EXTENSION ARUNDEL - Project 1
import p1_1 from '../assets/images/projects/HOUSE EXTENSION ARUNDEL/1.jpg';
import p1_2 from '../assets/images/projects/HOUSE EXTENSION ARUNDEL/2.jpg';
import p1_3 from '../assets/images/projects/HOUSE EXTENSION ARUNDEL/3.jpg';
import p1_4 from '../assets/images/projects/HOUSE EXTENSION ARUNDEL/4.jpg';
import p1_5 from '../assets/images/projects/HOUSE EXTENSION ARUNDEL/5.jpg';
import p1_6 from '../assets/images/projects/HOUSE EXTENSION ARUNDEL/6.jpg';
import p1_7 from '../assets/images/projects/HOUSE EXTENSION ARUNDEL/7.jpg';
import p1_8 from '../assets/images/projects/HOUSE EXTENSION ARUNDEL/8.jpg';
import p1_9 from '../assets/images/projects/HOUSE EXTENSION ARUNDEL/9.jpg';
import p1_10 from '../assets/images/projects/HOUSE EXTENSION ARUNDEL/10.jpg';

// HOUSE SPRING MOUNTAIN - Project 2
import p2_1 from '../assets/images/projects/HOUSE SPRING MOUNTAIN/1.jpg';
import p2_2 from '../assets/images/projects/HOUSE SPRING MOUNTAIN/2.jpg';
import p2_3 from '../assets/images/projects/HOUSE SPRING MOUNTAIN/3.jpg';
import p2_4 from '../assets/images/projects/HOUSE SPRING MOUNTAIN/4.jpg';
import p2_5 from '../assets/images/projects/HOUSE SPRING MOUNTAIN/5.jpg';
import p2_6 from '../assets/images/projects/HOUSE SPRING MOUNTAIN/6.jpg';
import p2_7 from '../assets/images/projects/HOUSE SPRING MOUNTAIN/7.jpg';
import p2_8 from '../assets/images/projects/HOUSE SPRING MOUNTAIN/8.jpg';
import p2_9 from '../assets/images/projects/HOUSE SPRING MOUNTAIN/9.jpg';

// MAIN BUILDING GEMLIFE - Project 3
import p3_1 from '../assets/images/projects/MAIN BUILDING GEMLIFE/1.jpg';
import p3_2 from '../assets/images/projects/MAIN BUILDING GEMLIFE/2.jpg';
import p3_3 from '../assets/images/projects/MAIN BUILDING GEMLIFE/3.jpg';
import p3_4 from '../assets/images/projects/MAIN BUILDING GEMLIFE/4.jpg';
import p3_5 from '../assets/images/projects/MAIN BUILDING GEMLIFE/5.jpg';
import p3_6 from '../assets/images/projects/MAIN BUILDING GEMLIFE/6.jpg';

// TOWN HOUSES SOUTHPORT - Project 4
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

// TWO STOREY HOUSE PALLARA - Project 5
import p5_1 from '../assets/images/projects/TWO STOREY HOUSE PALLARA/1.jpg';
import p5_2 from '../assets/images/projects/TWO STOREY HOUSE PALLARA/2.jpg';
import p5_3 from '../assets/images/projects/TWO STOREY HOUSE PALLARA/3.jpg';
import p5_4 from '../assets/images/projects/TWO STOREY HOUSE PALLARA/4.jpg';
import p5_5 from '../assets/images/projects/TWO STOREY HOUSE PALLARA/5.jpg';
import p5_6 from '../assets/images/projects/TWO STOREY HOUSE PALLARA/6.jpg';
import p5_7 from '../assets/images/projects/TWO STOREY HOUSE PALLARA/7.jpg';
import p5_8 from '../assets/images/projects/TWO STOREY HOUSE PALLARA/8.jpg';
import p5_9 from '../assets/images/projects/TWO STOREY HOUSE PALLARA/9.jpg';
import p5_10 from '../assets/images/projects/TWO STOREY HOUSE PALLARA/10.jpg';

// ZARRAFFA'S CURRUMBIN - Project 6
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

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "ZARRAFFA'S CURRUMBIN",
      category: 'Commercial',
      location: 'Currumbin, QLD',
      year: '2024',
      description: 'Commercial steel frame construction for Zarraffa\'s Coffee location in Currumbin. This project showcases our expertise in retail and hospitality construction with modern design elements.',
      images: [p6_1, p6_2, p6_3, p6_4, p6_5, p6_6, p6_7, p6_8, p6_9, p6_10],
      scope: 'Commercial retail space, steel frame structure',
      fullContent: {
        sections: [
          {
            title: 'Project Overview',
            content: 'The Zarraffa\'s Currumbin project represents our commitment to delivering high-quality commercial steel frame solutions for the retail and hospitality sector. Located in the vibrant Currumbin area, this modern coffee shop required precision engineering and efficient construction timelines.'
          },
          {
            title: 'Construction Details',
            content: 'We provided comprehensive steel frame construction including wall frames, roof trusses, and structural steel components. The design incorporated open-plan spaces ideal for customer flow and service efficiency, with careful attention to aesthetic appeal and structural integrity.'
          },
          {
            title: 'Key Features',
            points: [
              'Modern steel frame design for commercial retail',
              'Quick construction timeline to minimize business disruption',
              'Weather-resistant and durable materials',
              'Compliance with commercial building codes',
              'Energy-efficient structural design'
            ]
          },
          {
            title: 'Project Outcome',
            content: 'Successfully completed on schedule, the Zarraffa\'s Currumbin location now serves as a welcoming community space. Our steel frame construction provided the durability and modern aesthetic required for this high-traffic retail environment.'
          }
        ]
      }
    },
    {
      title: 'TOWN HOUSES SOUTHPORT',
      category: 'Residential',
      location: 'Southport, QLD',
      year: '2024',
      description: 'Multi-unit townhouse development featuring modern steel frame construction. Each townhouse incorporates contemporary design with efficient structural solutions.',
      images: [p4_1, p4_2, p4_3, p4_4, p4_5, p4_6, p4_7, p4_8, p4_9, p4_10],
      scope: 'Multi-unit residential development, 2-story townhouses',
      fullContent: {
        sections: [
          {
            title: 'Development Overview',
            content: 'The Southport Townhouses project showcases our expertise in multi-residential steel frame construction. This modern development features multiple two-story townhouses built with precision-engineered steel frames, offering homeowners durability, quality, and contemporary living spaces.'
          },
          {
            title: 'Structural Design',
            content: 'Each townhouse was constructed using light gauge steel frames for walls, engineered roof trusses, and floor joists. The steel frame construction allowed for open-plan living areas, maximizing space efficiency while maintaining structural integrity throughout the development.'
          },
          {
            title: 'Construction Highlights',
            points: [
              'Multiple two-story townhouse units',
              'Modern architectural design with steel framing',
              'Energy-efficient construction methods',
              'Durable and low-maintenance materials',
              'Optimized floor plans for contemporary living',
              'Quick build time with prefabricated components'
            ]
          },
          {
            title: 'Quality & Standards',
            content: 'All townhouses were built to exceed Australian building standards, with comprehensive engineering certificates provided. The steel frame construction ensures long-term durability and minimal maintenance, making these townhouses ideal for modern families.'
          }
        ]
      }
    },
    {
      title: 'TWO STOREY HOUSE PALLARA',
      category: 'Residential',
      location: 'Pallara, QLD',
      year: '2023',
      description: 'Custom two-storey residential home featuring advanced steel frame construction with modern architectural elements and sustainable building practices.',
      images: [p5_1, p5_2, p5_3, p5_4, p5_5, p5_6, p5_7, p5_8, p5_9, p5_10],
      scope: 'Custom 2-story residence, steel frame construction',
      fullContent: {
        sections: [
          {
            title: 'Custom Home Design',
            content: 'This stunning two-storey residence in Pallara demonstrates our capability in delivering custom steel frame solutions for discerning homeowners. The project required careful engineering to accommodate the client\'s specific design requirements while ensuring structural excellence.'
          },
          {
            title: 'Engineering Excellence',
            content: 'The home features precision-engineered wall frames for both ground and upper levels, custom roof trusses designed for the specific pitch requirements, and floor joists engineered to support the second story. All components were fabricated to exact specifications and installed by our professional team.'
          },
          {
            title: 'Project Features',
            points: [
              'Custom two-storey steel frame design',
              'Open-plan living areas with high ceilings',
              'Second-story addition with balconies',
              'Modern architectural styling',
              'Energy-efficient construction',
              'Comprehensive engineering certification'
            ]
          },
          {
            title: 'Completion',
            content: 'The Pallara residence was completed to the highest standards, with the homeowners praising the quality of workmanship and attention to detail. The steel frame construction provides a solid, durable foundation that will stand the test of time.'
          }
        ]
      }
    },
    {
      title: 'MAIN BUILDING GEMLIFE',
      category: 'Commercial',
      location: 'Queensland',
      year: '2023',
      description: 'Large-scale commercial development for GemLife retirement community. Comprehensive steel frame construction for main community building and facilities.',
      images: [p3_1, p3_2, p3_3, p3_4, p3_5, p3_6],
      scope: 'Community center, commercial-grade steel construction',
      fullContent: {
        sections: [
          {
            title: 'Community Development',
            content: 'The GemLife Main Building project represents one of our significant commercial undertakings in the retirement community sector. This comprehensive development required extensive steel frame construction to create a welcoming, functional community center for residents.'
          },
          {
            title: 'Construction Scope',
            content: 'Our team delivered complete steel frame solutions including structural steel posts and beams for large open spaces, wall frames for various functional areas, roof trusses for the expansive building, and floor systems to support multiple levels. The project demanded precision and coordination across all construction phases.'
          },
          {
            title: 'Technical Specifications',
            points: [
              'Large-span structural steel framework',
              'Commercial-grade steel components',
              'Multiple functional spaces and amenities',
              'Accessibility-focused design',
              'Weather-resistant construction',
              'Full engineering design and inspection certificates'
            ]
          },
          {
            title: 'Project Success',
            content: 'The completed GemLife Main Building now serves as the heart of the retirement community, providing residents with exceptional facilities and gathering spaces. Our steel frame construction ensures the building will serve the community for decades to come.'
          }
        ]
      }
    },
    {
      title: 'HOUSE SPRING MOUNTAIN',
      category: 'Residential',
      location: 'Spring Mountain, QLD',
      year: '2023',
      description: 'Modern family home featuring comprehensive steel frame construction with contemporary design and high-quality finishes.',
      images: [p2_1, p2_2, p2_3, p2_4, p2_5, p2_6, p2_7, p2_8, p2_9],
      scope: 'Single-family residence, complete steel frame package',
      fullContent: {
        sections: [
          {
            title: 'Residential Excellence',
            content: 'The Spring Mountain residence showcases our expertise in delivering complete residential steel frame solutions. This project encompassed all aspects of steel frame construction from foundation to roof, providing the homeowners with a durable, modern home built to last.'
          },
          {
            title: 'Complete Package Delivery',
            content: 'We provided our comprehensive supply and installation package for this project, including subfloor system with C-section joists and bearers, wall frames for all levels with in-built K-braces, floor joists with integrated service access, roof trusses engineered for the specific pitch, structural steel posts and beams, and all necessary fixings and tie-downs.'
          },
          {
            title: 'Construction Features',
            points: [
              'Full steel frame construction package',
              'Modern architectural design',
              'Energy-efficient building envelope',
              'Spacious open-plan living areas',
              'High-quality materials and workmanship',
              'Professional installation by certified team'
            ]
          },
          {
            title: 'Client Satisfaction',
            content: 'The homeowners were extremely satisfied with the quality and efficiency of our work. The steel frame construction provided them with a solid, reliable home that meets all their needs while offering the durability and low maintenance benefits of steel framing.'
          }
        ]
      }
    },
    {
      title: 'HOUSE EXTENSION ARUNDEL',
      category: 'Residential',
      location: 'Arundel, QLD',
      year: '2022',
      description: 'Residential extension project featuring steel frame construction seamlessly integrated with existing structure. Added living space and modern amenities.',
      images: [p1_1, p1_2, p1_3, p1_4, p1_5, p1_6, p1_7, p1_8, p1_9, p1_10],
      scope: 'Home extension, second-story addition',
      fullContent: {
        sections: [
          {
            title: 'Extension Expertise',
            content: 'The Arundel House Extension project demonstrates our capability in seamlessly integrating steel frame additions with existing residential structures. This project required careful planning and precision to ensure the new extension complemented the original home while providing additional living space.'
          },
          {
            title: 'Integration Challenges',
            content: 'Our team successfully engineered and installed steel frames that connected perfectly with the existing structure. The extension included new wall frames, roof trusses to match the existing pitch, floor system for additional support, and structural steel where needed for load-bearing requirements.'
          },
          {
            title: 'Extension Benefits',
            points: [
              'Seamless integration with existing home',
              'Additional living space and bedrooms',
              'Modern steel frame construction',
              'Minimal disruption during construction',
              'Enhanced home value and functionality',
              'Full engineering compliance and certification'
            ]
          },
          {
            title: 'Successful Outcome',
            content: 'The completed extension has transformed the Arundel home, providing the family with much-needed additional space. Our steel frame construction ensures the extension is as durable and reliable as the original structure, with the added benefits of modern building techniques.'
          }
        ]
      }
    }
  ];

  const categories = ['All', 'Residential', 'Commercial'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  const getCategoryColor = (category) => {
    return category === 'Residential' ? 'primary' : 'secondary';
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const renderModalContent = (project) => {
    const { fullContent } = project;

    return (
      <div>
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
            {section.points && (
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '20px' }}>
                {section.points.map((point, i) => (
                  <li key={i} style={{ marginBottom: '8px' }}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
  <div className='projects-page'>
    {/* Hero Section */}
    <section className='page-hero'>
      <div className='container'>
        <div className='page-hero-content fade-in'>
          <h1>Our Projects</h1>
          <p>Showcasing Excellence in Steel Frame Construction</p>
        </div>
      </div>
    </section>

    {/* Filter Section */}
    <section className='section'>
      <div className='container'>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '40px'
        }}>
          <Box sx={{
            display: 'flex',
            gap: { xs: 1, sm: 2 },
            flexWrap: 'wrap',
            justifyContent: 'center',
            maxWidth: '100%'
          }}>
            {categories.map(category => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant="outlined"
                size="medium"
                sx={{
                  backgroundColor: filter === category ? 'var(--primary-color)' : 'transparent',
                  color: filter === category ? '#ffffff' : 'var(--text-primary)',
                  borderColor: 'var(--primary-color)',
                  minWidth: { xs: '90px', sm: '120px' },
                  flex: { xs: '0 0 auto', sm: '0 0 auto' },
                  whiteSpace: 'nowrap',
                  fontSize: { xs: '0.85rem', sm: '1rem' },
                  padding: { xs: '8px 16px', sm: '10px 24px' },
                  '&:hover': {
                    backgroundColor: 'var(--primary-light)',
                    color: '#ffffff',
                    borderColor: 'var(--primary-color)'
                  }
                }}
              >
                {category}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {filteredProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div
                onClick={() => handleOpenModal(project)}
                style={{
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  backgroundColor: 'var(--surface-color)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px var(--shadow-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Chip
                      label={project.category}
                      size="small"
                      sx={{
                        backgroundColor: 'var(--primary-color)',
                        color: '#ffffff',
                        fontWeight: '500'
                      }}
                    />
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                      {project.year}
                    </span>
                  </div>
                  <h3 style={{ color: 'var(--primary-color)', marginBottom: '8px', fontSize: '1.2rem' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '8px' }}>
                    📍 {project.location}
                  </p>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '15px', flex: 1, fontSize: '0.95rem' }}>
                    {project.description.substring(0, 100)}...
                  </p>
                  <div style={{
                    marginTop: 'auto',
                    paddingTop: '15px',
                    borderTop: '1px solid var(--border-color)'
                  }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0, fontStyle: 'italic' }}>
                      <strong>Scope:</strong> {project.scope}
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>

    {/* Project Modal */}
    {selectedProject && (
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
        scroll="paper"
        PaperProps={{
          sx: {
            backgroundColor: 'var(--surface-color)',
            color: 'var(--text-primary)'
          }
        }}
      >
        <DialogTitle sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pb: 2,
          borderBottom: '1px solid var(--border-color)'
        }}>
          <span style={{ color: 'var(--primary-color)', fontSize: '1.5rem', fontWeight: '600' }}>
            {selectedProject.title}
          </span>
          <IconButton onClick={handleCloseModal} sx={{ color: 'var(--text-secondary)' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 3, mt: 2 }}>
          {/* Image Slideshow */}
          <Box sx={{ mb: 3, position: 'relative' }}>
            <Box sx={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderRadius: '8px' }}>
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} - View ${currentImageIndex + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              {/* Navigation Arrows */}
              <IconButton
                onClick={handlePrevImage}
                sx={{
                  position: 'absolute',
                  left: 10,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,1)' }
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton
                onClick={handleNextImage}
                sx={{
                  position: 'absolute',
                  right: 10,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,1)' }
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>

              {/* Image Counter */}
              <Box sx={{
                position: 'absolute',
                bottom: 10,
                right: 10,
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: '#fff',
                padding: '4px 12px',
                borderRadius: '4px',
                fontSize: '0.85rem'
              }}>
                {currentImageIndex + 1} / {selectedProject.images.length}
              </Box>
            </Box>

            {/* Thumbnails */}
            <Box sx={{ display: 'flex', gap: 1, mt: 2, overflowX: 'auto' }}>
              {selectedProject.images.map((image, idx) => (
                <Box
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  sx={{
                    minWidth: '80px',
                    height: '60px',
                    border: idx === currentImageIndex ? '3px solid var(--primary-color)' : '2px solid var(--border-color)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    opacity: idx === currentImageIndex ? 1 : 0.6,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      opacity: 1
                    }
                  }}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${idx + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>

          {/* Project Info */}
          <Box sx={{ mb: 2, display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            <Chip
              label={selectedProject.category}
              size="small"
              sx={{
                backgroundColor: 'var(--primary-color)',
                color: '#ffffff'
              }}
            />
            <span style={{ color: 'var(--text-secondary)' }}>
              📍 {selectedProject.location}
            </span>
            <span style={{ color: 'var(--text-secondary)' }}>
              📅 {selectedProject.year}
            </span>
          </Box>

          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '0.95rem' }}>
            <strong style={{ color: 'var(--primary-color)' }}>Scope:</strong> {selectedProject.scope}
          </p>

          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '24px' }}>
            {selectedProject.description}
          </p>

          {renderModalContent(selectedProject)}
        </DialogContent>
        <DialogActions sx={{ p: 3, borderTop: '1px solid var(--border-color)' }}>
          <Button
            onClick={handleCloseModal}
            sx={{
              color: 'var(--text-secondary)',
              '&:hover': {
                backgroundColor: 'rgba(128, 128, 128, 0.1)'
              }
            }}
          >
            Close
          </Button>
          <Button
            variant="contained"
            onClick={() => window.location.href = '/contact'}
            sx={{
              background: 'linear-gradient(135deg, var(--primary-color), var(--primary-light))',
              color: '#ffffff',
              '&:hover': {
                background: 'linear-gradient(135deg, var(--primary-dark), var(--primary-color))',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px var(--shadow-hover)'
              }
            }}
          >
            Start Your Project
          </Button>
        </DialogActions>
      </Dialog>
    )}

    {/* Stats Section */}
    <section className='section' style={{ backgroundColor: 'var(--surface-color)' }}>
      <div className='container'>
        <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '40px' }}>
          Our Achievements
        </h2>
        <Grid container spacing={4}>
          {[
            { number: '500+', label: 'Projects Completed' },
            { number: '15+', label: 'Years Experience' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '50+', label: 'Skilled Team Members' }
          ].map((stat, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <div style={{ textAlign: 'center', padding: '30px 15px' }}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: 'var(--primary-color)',
                  marginBottom: '10px'
                }}>
                  {stat.number}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', margin: 0 }}>
                  {stat.label}
                </p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  </div>
);
};

export default Projects;