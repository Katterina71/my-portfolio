import React from 'react';
import { Container, Typography, Box, TextField, Button, Grid, Link } from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ py: 10, color: 'white' }}>
      <Container
        sx={{
          width: '100%',
          height: 'auto',
          background: 'linear-gradient(90deg, #2295B3 0%, #42459A 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.5rem',
          borderRadius: '8px',
          p: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Connect with me
        </Typography>
        <Grid container spacing={4} sx={{ width: '100%' }}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" gutterBottom sx={{mb:4}}>
            I will be happy to answer your questions regarding my work. Contact me by phone or send a form indicating your email.
          Thank you for looking at my portfolio! 
            </Typography>
            <Link
              href="tel:+16469720408"
              variant="body1"
              sx={{
                display: 'block',
                color: '#fff',
                '&:hover': {
                  color: '#1EFFF1',
                },
              }}
              underline="hover"
            >
              +1(646)972-04-08
            </Link>
            <Link
              href="mailto:beviatori@gmail.com"
              variant="body1"
              sx={{
                display: 'block',
                color: '#fff',
                '&:hover': {
                  color: '#1EFFF1',
                },
              }}
              underline="hover"
            >
              beviatori@gmail.com
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              margin="normal"
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
              }}
            />
                        <TextField
              label="Your Company"
              variant="outlined"
              fullWidth
              margin="normal"
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
              }}
            />
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              margin="normal"
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
              }}
            />
            <TextField
              label="Your Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: '#FF077E',
                '&:hover': { backgroundColor: '#D20666' },
                color: 'white',
              }}
            >
              Send a message
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
