import React from 'react'
import {Box, CssBaseline, AppBar, Toolbar, IconButton, Button, Link} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const navItems = ['ABOUT ME', 'SKILLS', 'PROJECTS', 'CONTACT'];

export default function Header() {


  const logoPath = 'logo.svg'    

  return (
    <Box sx={{ display: 'flex', borderBottom: '10px solid #fffff'}}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar >
          <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{ mr: 2, display: { sm: 'none' } }}  >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }} >
               <img  src={logoPath}  alt='logo'  loading="lazy" />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' }}}>
            {navItems.map((item) => (
              <Link href="#" key={item} sx={{ color: '#fff', mr:4, '&:hover': {
                color: '#1EFFF1'},}} underline="hover">
                {item}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
