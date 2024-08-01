import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';

const Hero = () => {
  return (
    <Box sx={{ pt: 8, pb: 4, color: 'white', position: 'relative', height: '450px' }}>
      <Box
        component="img"
        src="/accents/bubbles-one.png"
        alt="Decorative bubbles"
        sx={{
          position: 'absolute',
          top: '0',
          right: '0',
          width: '50%',
          height: 'auto',
          zIndex: 0,
          opacity: 0.5,
          pointerEvents: 'none'
        }}
      />
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
            <img src="/accents/arrows.png" alt="Decorative bubbles" style={{ width: '20%', height: 'auto', bottom: '0'  }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
