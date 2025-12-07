import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CloseIcon from '@mui/icons-material/Close';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import RoofingIcon from '@mui/icons-material/Roofing';
import LayersIcon from '@mui/icons-material/Layers';
import FoundationIcon from '@mui/icons-material/Foundation';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import prod1 from '../assets/images/products/prod1.jpg';
import prod2 from '../assets/images/products/prod2.jpg';
import prod3 from '../assets/images/products/prod3.jpg';
import prod4 from '../assets/images/products/prod4.jpg';
import prod5 from '../assets/images/products/prod5.png';

const ProductsWithModals = () => {
  const [openModal, setOpenModal] = useState(null);

  const products = [
    {
      icon: <HomeWorkIcon />,
      name: 'Wall Frames',
      category: 'Structural',
      description: 'Internal & external walls for ground and all upper levels. LGS screw fixed assembly wall frames designed and fabricated to nominated wind codes.',
      images: [
        prod1
      ],
      specifications: [
        'Thickness: 70mm or 90mm',
        'Stud spacing: 300mm to 450mm',
        'Wind code compliant',
        'AS/NZS 4600 certified'
      ],
      features: ['In-built K-braces', 'Trussed/Plated Lintels', 'Custom Openings', 'Screw Fixed Assembly'],
      fullContent: {
        intro: 'Our wall frames are engineered for both internal and external applications, designed to meet the highest standards of structural integrity and wind resistance.',
        sections: [
          {
            title: 'Design Specifications',
            content: 'LGS screw fixed assembly wall frames are available in 70mm or 90mm thickness, designed and fabricated to the nominated wind code including all nominated openings. Each frame features in-built K-braces and trussed or plated lintels for door and window openings, ensuring maximum stability and load distribution.'
          },
          {
            title: 'Stud Spacing Options',
            content: 'Stud spacings can vary from 300mm to 450mm based on engineering design requirements to suit cladding specifications. This flexibility allows for optimal structural performance while accommodating various architectural designs and material choices.'
          },
          {
            title: 'Applications',
            content: 'Suitable for ground level and all upper levels, our wall frames are ideal for residential, commercial, and industrial construction. They provide excellent support for various cladding materials and are engineered to withstand regional wind loads and seismic requirements.'
          },
          {
            title: 'Quality Assurance',
            content: 'All wall frames are manufactured using premium grade steel and undergo rigorous quality control testing. Each frame is precisely fabricated to engineering specifications and delivered ready for installation, reducing on-site labor time and ensuring consistent quality.'
          }
        ]
      }
    },
    {
      icon: <RoofingIcon />,
      name: 'Roof Trusses',
      category: 'Structural',
      description: 'Engineered roof trusses designed to nominated wind loads and roof pitch. Bolted assembly trusses can span up to ten meters on a single span length.',
      images: [
        prod2
      ],
      specifications: [
        'Centres: 900mm to 1200mm',
        'Thickness: 0.75mm or 0.95mm',
        'Single span: up to 10 meters',
        'Roof frames: 90mm thick'
      ],
      features: ['Bolted Assembly', 'Custom Pitch', 'Sheet/Tile Compatible', 'Wind Load Certified'],
      fullContent: {
        intro: 'Our engineered roof trusses provide superior structural support while allowing for versatile architectural designs. Each truss is precision-fabricated to meet specific wind load and pitch requirements.',
        sections: [
          {
            title: 'Truss Specifications',
            content: 'Engineered roof trusses generally vary from 900mm to maximum 1200mm centres for sheet roof or tile roof applications. Designed and fabricated to the nominated design wind load and to the required roof pitch, our trusses ensure optimal structural performance and longevity.'
          },
          {
            title: 'Material & Construction',
            content: 'Our bolted assembly trusses are manufactured using 0.75mm or 0.95mm premium grade steel, capable of spanning up to ten meters on a single span length. This eliminates the need for intermediate support in many applications, providing greater design flexibility and reducing material costs.'
          },
          {
            title: 'Roof Frames',
            content: 'Roof frames 90mm thick are designed and fabricated to the nominated design wind load and to suit the required roof pitch for veranda areas. These frames integrate seamlessly with the main roof structure while providing additional outdoor living space.'
          },
          {
            title: 'Ceiling Battens',
            content: 'Ceiling battens 22mm at maximum 600mm centres are included to under roof trusses, providing a secure fixing point for ceiling materials. This integrated approach ensures a complete roofing system that\'s ready for final finishes.'
          },
          {
            title: 'Engineering Excellence',
            content: 'All roof trusses are designed by licensed structural engineers and comply with AS/NZS 4600 standards. Each truss undergoes thorough quality inspection before leaving our facility, ensuring it meets or exceeds all specified load requirements.'
          }
        ]
      }
    },
    {
      icon: <LayersIcon />,
      name: 'Floor Joists',
      category: 'Structural',
      description: 'Engineered trussed/webbed floor joists 355mm deep allowing ease of access for services. Open webbed design with 50mm step downs for wet areas.',
      images: [
        prod3
      ],
      specifications: [
        'Depth: 355mm',
        'Centres: maximum 450mm',
        'Includes structural steel support',
        'Service access integrated'
      ],
      features: ['Trussed/Webbed Design', '50mm Wet Area Steps', 'Service Access', 'High Load Capacity'],
      fullContent: {
        intro: 'Our engineered floor joists provide exceptional strength and functionality, with integrated design features that simplify construction and allow for easy service installation.',
        sections: [
          {
            title: 'Joist Design',
            content: 'Engineered trussed/webbed floor joists 355mm deep at maximum 450mm centres are rolled including structural steel as required to support mid floor systems. The open webbed design allows ease of access for electrical, plumbing, and HVAC services to run through without the need for drilling or notching.'
          },
          {
            title: 'Wet Area Considerations',
            content: 'Generally, open webbed floor joists have 50mm step downs for wet floor areas as per builder\'s requirements. This design feature accommodates the additional depth needed for proper waterproofing and drainage in bathrooms, laundries, and other wet areas without compromising structural integrity.'
          },
          {
            title: 'Load Distribution',
            content: 'Our floor joists are engineered to provide optimal load distribution across the floor system, ensuring minimal deflection and a solid, stable platform. The trussed design maximizes strength while minimizing material usage, resulting in a cost-effective solution.'
          },
          {
            title: 'Integration with Structure',
            content: 'Floor joists are designed to integrate seamlessly with wall frames and structural steel components, creating a cohesive structural system. Each joist is manufactured to precise specifications, ensuring accurate fit and simplified installation on site.'
          }
        ]
      }
    },
    {
      icon: <FoundationIcon />,
      name: 'Floor System',
      category: 'Structural',
      description: 'Complete subfloor systems with C-Section joists, structural steel bearers, stumps and support posts. Fixed and adjustable bearers fabricated in-house.',
      images: [
        prod4
      ],
      specifications: [
        'C-Section floor joists',
        'RHS and PFC bearers',
        'Fixed & adjustable bearers',
        'Concrete pad compatible'
      ],
      features: ['Complete Subfloor', 'Structural Steel', 'Custom Fabrication', 'Multiple Support Options'],
      fullContent: {
        intro: 'Our comprehensive floor systems provide complete subfloor solutions, engineered to support your structure with precision-fabricated components manufactured in-house.',
        sections: [
          {
            title: 'Subfloor Components',
            content: 'If the house has a subfloor, we provide C-Section floor joists including structural steel bearers, stumps and support posts as required to suit the subfloor system. Our solutions utilize a combination of C-sections, RHS (Rectangular Hollow Sections), and PFC (Parallel Flange Channels) to support the structure above the sub-floor.'
          },
          {
            title: 'Bearer Systems',
            content: 'Fixed and adjustable bearers can be installed into concrete or bolted onto concrete pads, providing flexibility in installation and adjustment. All bearers are fabricated in-house to exact specifications, ensuring perfect fit and optimal load transfer.'
          },
          {
            title: 'Engineering Design',
            content: 'Each floor system is engineered to suit specific site conditions, building loads, and soil characteristics. Our design team works closely with structural engineers to ensure all components meet or exceed required load capacities and comply with relevant building codes.'
          },
          {
            title: 'Installation Benefits',
            content: 'Our pre-fabricated floor system components significantly reduce on-site construction time. All pieces are precisely manufactured and delivered ready for installation, minimizing labor costs and ensuring consistent quality throughout the build.'
          },
          {
            title: 'Durability & Protection',
            content: 'All steel components are galvanized or treated for corrosion resistance, ensuring long-term durability even in challenging environmental conditions. This protection extends the life of the structure and reduces maintenance requirements.'
          }
        ]
      }
    },
    {
      icon: <ViewInArIcon />,
      name: 'Structural Steel',
      category: 'Industrial',
      description: 'Duragal/painted structural steel posts and beams for internal wide openings and external exposed structures. Engineered for housing and commercial projects.',
      images: [
        prod5
      ],
      specifications: [
        'Duragal or painted finish',
        'Custom sizes available',
        'Engineer certified',
        'Large span capability'
      ],
      features: ['Heavy Duty', 'Wide Openings', 'Exposed Structure', 'Commercial Grade'],
      fullContent: {
        intro: 'Our structural steel solutions provide the strength needed for large openings and exposed structures, fabricated to exact engineering specifications for both residential and commercial applications.',
        sections: [
          {
            title: 'Applications',
            content: 'Duragal/painted structural steel posts and beams are used to support internal wide openings as well as all externally exposed structures. These components are essential for creating open-plan living spaces, large garage openings, and architectural features that require substantial load-bearing capacity.'
          },
          {
            title: 'Engineering & Fabrication',
            content: 'All structural steel members are fabricated as per the structural engineer\'s design for housing and large-scale commercial projects. We work directly with engineering specifications to ensure every piece meets exact requirements for load capacity, span, and deflection limits.'
          },
          {
            title: 'Material Options',
            content: 'Choose between Duragal (galvanized) finish for superior corrosion resistance, or painted finishes for aesthetic requirements. Both options provide excellent structural performance with appropriate surface protection for their intended application.'
          },
          {
            title: 'Custom Solutions',
            content: 'We fabricate custom structural steel solutions for unique architectural requirements. Whether you need special connections, unusual spans, or specific aesthetic finishes, our in-house fabrication capabilities allow us to deliver exactly what your project needs.'
          },
          {
            title: 'Quality & Certification',
            content: 'All structural steel work is backed by engineering certificates and complies with relevant Australian Standards. Each component undergoes quality inspection to ensure it meets specified requirements before delivery to site.'
          }
        ]
      }
    }
  ];

  const handleOpenModal = (index) => {
    setOpenModal(index);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  const renderImageGallery = (images) => {
    if (!images || images.length === 0) return null;

    const getGridSize = (totalImages, index) => {
      if (totalImages === 1) return 12;
      if (totalImages === 2) return 6;
      if (totalImages === 3) {
        return index === 0 ? 12 : 6;
      }
      if (totalImages === 4) return 6;
      if (totalImages >= 5) {
        if (index < 2) return 6;
        return 4;
      }
      return 6;
    };

    return (
      <Box sx={{ mb: 3 }}>
        <Grid container spacing={2}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={getGridSize(images.length, index)} key={index}>
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                style={{
                  width: '100%',
                  height: images.length === 1 ? '400px' : '250px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

  const renderModalContent = (product) => {
    const { fullContent, images } = product;

    return (
      <div>
        {renderImageGallery(images)}

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
  <div className='products-page'>
    {/* Hero Section */}
    <section className='page-hero'>
      <div className='container'>
        <div className='page-hero-content fade-in'>
          <h1>Our Products</h1>
          <p>Premium Steel Frame Products for All Applications</p>
        </div>
      </div>
    </section>

    {/* Products Grid Section */}
    <section className='section'>
      <div className='container'>
        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div
                onClick={() => handleOpenModal(index)}
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
                  src={product.images[0]}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ marginBottom: '12px' }}>
                    <Chip
                      label={product.category}
                      size="small"
                      sx={{
                        backgroundColor: 'var(--primary-color)',
                        color: '#ffffff',
                        fontWeight: '500'
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '16px', color: 'var(--primary-color)' }}>
                    {React.cloneElement(product.icon, { sx: { fontSize: '2.5rem' } })}
                  </div>
                  <h3 style={{ color: 'var(--primary-color)', marginBottom: '12px', fontSize: '1.3rem' }}>
                    {product.name}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '15px', flex: 1, fontSize: '0.95rem' }}>
                    {product.description}
                  </p>
                  <div style={{ marginTop: 'auto' }}>
                    <h4 style={{ color: 'var(--primary-color)', fontSize: '0.95rem', marginBottom: '8px' }}>
                      Specifications:
                    </h4>
                    <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px', lineHeight: '1.8', marginBottom: '15px', fontSize: '0.85rem' }}>
                      {product.specifications.slice(0, 3).map((spec, i) => (
                        <li key={i}>{spec}</li>
                      ))}
                    </ul>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {product.features.slice(0, 3).map((feature, i) => (
                        <Chip
                          key={i}
                          label={feature}
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: 'var(--primary-color)',
                            color: 'var(--primary-color)',
                            fontSize: '0.75rem'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>

    {/* Product Modals */}
    {products.map((product, index) => (
      <Dialog
        key={`modal-${index}`}
        open={openModal === index}
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {React.cloneElement(product.icon, { sx: { fontSize: '2rem', color: 'var(--primary-color)' } })}
            <span style={{ color: 'var(--primary-color)', fontSize: '1.5rem', fontWeight: '600' }}>
              {product.name}
            </span>
          </div>
          <IconButton onClick={handleCloseModal} sx={{ color: 'var(--text-secondary)' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 3, mt: 2 }}>
          {renderModalContent(product)}
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
            Request Quote
          </Button>
        </DialogActions>
      </Dialog>
    ))}

    {/* Why Choose Our Products Section */}
    <section className='section'>
      <div className='container'>
        <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '50px', fontSize: '2rem' }}>
          Why Choose Our Products?
        </h2>
        <Grid container spacing={4}>
          {[
            {
              title: 'Superior Quality',
              desc: 'Premium grade steel with rigorous quality control',
              icon: '✓'
            },
            {
              title: 'Cost Effective',
              desc: 'Competitive pricing with no compromise on quality',
              icon: '✓'
            },
            {
              title: 'Fast Delivery',
              desc: 'Efficient manufacturing and timely project delivery',
              icon: '✓'
            },
            {
              title: 'Custom Solutions',
              desc: 'Tailored products to meet specific requirements',
              icon: '✓'
            },
            {
              title: 'Eco-Friendly',
              desc: '100% recyclable materials and sustainable practices',
              icon: '✓'
            },
            {
              title: 'Expert Support',
              desc: 'Technical assistance throughout your project',
              icon: '✓'
            }
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div style={{
                backgroundColor: 'var(--surface-color)',
                borderRadius: '12px',
                padding: '30px',
                textAlign: 'center',
                height: '100%',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px var(--shadow)'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px var(--shadow-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px var(--shadow)';
                }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-color)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '1.8rem',
                  fontWeight: 'bold'
                }}>
                  {item.icon}
                </div>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '12px', fontSize: '1.2rem' }}>
                  {item.title}
                </h4>
                <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>

    {/* Supply and Installation Section */}
    <section className='section' style={{ backgroundColor: 'var(--primary-color)' }}>
      <div className='container'>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <LocalShippingIcon sx={{ fontSize: '4rem', marginBottom: '16px', color: '#ffffff' }} />
          <h2 style={{ color: '#ffffff', marginBottom: '16px', fontSize: '2rem' }}>
            Supply and Installation Package
          </h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', color: '#ffffff' }}>
            Our comprehensive supply and installation package provides a complete, hassle-free solution for your steel framing needs. Every project is tailored to your specific requirements.
          </p>
        </div>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', backgroundColor: 'rgba(255,255,255,0.95)' }}>
              <CardContent>
                <h3 style={{ color: 'var(--primary-color)', marginBottom: '16px' }}>Package Inclusions</h3>
                <ul style={{ color: 'var(--text-secondary)', lineHeight: '2', paddingLeft: '20px' }}>
                  <li>Delivery to site via body truck and semi-crane</li>
                  <li>All fixings, tie downs and bracings</li>
                  <li>Supply and fix sub-floor system</li>
                  <li>Supply and fix wall framing</li>
                  <li>Supply and fix ground/mid floor system</li>
                  <li>Supply and fix structural steel posts & beams</li>
                  <li>Supply and fix roof trusses & roof frames</li>
                  <li>Supply and fix ceiling battens</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', backgroundColor: 'rgba(255,255,255,0.95)' }}>
              <CardContent>
                <h3 style={{ color: 'var(--primary-color)', marginBottom: '16px' }}>Additional Components</h3>
                <ul style={{ color: 'var(--text-secondary)', lineHeight: '2', paddingLeft: '20px' }}>
                  <li>Brackets for rafters to take fascia (supplied loose)</li>
                  <li>Pre-punched holes for electrical wiring</li>
                  <li>Plastic electrical grommets (supplied loose)</li>
                  <li>Engineering design certificate Form 15</li>
                  <li>Engineering inspection certificate Form 12/16</li>
                </ul>
                <div style={{ marginTop: '20px', padding: '16px', backgroundColor: 'var(--primary-color)', borderRadius: '8px', color: '#ffffff' }}>
                  <strong>Note:</strong> Package contents may vary based on project requirements. Contact us for a detailed quote specific to your needs.
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => window.location.href = '/contact'}
            sx={{
              backgroundColor: '#ffffff',
              color: 'var(--primary-color)',
              fontSize: '1.1rem',
              padding: '12px 40px',
              '&:hover': {
                backgroundColor: 'var(--secondary-light)',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.3)'
              }
            }}
          >
            Get Your Package Quote
          </Button>
        </div>
      </div>
    </section>

    {/* Quality Standards Section */}
    <section className='section' style={{ backgroundColor: 'var(--surface-color)' }}>
      <div className='container'>
        <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '40px' }}>
          Quality Standards & Certifications
        </h2>
        <Grid container spacing={3}>
          {[
            { title: 'AS/NZS 4600', desc: 'Australian/New Zealand Standard for Cold-Formed Steel Structures' },
            { title: 'ISO 9001', desc: 'Quality Management Systems Certification' },
            { title: 'BlueScope Steel', desc: 'Premium Australian Steel Products' },
            { title: 'Engineered Designs', desc: 'Certified by Licensed Structural Engineers' }
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <div style={{
                padding: '25px',
                backgroundColor: 'var(--background-color)',
                borderRadius: '12px',
                textAlign: 'center',
                height: '100%',
                border: '2px solid var(--border-color)',
                transition: 'all 0.3s ease'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-color)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '12px', fontSize: '1.1rem' }}>
                  {item.title}
                </h4>
                <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>
                  {item.desc}
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

export default ProductsWithModals;