import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h4" gutterBottom>
        About me
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            I've been working with websites since 2010. I have a great background in Internet marketing...
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="path-to-your-image.jpg" alt="Kate Iliushkina" style={{ width: '100%', borderRadius: '8px' }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
