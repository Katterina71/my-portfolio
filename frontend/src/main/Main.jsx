import React from 'react'
import { Box, Container, createTheme } from '@mui/material'

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

export default function Main() {
  return (
    <Box sx={{ backgroundColor: 'transparent' }}>
        <Container>
            <h1>Hello</h1>
        </Container>
    </Box>
  )
}
