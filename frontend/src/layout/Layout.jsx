import React from 'react'

import {Box,ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import { createTheme } from '@mui/material';

import Header from '../components/navigate/Header';
import Footer from '../components/navigate/Footer';

const theme = createTheme({
    components: {
      MuiAppBar: {
            styleOverrides: {
              root: {
                boxShadow: 'none', // Remove shadow from AppBar
              },
            },
          },
      MuiToolbar: {
        styleOverrides: {
          root: {
            backgroundColor: '#1C2232', // Custom background color for the Toolbar
            borderBottom: '2px solid #FFFFF5', // Custom bottom border
            color: '#FFFFF5', // Custom text color
            fontSize: '1rem',
          },
        },
      },
      MuiBox: {
        styleOverrides: {
          root: {
            backgroundColor: 'transparent', // Remove background color for the Box component
          },
        },
      },
  }});

export default function Layout({children}) {

  return (
    <>
    <ThemeProvider theme={theme}>

        {/* Using GlobalStyles component */}
        {/* <GlobalStyles
        styles={{
          '.MuiBox-root': {
            backgroundColor: '#1C2232', // Remove background color for all Box components
          },
        }}
      /> */}

        {/* Helps to reset browser defaults */}
        <CssBaseline />  
        <Box sx={{ marginTop: '64px', backgroundColor:'#1C2232' }}>
                <Header />
                {children}
                <Footer />
        </Box>
    </ThemeProvider>
    </>
  )
}
