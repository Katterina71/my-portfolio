import React from 'react';
import { Box, Grid, Link, Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#1C2232',
        color: '#fff',
        py: 3,
        width: '100%',
        flexShrink: 0, // Ensures the footer doesn't shrink and stays at the bottom
      }}
    >
      <Container>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="body2">© 2024 Copyright</Typography>
            <Typography variant="body2">
              Website’s portfolio by Ekaterina Iliushkina
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Link
              href="tel:+16469720408"
              sx={{
                display: 'block',
                color: '#fff',
                '&:hover': {
                  color: '#1EFFF1',
                },
                fontSize: '1rem'
              }}
              underline="hover"
            >
              +1(646)972-04-08
            </Link>
            <Link
              href="mailto:beviatori@gmail.com"
              sx={{
                display: 'block',
                color: '#fff',
                '&:hover': {
                  color: '#1EFFF1',
                },
                fontSize: '1rem'
              }}
              underline="hover"
            >
              beviatori@gmail.com
            </Link>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-end' },
                gap: 2, // Add gap between icons
                alignItems: 'center',
              }}
            >
              <img src="linkedIn.svg" alt="LinkedIn" />
              <img src="facebook.svg" alt="Facebook" />
              <img src="github.svg" alt="Github" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
