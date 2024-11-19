import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';



const About = () => {
  return (
    <section id="about-me">
    <Container sx={{ mt: 16, mb: 2, px: 4, py: 4, position: 'relative' }}>
      {/* Bubbles image as background */}
      <Box
        component="img"
        src="/accents/bubbles-two.png"
        alt="Decorative bubbles"
        sx={{
          position: 'absolute',
          top: '-300px',
          left: '800px',
          width: { xs: '100%', sm: '50%' }, // 100% width on mobile, 50% on small screens and up
          height: 'auto',
          zIndex: 0,
          opacity: 0.5,
          pointerEvents: 'none',
          display: { xs: 'none', sm: 'block' }, // Hide on extra-small screens
        }}
      />
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          position: 'relative',
          zIndex: 1,
          fontSize: { xs: '2.5rem', sm: '2.5rem', md: '3.5rem' },
        }}
      >
        About me
      </Typography>
      <Typography variant="body1" paragraph >
      I'm an SEO Strategist and Web Developer with over 10 years of experience across various industries, including medicine, finance, and e-commerce. My expertise blends SEO strategy, web development, and UX research, enabling me to create optimized, scalable websites that rank well and provide exceptional user experiences.
      </Typography>
      <Typography variant="body1" paragraph >
      With a strong foundation in HTML, CSS, JavaScript, and WordPress, I implement effective on-site optimization to ensure websites meet search engine standards and perform well for users. My skills in keyword research, content strategy, technical SEO, and UX research, combined with my development skills, allow me to improve website architecture, user experience, and performance.
      </Typography>
      <Typography variant="body1" paragraph >
      I build visually appealing and fast-loading websites by leveraging tools like React, Material-UI, Tailwind CSS, and Bootstrap. My adaptability helps me stay current with SEO trends, UX research, and web technologies, ensuring that my solutions meet SEO and user needs.
      </Typography>
      <Typography variant="body1" >
      Let's connect if you want to optimize your website for search engines while enhancing user experience!
      </Typography>
      <Box sx={{mt:4}}>
      <Button
                variant="contained"
                color="primary"
                href='#contact'
                sx={{
                  mr: 2,
                  backgroundColor: '#FF077E',
                  '&:hover': { backgroundColor: '#37FFF0' },
                  // mb: { xs: 2, md: 0 }, // Margin-bottom only on mobile, no margin on desktop
                }}
                startIcon={<ForwardToInboxIcon />}
              >
                Contact with me
              </Button>
      <Button
                variant="outlined"
                href="/resume/EKATERINA_ILIUSHKINA-Software_Engineer.pdf" // Link to the resume file in the public folder
                download // This triggers the download of the file
                sx={{ borderColor: '#FF077E', color: '#FF077E', '&:hover': { borderColor: '#37FFF0', color: '#37FFF0' } }}
                startIcon={<GetAppIcon />}
              >
                My Resume
              </Button>
              </Box>
    </Container>
    </section>
  );
};

export default About;
