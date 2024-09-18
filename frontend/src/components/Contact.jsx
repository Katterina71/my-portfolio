import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Grid, Link } from '@mui/material';
import { Phone, MailOutline, Place } from '@mui/icons-material';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
  });

  const [submitted, setSubmitted] = useState(false); // Track submission status
  const [submissionError, setSubmissionError] = useState(null); // Track submission errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name === '',
      email: !validateEmail(formData.email),
    };
    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email) {
      try {
        const response = await axios.post(import.meta.env.VITE_FORMSPREE_ENDPOINT, formData, {
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.status === 200) {
          setSubmitted(true); // Set submission success state
          setFormData({
            name: '',
            email: '',
            company: '',
            message: '',
          }); // Clear form data
        }
      } catch (error) {
        setSubmissionError('There was an error submitting the form. Please try again later.');
        console.error('Form submission error:', error);
      }
    }
  };

  return (
    <section id="contact">
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
          <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
            Let’s chat! 
          </Typography>
          <Grid container spacing={4} sx={{ width: '100%' }}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" gutterBottom sx={{ mb: 4 }}>
                I’ll be happy to answer any questions, feel free to leave a request, email or give me a call. 
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Place sx={{ mr: 1 }} />
                <Typography variant="body1">Denver, CO</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Phone sx={{ mr: 1 }} />
                <Link
                  href="tel:+16469720408"
                  variant="body1"
                  sx={{
                    color: '#fff',
                    '&:hover': {
                      color: '#1EFFF1',
                    },
                  }}
                  underline="hover"
                >
                  Call me
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <MailOutline sx={{ mr: 1 }} />
                <Link
                  href="mailto:beviatori@gmail.com"
                  variant="body1"
                  sx={{
                    color: '#fff',
                    '&:hover': {
                      color: '#1EFFF1',
                    },
                  }}
                  underline="hover"
                >
                  Email me
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  helperText={errors.name && "Name is required"}
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
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  helperText={errors.email && "Enter a valid email"}
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
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
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

                {/* Thank you message */}
                {submitted && (
                  <Box sx={{backgroundColor: 'white', py:2, borderRadius:1}}>
                  <Typography
                    variant="body2"
                    sx={{  color: 'success.main', textAlign: 'center' }}
                  >
                    Thank you for your message! I will get back to you shortly.
                  </Typography>
                  </Box>
                )}

                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: '#FF077E',
                    '&:hover': { backgroundColor: '#D20666' },
                    color: 'white',
                  }}
                >
                 Send a Message
                </Button>
                {submissionError && (
                  <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                    {submissionError}
                  </Typography>
                )}
              </form>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default Contact;
