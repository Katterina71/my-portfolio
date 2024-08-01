import React from 'react';
import { Container, Typography, Box, TextField, Button, Grid } from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: '#121212', color: 'white' }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Connect with me
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
              I will be happy to answer your questions regarding my work...
            </Typography>
            <Typography variant="body2" gutterBottom>
              +1 (646) 972-04-08
            </Typography>
            <Typography variant="body2">
              bevision@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Your Name" variant="outlined" fullWidth margin="normal" />
            <TextField label="Your Email" variant="outlined" fullWidth margin="normal" />
            <TextField label="Your Message" variant="outlined" fullWidth multiline rows={4} margin="normal" />
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Send a message
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
