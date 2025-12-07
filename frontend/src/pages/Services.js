// import React, { useState } from 'react';
// import { 
//   Dialog, 
//   DialogTitle, 
//   DialogContent, 
//   DialogActions,
//   Button,
//   IconButton,
//   Box,
//   Grid
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import DesignServicesIcon from '@mui/icons-material/DesignServices';
// import BuildIcon from '@mui/icons-material/Build';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import service1 from '../assets/images/services/eng.jpg';
// import service2_1 from '../assets/images/services/fab1.jpg';
// import service2_2 from '../assets/images/services/fab2.jpg';
// import service3_1 from '../assets/images/services/supply1.jpg';
// import service3_2 from '../assets/images/services/supply2.jpg';

// const ServicesWithModals = () => {
//   const [openModal, setOpenModal] = useState(null);

//   const services = [
//     {
//       icon: <DesignServicesIcon />,
//       title: 'Engineering & Detailing',
//       description: 'Meticulous engineering and detailing excellence ensuring precision and care in every design, with each component aligning flawlessly with your vision.',
//       images: [
//         service1
//       ],
//       features: [
//         'Precision engineering excellence',
//         'Meticulous detailing process',
//         'Customized solutions for every project',
//         'AS/NZS 4600 and AS 4100 compliance'
//       ],
//       fullContent: {
//         sections: [
//           {
//             title: 'The Art of Engineering',
//             content: 'Our commitment to engineering excellence is at the heart of what we do. We embrace the latest advancements in engineering technology and techniques to create steel structures that stand as paragons of strength and reliability. Our team of experts combines innovation and experience to turn your ideas into reality.'
//           },
//           {
//             title: 'Meticulous Detailing',
//             content: 'In the realm of steel structures, every detail matters. That\'s why Queensland Steel Frame Solutions places a premium on meticulous detailing. We leave no bolt, no joint, and no connection to chance. Our detailing process is a harmonious blend of precision and creativity, ensuring that every element fits seamlessly into the grand design.'
//           },
//           {
//             title: 'Customized Solutions',
//             content: 'One size does not fit all in the world of construction. We recognize that each project is unique, with its own set of challenges and requirements. Our engineering and detailing process is highly adaptable, allowing us to customize solutions that align perfectly with your project\'s specifications. Whether it\'s a residential build or a complex industrial endeavor, we tailor our approach to suit your needs.'
//           },
//           {
//             title: 'Enhancing Efficiency',
//             content: 'Efficiency is a cornerstone of successful construction. Our meticulous engineering and detailing work to enhance the efficiency of your project. From optimizing material usage to streamlining construction processes, our attention to detail translates into time and cost savings.'
//           },
//           {
//             title: 'Adherence to Standards',
//             content: 'Our commitment to engineering and detailing extends to strict adherence to industry standards, such as AS/NZS 4600 and AS 4100. We ensure that every design and detail meets or exceeds these rigorous standards, guaranteeing the structural integrity and safety of your build.'
//           },
//           {
//             title: 'Sustainability by Design',
//             content: 'In an age of environmental consciousness, our engineering and detailing process also encompasses sustainability. We incorporate eco-friendly practices into our designs, promoting energy efficiency and reducing waste.'
//           },
//           {
//             title: 'Your Vision, Our Expertise',
//             content: 'At Queensland Steel Frame Solutions, we consider ourselves partners in your construction journey. We combine your vision with our engineering and detailing expertise to create structures that not only meet but often surpass expectations. We believe that the success of your project is a reflection of our commitment to excellence.'
//           }
//         ]
//       }
//     },
//     {
//       icon: <BuildIcon />,
//       title: 'Fabrication & Production',
//       description: 'Advanced fabrication using the renowned Scottsdale system and our proprietary Quick Frame machine, delivering exceptional quality and structural integrity.',
//       images: [
//         service2_1,
//         service2_2
//       ],
//       features: [
//         'Scottsdale system excellence',
//         'Quick Frame innovation',
//         'Precision engineering',
//         'Quality assurance & sustainability'
//       ],
//       fullContent: {
//         intro: 'At Queensland Steel Frame Solutions, our dedication to superior construction solutions drives our commitment to innovation and excellence. We specialize in advanced fabrication and production techniques, offering two prominent steel framing systems that have set the benchmark in the industry: the renowned Scottsdale system and our proprietary Quick Frame frame and truss machine.',
//         sections: [
//           {
//             title: 'Scottsdale System: Proven Excellence',
//             content: 'The Scottsdale system stands as a testament to precision engineering and reliability. Widely recognized in the construction sector, this system embodies excellence in steel framing. At Queensland Steel Frame Solutions, we leverage the Scottsdale system\'s advanced features to deliver exceptional quality and structural integrity, meeting the most stringent construction standards.'
//           },
//           {
//             title: 'Quick Frame Frame and Truss Machine: Innovation in Action',
//             content: 'Our proprietary Quick Frame system is a testament to our commitment to innovation and efficiency. Widely embraced by numerous builders, this system is a testament to our dedication to optimizing production processes. The Quick Frame machine streamlines the fabrication of frames and trusses, ensuring high precision, reduced lead times, and enhanced cost-effectiveness.'
//           },
//           {
//             title: 'What Sets Us Apart?',
//             points: [
//               'Quality Assurance: Both the Scottsdale system and our Quick Frame frame and truss machine undergo rigorous quality checks to ensure the highest standards are consistently met.',
//               'Precision Engineering: Our fabrication and production processes prioritize precision, resulting in steel frames and trusses that seamlessly fit together, optimizing construction efficiency.',
//               'Industry Acceptance: Our systems are widely acknowledged and embraced in the industry, reflecting their reliability, durability, and performance.'
//             ]
//           },
//           {
//             title: 'Our Dedication to Sustainability',
//             content: 'At Queensland Steel Frame Solutions, our commitment to sustainability extends beyond product excellence. We strive to minimize waste, maximize resource efficiency, and promote eco-friendly practices in our production processes.'
//           }
//         ]
//       }
//     },
//     {
//       icon: <LocalShippingIcon />,
//       title: 'Supply & Installation',
//       description: 'Queensland-wide supply and installation services delivering steel framing solutions to every corner of the state with expertise, quality, and reliability.',
//       images: [
//         service3_1,
//         service3_2
//       ],
//       features: [
//         'Queensland-wide reach',
//         'Expert installation services',
//         'Quality you can trust',
//         'Reliable and timely delivery'
//       ],
//       fullContent: {
//         intro: 'When it comes to steel framing solutions in Queensland, look no further than Queensland Steel Frame Solutions. We\'re your go-to choice for supply and installation services that cover every corner of this beautiful state. Here\'s why we\'re the perfect fit for your construction needs:',
//         sections: [
//           {
//             title: 'Queensland-Wide Reach',
//             content: 'From the bustling cities to the serene countryside, we serve all corners of Queensland. No location is too remote for our dedicated team.'
//           },
//           {
//             title: 'Expertise That Delivers',
//             content: 'Our experts have a deep understanding of the unique construction requirements in Queensland. We tailor our solutions to meet the specific needs of your project, ensuring a perfect fit every time.'
//           },
//           {
//             title: 'Quality You Can Trust',
//             content: 'We take pride in delivering steel framing solutions that not only meet but exceed industry standards. Your project\'s structural integrity is in safe hands with us.'
//           },
//           {
//             title: 'Hassle-Free Installation',
//             content: 'Our installation process is designed for ease and efficiency. We handle every aspect, so you can focus on what you do best – managing your construction project.'
//           },
//           {
//             title: 'Local Commitment',
//             content: 'We are proud to be a part of the Queensland community. Our local commitment extends to supporting local businesses and fostering sustainable construction practices.'
//           },
//           {
//             title: 'Reliable and Timely Delivery',
//             content: 'We understand that timing is crucial in construction. With our well-equipped facilities and extensive material storage, we ensure timely deliveries for your peace of mind.'
//           },
//           {
//             title: 'Eco-Friendly Solutions',
//             content: 'Our eco-conscious approach means that our steel framing systems are not just strong but also environmentally friendly. We reduce waste and promote energy efficiency for a sustainable future.'
//           },
//           {
//             title: 'Partnering for Success',
//             content: 'We consider ourselves your construction partner. Whether it\'s residential, commercial, or industrial projects, we\'re here to help you achieve success.'
//           }
//         ],
//         closing: 'When you choose Queensland Steel Frame Solutions, you\'re choosing a partner with a statewide presence, a commitment to quality, and the expertise to make your construction project a resounding success. Contact us today, and let\'s build Queensland together, one strong frame at a time.'
//       }
//     }
//   ];

