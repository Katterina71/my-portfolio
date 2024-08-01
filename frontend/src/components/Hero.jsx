import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';

const Hero = () => {
  return (
    <Box sx={{ pt: 0, pb: 10, color: 'white', }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Hello! I'm Katerina Iliushkina,
              <br />
              Software Engineer
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 2, backgroundColor: '#FF077E', '&:hover': { backgroundColor: '#37FFF0' } }}>
              My portfolio
            </Button>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: 'right' }}>
            <img src="/accents/bubbles-one.png" alt="Decorative bubbles" style={{ width: '100%', height: 'auto' }} />
            {/* <img src="/accents/arrows.png" alt="Decorative bubbles" style={{ width: '20%', height: 'auto' }} /> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
