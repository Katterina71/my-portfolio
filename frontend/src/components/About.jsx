import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ px: 4, py: 4, position: 'relative' }}>
      {/* Bubbles image as background */}
      <Box
        component="img"
        src="/accents/bubbles-two.png"
        alt="Decorative bubbles"
        sx={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '50%',
          height: 'auto',
          zIndex: 0,
          opacity: 0.5,
          pointerEvents: 'none'
        }}
      />
      <Typography variant="h4" gutterBottom sx={{ position: 'relative', zIndex: 1 }}>
        About me
      </Typography>
      <Grid container spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            I’ve been working with websites since 2010.
            I have a great background on Internet marketing. I went through all the stages of becoming a professional i.e. from SEO specialist 
            to Product Manager. My extensive knowledge of the peculiarities of search engine behavior, user research behavior, working with various topics and types of sites allow me to create sites as effective tools for online sales.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: 'right' }}>
          <img src="/profile.JPG" alt="Kate Iliushkina" style={{ width: '70%', borderRadius: '8px' }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