//   const handleOpenModal = (index) => {
//     setOpenModal(index);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(null);
//   };

//   const renderImageGallery = (images) => {
//     if (!images || images.length === 0) return null;

//     const getGridSize = (totalImages, index) => {
//       if (totalImages === 1) return 12;
//       if (totalImages === 2) return 6;
//       if (totalImages === 3) {
//         return index === 0 ? 12 : 6;
//       }
//       if (totalImages === 4) return 6;
//       if (totalImages >= 5) {
//         if (index < 2) return 6;
//         return 4;
//       }
//       return 6;
//     };

//     return (
//       <Box sx={{ mb: 3 }}>
//         <Grid container spacing={2}>
//           {images.map((image, index) => (
//             <Grid item xs={12} sm={getGridSize(images.length, index)} key={index}>
//               <img
//                 src={image}
//                 alt={`Gallery image ${index + 1}`}
//                 style={{
//                   width: '100%',
//                   height: images.length === 1 ? '400px' : '250px',
//                   objectFit: 'cover',
//                   borderRadius: '8px'
//                 }}
//               />
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     );
//   };

//   const renderModalContent = (service) => {
//     const { fullContent, images } = service;
    
//     return (
//       <div>
//         {renderImageGallery(images)}
        
//         {fullContent.intro && (
//           <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '24px' }}>
//             {fullContent.intro}
//           </p>
//         )}
        
