import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';

const Hero = () => {
  return (
    <Box sx={{ mt: 4, pt: { xs: 6, md: 8 }, pb: 4, color: 'white', position: 'relative', height: { xs: 'auto', md: '450px' } }}>
      <Container sx={{ height: '100%' }}>
        <Grid container spacing={4} sx={{ height: '100%' }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: { xs: 'center', md: 'flex-start' },
              height: '100%',
              textAlign: { xs: 'center', md: 'left' }, // Center text on mobile, left-align on larger screens
            }}
          >
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '2.5rem', sm: '2.5rem', md: '4rem' }, // Responsive font sizes
              }}
            >
              Hello! I'm Katerina,
              <br />a Full-Stack <br />Software Engineer
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: '#FF077E',
                width: { xs: '100%', sm: '200px' }, // Full-width button on mobile
                '&:hover': { backgroundColor: '#37FFF0' },
              }}
            >
              My portfolio
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              mt: { xs: 4, md: 0 }, // Add margin on top on mobile to avoid overlap
            }}
          >
            <img
              src="/profile.jpg"
              alt="Kate Iliushkina"
              style={{ width: '100%', maxWidth: '350px', borderRadius: '8px' }} // Adjust image size for mobile
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
