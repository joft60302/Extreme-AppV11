import { useEffect, useState } from "react";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Container from '@mui/material/Container';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';

function NavBar(){

    const [Position,SetPosition] = useState('transparent')
    const [Color, SetColor] = useState('primary')
    const [LableColor, SetLableColor]= useState('white')

    const [Value, SetValue]=useState(0)
    const handleClickTab = (e, newValue)=>{
        SetValue(newValue)
    }

    const [anchorEl, setAnchorEl]= React.useState(null)
    const handleOpenMenu = e =>{
        setAnchorEl(e.currentTarget)
    }
    const handleMenuClose =() =>{
        setAnchorEl(null)
    }

    const ServiceTab =()=>{
        SetValue(1)
        handleMenuClose()
    }

useEffect(()=>{
    const Scroll=()=>{
        if(window.scrollY>200){SetPosition('rgba(255, 255, 255,1)'); SetColor('secondary');SetLableColor('black');}
        else if(window.scrollY>150){SetPosition('rgba(255, 255, 255,0.75)'); SetColor('secondary');SetLableColor('black');}
        else if(window.scrollY>50){SetPosition('rgba(255, 255, 255,0.25)'); SetColor('primary');SetLableColor('white');}
        else {SetPosition('transparent'); SetColor('primary');SetLableColor('white');}  
    }
    document.addEventListener('scroll', Scroll)
    return ()=>{
        document.removeEventListener('scroll', Scroll)
    }
},[])


const [open, setOpen] = React.useState(true);

const handleClick = () => {
  setOpen(!open);
};


return(
    <>
        <AppBar position="sticky" style={{ background: Position, boxShadow: 'none'}}>
            
                <Toolbar>

                        <Button disableRipple color={Color}>
                            LOGO
                        </Button>
                        
                        <Box display="flex" flexDirection="row" justifyContent="center" sx={{ flexGrow: 1}}>

                        <Box>
                        <ListItemText primary="Build" onClick={handleClick}>
                            <ListItemText primary="Inbox" />
                                {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemText>
                        </Box>
                        
                            <Tabs onChange={handleClickTab} textColor={Color} indicatorColor={Color} value={Value} sx={{'& .MuiTab-root': { color: LableColor}}}>
                                <Tab sx={{mx: 3, '&:hover': {color:'secondary.main', backgroundColor: 'primary.main'}}} disableRipple label= "ABOUT US"/>
                                <Tab aria-controls='menu' onMouseOver={handleOpenMenu} sx={{mx: 3}} disableRipple label="SERVICE"/>
                                <Tab sx={{mx: 3, '&:hover': {color:'secondary.main', backgroundColor: 'primary.main'}}} disableRipple label="BOOK APPOINTMENT"/>
                                <Tab sx={{mx: 3, '&:hover': {color:'secondary.main', backgroundColor: 'primary.main'}}} disableRipple label="BLOG"/>
                            </Tabs>
                        </Box>
                        
                        <Button disableRipple color={Color}>
                            Lang
                        </Button>
                        
                        <Menu disableAutoFocusItem id='menu' onMouseLeave={handleMenuClose} onClick={handleMenuClose} MenuListProps={{ onMouseLeave : handleMenuClose }} anchorEl={anchorEl} open={Boolean(anchorEl)} >
                            <MenuItem onClick={ServiceTab}>Enhancement</MenuItem>
                            <MenuItem onClick={ServiceTab}>Protection</MenuItem>
                            <MenuItem onClick={ServiceTab}>Maintain</MenuItem>
                            <MenuItem onClick={ServiceTab}>Consult</MenuItem>
                            <MenuItem onClick={ServiceTab}>Home Detailer Course</MenuItem>
                        </Menu> 
      
                </Toolbar>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                    </List>
                </Collapse>

        </AppBar>

    </>
    );
}
export default NavBar;