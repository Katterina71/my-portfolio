import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const Hero = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 10, color: 'white', backgroundColor: '#121212' }}>
      <Container>
        <Typography variant="h3" component="h1" gutterBottom>
          Hello! I'm Kate Iliushkina,
          <br />
          a UX&UI Designer
        </Typography>
        <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
          My portfolio
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
