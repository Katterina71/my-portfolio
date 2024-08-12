import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ mt: 10, px: 4, py: 4, position: 'relative' }}>
      {/* Bubbles image as background */}
      <Box
        component="img"
        src="/accents/bubbles-two.png"
        alt="Decorative bubbles"
        sx={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: { xs: '100%', sm: '50%' }, // 100% width on mobile, 50% on small screens and up
          height: 'auto',
          zIndex: 0,
          opacity: 0.5,
          pointerEvents: 'none',
          display: { xs: 'none', sm: 'block' }, // Hide on extra-small screens
        }}
      />
      <Typography variant="h2" gutterBottom sx={{ position: 'relative', zIndex: 1, fontSize: { xs: '2.5rem', sm: '2.5rem', md: '3.5rem' }}}>
        About me
      </Typography>
      <Typography variant="body1" sx={{ position: 'relative', zIndex: 1 }}>
        I’ve been working with websites since 2010.
        I have a great background in Internet marketing. I went through all the stages of becoming a professional, from SEO specialist 
        to Product Manager. My extensive knowledge of the peculiarities of search engine behavior, user research behavior, working with various topics and types of sites allow me to create sites as effective tools for online sales.
      </Typography>
    </Container>
  );
};

export default About;
