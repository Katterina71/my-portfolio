import React from 'react'
import {Box, Grid, Link, Container, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#1C2232', color: '#fff',  py: 3,  width: '100%', position: 'fixed', bottom: 0  }}>

<Container>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item md={4} sx={{ textAlign: 'left' }}>
            <Typography variant="body2">© 2024 Copyright</Typography>
            <Typography variant="body2">
              Website’s portfolio by Ekaterina Iliushkina
            </Typography>
          </Grid>
          <Grid item md={4} sx={{ textAlign: 'center' }}>
            <Link
              href="tel:+16469720408"
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
          <Grid item md={4} sx={{ textAlign: 'right', justifyContent: 'space-between'}}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2, // Add gap between icons
                alignItems: 'center',
              }} >
            <img src='linkedIn.svg' alt='LinkedIn' />
            <img src='facebook.svg' alt='Facebook' />
            </Box>
          </Grid>
        </Grid>
      </Container>
      

    </Box>
  )
}