//         {fullContent.sections.map((section, index) => (
//           <div key={index} style={{ marginBottom: '24px' }}>
//             <h3 style={{ color: 'var(--primary-color)', marginBottom: '12px', fontSize: '1.2rem' }}>
//               {section.title}
//             </h3>
//             {section.content && (
//               <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '16px' }}>
//                 {section.content}
//               </p>
//             )}
//             {section.points && (
//               <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '20px' }}>
//                 {section.points.map((point, i) => (
//                   <li key={i} style={{ marginBottom: '8px' }}>{point}</li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}
        
//         {fullContent.closing && (
//           <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '24px', fontWeight: '500' }}>
//             {fullContent.closing}
//           </p>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div style={{ padding: '40px 20px', maxWidth: '1400px', margin: '0 auto' }}>
//       <section className="page-hero">
//       <div className="container">
//         <div className="page-hero-content fade-in">
//           <h1>Our Services</h1>
//           <p>Comprehensive Steel Frame Solutions for Every Need</p>
//         </div>
//       </div>
//     </section>

//       <Grid container spacing={4}>
//         {services.map((service, index) => (
//           <Grid item xs={12} md={4} key={index}>
//             <div 
//               onClick={() => handleOpenModal(index)}
//               style={{
//                 border: '1px solid var(--border-color)',
//                 borderRadius: '12px',
//                 overflow: 'hidden',
//                 height: '100%',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                 cursor: 'pointer',
//                 backgroundColor: 'var(--surface-color)'
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'translateY(-8px)';
//                 e.currentTarget.style.boxShadow = '0 8px 24px var(--shadow-hover)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'translateY(0)';
//                 e.currentTarget.style.boxShadow = 'none';
//               }}
//             >
//               <img
//                 src={service.images[0]}
//                 alt={service.title}
//                 style={{
//                   width: '100%',
//                   height: '250px',
//                   objectFit: 'cover'
//                 }}
//               />
//               <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
//                 <div style={{ marginBottom: '16px', color: 'var(--primary-color)' }}>
//                   {React.cloneElement(service.icon, { sx: { fontSize: '2.5rem' } })}
//                 </div>
//                 <h3 style={{ color: 'var(--primary-color)', marginBottom: '12px', fontSize: '1.5rem' }}>
//                   {service.title}
//                 </h3>
//                 <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '20px', flex: 1 }}>
//                   {service.description}
//                 </p>
//                 <div style={{ marginTop: 'auto' }}>
//                   <h4 style={{ color: 'var(--primary-color)', fontSize: '1rem', marginBottom: '12px' }}>
//                     Key Features:
//                   </h4>
//                   <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px', lineHeight: '2', marginBottom: '20px' }}>
//                     {service.features.map((feature, i) => (
//                       <li key={i}>{feature}</li>
//                     ))}
//                   </ul>
//                   <Button
//                     variant="outlined"
//                     fullWidth
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleOpenModal(index);
//                     }}
//                     sx={{
//                       color: 'var(--primary-color)',
//                       borderColor: 'var(--primary-color)',
//                       '&:hover': {
//                         borderColor: 'var(--primary-light)',
//                         backgroundColor: 'rgba(26, 43, 74, 0.04)',
//                         color: 'var(--primary-light)'
//                       }
//                     }}
//                   >
//                     Learn More
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </Grid>
//         ))}
//       </Grid>

