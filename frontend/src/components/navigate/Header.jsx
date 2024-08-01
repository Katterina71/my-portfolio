import React from 'react'
import {Box, CssBaseline, AppBar, Toolbar, IconButton, Button, Link, List, ListItem, ListItemText, Drawer  } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const navItems = ['ABOUT ME', 'PROJECTS', 'CONTACT'];

export default function Header() {
  const logoPath = 'logo.svg'    

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawer = (
    <Box  sx={{ width: 250, top: 0  }}  role="presentation"  onClick={toggleDrawer(false)}  onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map((item) => (
          <ListItem  key={item} component="a" href="#">
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar >
          <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{ mr: 2, display: { sm: 'none' } }} onClick={toggleDrawer(true)}  >
            <MenuIcon/>
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

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>

    </Box>
  )
}
