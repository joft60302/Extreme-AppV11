import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from './Logo.png';
import Menu2 from './Menu2';
import Menu1 from './Menu1';
import Divider from '@mui/material/Divider';
import Lang from './Lang';
import { useEffect, useState } from "react";

function ResponsiveAppBar() {

  const [Position,SetPosition] = useState('transparent')

  useEffect(()=>{
      const Scroll=()=>{
        if(window.scrollY<50){SetPosition('transparent')}
        if(window.scrollY>50){SetPosition('rgba(67, 129, 168,0.25)')}
        if(window.scrollY>100){SetPosition('rgba(67, 129, 168,0.5)')}
        if(window.scrollY>150){SetPosition('rgba(67, 129, 168,0.75)')}
        if(window.scrollY>200){SetPosition('rgba(67, 129, 168,1)')}
        
      }
      document.addEventListener('scroll', Scroll)
      return ()=>{
          document.removeEventListener('scroll', Scroll)
      }
  },[])

  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" style={{ background: Position, boxShadow: 'none'}}>
      
      <Container maxWidth="xl">
        <Toolbar disableGutters>

        <Box  href ="/"
              component="img"
              sx={{ height: 64, display: { xs: 'none', md: 'flex' }, mr: 1 }}
              alt="logo."
              src={Logo}
            />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button sx={{ mx: 2}} color="inherit" >ABOUT US</Button>
                </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <Menu1/>
                  <Divider sx={{ my: 0.5 }} />
                  <Menu2/>
            </Menu>
          </Box>

          <Typography sx={{flexGrow: 1,}}>
            <Box
              component="img"
              sx={{display: { xs: 'flex', md: 'none' },height: 50,flexGrow: 1}}
              alt="logo."
              src={Logo}
            />
          </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            <Button color="inherit" sx={{ my: 2,mx: 3, color: 'white', display: 'block' }}>ABOUT US</Button>
            <Menu1/>   
            <Menu2/>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Typography textAlign="center"><Lang/></Typography> 
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