//       {services.map((service, index) => (
//         <Dialog
//           key={`modal-${index}`}
//           open={openModal === index}
//           onClose={handleCloseModal}
//           maxWidth="md"
//           fullWidth
//           scroll="paper"
//           PaperProps={{
//             sx: {
//               backgroundColor: 'var(--surface-color)',
//               color: 'var(--text-primary)'
//             }
//           }}
//         >
//           <DialogTitle sx={{ 
//             display: 'flex', 
//             alignItems: 'center', 
//             justifyContent: 'space-between', 
//             pb: 2,
//             borderBottom: '1px solid var(--border-color)'
//           }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//               {React.cloneElement(service.icon, { sx: { fontSize: '2rem', color: 'var(--primary-color)' } })}
//               <span style={{ color: 'var(--primary-color)', fontSize: '1.5rem', fontWeight: '600' }}>
//                 {service.title}
//               </span>
//             </div>
//             <IconButton onClick={handleCloseModal} sx={{ color: 'var(--text-secondary)' }}>
//               <CloseIcon />
//             </IconButton>
//           </DialogTitle>
//           <DialogContent sx={{ p: 3, mt: 2 }}>
//             {renderModalContent(service)}
//           </DialogContent>
//           <DialogActions sx={{ p: 3, borderTop: '1px solid var(--border-color)' }}>
//             <Button 
//               onClick={handleCloseModal} 
//               sx={{ 
//                 color: 'var(--text-secondary)',
//                 '&:hover': {
//                   backgroundColor: 'rgba(128, 128, 128, 0.1)'
//                 }
//               }}
//             >
//               Close
//             </Button>
//             <Button
//               variant="contained"
//               onClick={() => window.location.href = '/contact'}
//               sx={{
//                 background: 'linear-gradient(135deg, var(--primary-color), var(--primary-light))',
//                 color: '#ffffff',
//                 '&:hover': {
//                   background: 'linear-gradient(135deg, var(--primary-dark), var(--primary-color))',
//                   transform: 'translateY(-2px)',
//                   boxShadow: '0 6px 20px var(--shadow-hover)'
//                 }
//               }}
//             >
//               Get a Quote
//             </Button>
//           </DialogActions>
//         </Dialog>
//       ))}
//     </div>
//   );
// };

// export default ServicesWithModals;





import React, { useState } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  Button,
  IconButton,
  Box,
  Grid
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BuildIcon from '@mui/icons-material/Build';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import service1 from '../assets/images/services/eng.jpg';
import service2_1 from '../assets/images/services/fab1.jpg';
import service2_2 from '../assets/images/services/fab2.jpg';
import service3_1 from '../assets/images/services/supply1.jpg';
import service3_2 from '../assets/images/services/supply2.jpg';

const ServicesWithModals = () => {
  const [openModal, setOpenModal] = useState(null);

  const services = [
    {
      icon: <DesignServicesIcon />,
      title: 'Engineering & Detailing',
      description: 'Meticulous engineering and detailing excellence ensuring precision and care in every design, with each component aligning flawlessly with your vision.',
      images: [
        service1
      ],
      features: [
        'Precision engineering excellence',
        'Meticulous detailing process',
        'Customized solutions for every project',
        'AS/NZS 4600 and AS 4100 compliance'
      ],
      fullContent: {
        sections: [
          {
            title: 'The Art of Engineering',
            content: 'Our commitment to engineering excellence is at the heart of what we do. We embrace the latest advancements in engineering technology and techniques to create steel structures that stand as paragons of strength and reliability. Our team of experts combines innovation and experience to turn your ideas into reality.'
          },
          {
            title: 'Meticulous Detailing',
            content: 'In the realm of steel structures, every detail matters. That\'s why Queensland Steel Frame Solutions places a premium on meticulous detailing. We leave no bolt, no joint, and no connection to chance. Our detailing process is a harmonious blend of precision and creativity, ensuring that every element fits seamlessly into the grand design.'
          },
          {
            title: 'Customized Solutions',
            content: 'One size does not fit all in the world of construction. We recognize that each project is unique, with its own set of challenges and requirements. Our engineering and detailing process is highly adaptable, allowing us to customize solutions that align perfectly with your project\'s specifications. Whether it\'s a residential build or a complex industrial endeavor, we tailor our approach to suit your needs.'
          },
          {
            title: 'Enhancing Efficiency',
            content: 'Efficiency is a cornerstone of successful construction. Our meticulous engineering and detailing work to enhance the efficiency of your project. From optimizing material usage to streamlining construction processes, our attention to detail translates into time and cost savings.'
          },
          {
            title: 'Adherence to Standards',
            content: 'Our commitment to engineering and detailing extends to strict adherence to industry standards, such as AS/NZS 4600 and AS 4100. We ensure that every design and detail meets or exceeds these rigorous standards, guaranteeing the structural integrity and safety of your build.'
          },
          {
            title: 'Sustainability by Design',
            content: 'In an age of environmental consciousness, our engineering and detailing process also encompasses sustainability. We incorporate eco-friendly practices into our designs, promoting energy efficiency and reducing waste.'
          },
          {
            title: 'Your Vision, Our Expertise',
            content: 'At Queensland Steel Frame Solutions, we consider ourselves partners in your construction journey. We combine your vision with our engineering and detailing expertise to create structures that not only meet but often surpass expectations. We believe that the success of your project is a reflection of our commitment to excellence.'
          }
        ]
      }
    },
    {
      icon: <BuildIcon />,
      title: 'Fabrication & Production',
      description: 'Advanced fabrication using the renowned Scottsdale system and our proprietary Quick Frame machine, delivering exceptional quality and structural integrity.',
      images: [
        service2_1,
        service2_2
      ],
      features: [
        'Scottsdale system excellence',
        'Quick Frame innovation',
        'Precision engineering',
        'Quality assurance & sustainability'
      ],
      fullContent: {
        intro: 'At Queensland Steel Frame Solutions, our dedication to superior construction solutions drives our commitment to innovation and excellence. We specialize in advanced fabrication and production techniques, offering two prominent steel framing systems that have set the benchmark in the industry: the renowned Scottsdale system and our proprietary Quick Frame frame and truss machine.',
        sections: [
          {
            title: 'Scottsdale System: Proven Excellence',
            content: 'The Scottsdale system stands as a testament to precision engineering and reliability. Widely recognized in the construction sector, this system embodies excellence in steel framing. At Queensland Steel Frame Solutions, we leverage the Scottsdale system\'s advanced features to deliver exceptional quality and structural integrity, meeting the most stringent construction standards.'
          },
          {
            title: 'Quick Frame Frame and Truss Machine: Innovation in Action',
            content: 'Our proprietary Quick Frame system is a testament to our commitment to innovation and efficiency. Widely embraced by numerous builders, this system is a testament to our dedication to optimizing production processes. The Quick Frame machine streamlines the fabrication of frames and trusses, ensuring high precision, reduced lead times, and enhanced cost-effectiveness.'
          },
          {
            title: 'What Sets Us Apart?',
            points: [
              'Quality Assurance: Both the Scottsdale system and our Quick Frame frame and truss machine undergo rigorous quality checks to ensure the highest standards are consistently met.',
              'Precision Engineering: Our fabrication and production processes prioritize precision, resulting in steel frames and trusses that seamlessly fit together, optimizing construction efficiency.',
              'Industry Acceptance: Our systems are widely acknowledged and embraced in the industry, reflecting their reliability, durability, and performance.'
            ]
          },
          {
            title: 'Our Dedication to Sustainability',
            content: 'At Queensland Steel Frame Solutions, our commitment to sustainability extends beyond product excellence. We strive to minimize waste, maximize resource efficiency, and promote eco-friendly practices in our production processes.'
          }
        ]
      }
    },
    {
      icon: <LocalShippingIcon />,
      title: 'Supply & Installation',
      description: 'Queensland-wide supply and installation services delivering steel framing solutions to every corner of the state with expertise, quality, and reliability.',
      images: [
        service3_1,
        service3_2
      ],
      features: [
        'Queensland-wide reach',
        'Expert installation services',
        'Quality you can trust',
        'Reliable and timely delivery'
      ],
      fullContent: {
        intro: 'When it comes to steel framing solutions in Queensland, look no further than Queensland Steel Frame Solutions. We\'re your go-to choice for supply and installation services that cover every corner of this beautiful state. Here\'s why we\'re the perfect fit for your construction needs:',
        sections: [
          {
            title: 'Queensland-Wide Reach',
            content: 'From the bustling cities to the serene countryside, we serve all corners of Queensland. No location is too remote for our dedicated team.'
          },
          {
            title: 'Expertise That Delivers',
            content: 'Our experts have a deep understanding of the unique construction requirements in Queensland. We tailor our solutions to meet the specific needs of your project, ensuring a perfect fit every time.'
          },
          {
            title: 'Quality You Can Trust',
            content: 'We take pride in delivering steel framing solutions that not only meet but exceed industry standards. Your project\'s structural integrity is in safe hands with us.'
          },
          {
            title: 'Hassle-Free Installation',
            content: 'Our installation process is designed for ease and efficiency. We handle every aspect, so you can focus on what you do best – managing your construction project.'
          },
          {
            title: 'Local Commitment',
            content: 'We are proud to be a part of the Queensland community. Our local commitment extends to supporting local businesses and fostering sustainable construction practices.'
          },
          {
            title: 'Reliable and Timely Delivery',
            content: 'We understand that timing is crucial in construction. With our well-equipped facilities and extensive material storage, we ensure timely deliveries for your peace of mind.'
          },
          {
            title: 'Eco-Friendly Solutions',
            content: 'Our eco-conscious approach means that our steel framing systems are not just strong but also environmentally friendly. We reduce waste and promote energy efficiency for a sustainable future.'
          },
          {
            title: 'Partnering for Success',
            content: 'We consider ourselves your construction partner. Whether it\'s residential, commercial, or industrial projects, we\'re here to help you achieve success.'
          }
        ],
        closing: 'When you choose Queensland Steel Frame Solutions, you\'re choosing a partner with a statewide presence, a commitment to quality, and the expertise to make your construction project a resounding success. Contact us today, and let\'s build Queensland together, one strong frame at a time.'
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

  const renderModalContent = (service) => {
    const { fullContent, images } = service;
    
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
        
        {fullContent.closing && (
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '24px', fontWeight: '500' }}>
            {fullContent.closing}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className='services-page'>
      {/* Hero Section - UPDATED TO MATCH CONTACT PAGE */}
      <section className='page-hero'>
        <div className='container'>
          <div className='page-hero-content fade-in'>
            <h1>Our Services</h1>
            <p>Comprehensive Steel Frame Solutions for Every Need</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='section'>
        <div className='container'>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
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
                    src={service.images[0]}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginBottom: '16px', color: 'var(--primary-color)' }}>
                      {React.cloneElement(service.icon, { sx: { fontSize: '2.5rem' } })}
                    </div>
                    <h3 style={{ color: 'var(--primary-color)', marginBottom: '12px', fontSize: '1.5rem' }}>
                      {service.title}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '20px', flex: 1 }}>
                      {service.description}
                    </p>
                    <div style={{ marginTop: 'auto' }}>
                      <h4 style={{ color: 'var(--primary-color)', fontSize: '1rem', marginBottom: '12px' }}>
                        Key Features:
                      </h4>
                      <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px', lineHeight: '2', marginBottom: '20px' }}>
                        {service.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                      <Button
                        variant="outlined"
                        fullWidth
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenModal(index);
                        }}
                        sx={{
                          color: 'var(--primary-color)',
                          borderColor: 'var(--primary-color)',
                          '&:hover': {
                            borderColor: 'var(--primary-light)',
                            backgroundColor: 'rgba(26, 43, 74, 0.04)',
                            color: 'var(--primary-light)'
                          }
                        }}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </section>

      {/* Modals */}
      {services.map((service, index) => (
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
              {React.cloneElement(service.icon, { sx: { fontSize: '2rem', color: 'var(--primary-color)' } })}
              <span style={{ color: 'var(--primary-color)', fontSize: '1.5rem', fontWeight: '600' }}>
                {service.title}
              </span>
            </div>
            <IconButton onClick={handleCloseModal} sx={{ color: 'var(--text-secondary)' }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ p: 3, mt: 2 }}>
            {renderModalContent(service)}
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
              Get a Quote
            </Button>
          </DialogActions>
        </Dialog>
      ))}
    </div>
  );
};

export default ServicesWithModals;