import { useEffect, useState } from "react";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function NavBar(){

    const [Position,SetPosition] = useState('transparent')
    const [Color, SetColor] = useState('primary')
    const [LableColor, SetLableColor]= useState('white')

    const [Value, SetValue]=useState(0)
    const handleClickTab = (e, newValue)=>{
        SetValue(newValue)
    }

    const [anchorEl1, setAnchorEl1]= React.useState(null)
    const [anchorEl2, setAnchorEl2]= React.useState(null)
    const handleOpenMenu1 = e =>{ 
        setAnchorEl1(e.currentTarget)
    }
    const handleOpenMenu2 = e =>{ 
        setAnchorEl2(e.currentTarget)
    }
    const handleMenuClose =() =>{
        setAnchorEl1(null)
        setAnchorEl2(null)
    }

    const ServiceTab =()=>{
        SetValue(1)
        handleMenuClose()
    }

    const BookTab =()=>{
        SetValue(2)
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

return(
    <>
        <AppBar position="sticky" style={{ background: Position, boxShadow: 'none'}}>
            
                <Toolbar>

                        <Button disableRipple color={Color}>
                            LOGO
                        </Button>
                        
                        <Box display="flex" flexDirection="row" justifyContent="center" sx={{ flexGrow: 1}}>
                            <Tabs onChange={handleClickTab} textColor={Color} indicatorColor={Color} value={Value} sx={{'& .MuiTab-root': { color: LableColor}}}>
                                <Tab sx={{mx: 3, '&:hover': {color:'secondary.main', backgroundColor: 'primary.main'}}} disableRipple label= "ABOUT US"/>
                                <Tab aria-controls='menu1' onClick={handleOpenMenu1} sx={{mx: 3, '&:hover': {color:'secondary.main', backgroundColor: 'primary.main'}}} disableRipple label="SERVICE"/>
                                <Tab aria-controls='menu2' onClick={handleOpenMenu2} sx={{mx: 3, '&:hover': {color:'secondary.main', backgroundColor: 'primary.main'}}} disableRipple label="BOOK APPOINTMENT"/>
                                <Tab sx={{mx: 3, '&:hover': {color:'secondary.main', backgroundColor: 'primary.main'}}} disableRipple label="BLOG"/>
                            </Tabs>
                        </Box>
                        
                        <Button disableRipple color={Color}>
                            Lang
                        </Button>
                        
                        <Menu elevation={0} disableAutoFocusItem id='menu1' onClose={handleMenuClose} MenuListProps={{ onMouseLeave : handleMenuClose }} anchorEl={anchorEl1} open={Boolean(anchorEl1)} >
                            <MenuItem onClick={ServiceTab}>Enhancement</MenuItem>
                            <MenuItem onClick={ServiceTab}>Protection</MenuItem>
                            <MenuItem onClick={ServiceTab}>Maintain</MenuItem>
                            <MenuItem onClick={ServiceTab}>Consult</MenuItem>
                            <MenuItem onClick={ServiceTab}>Home Detailer Course</MenuItem>
                        </Menu> 

                        <Menu elevation={0} disableAutoFocusItem id='menu2' onClose={handleMenuClose} MenuListProps={{ onMouseLeave : handleMenuClose }} anchorEl={anchorEl2} open={Boolean(anchorEl2)} >
                            <MenuItem onClick={BookTab}>Tab: Day Time</MenuItem>
                            <MenuItem onClick={BookTab}>Topic: Consult, Wash, Wash&Wax, Wash&Gloss, Other</MenuItem>
                            <MenuItem onClick={BookTab}>Customer Contact: Name, phone number, Line</MenuItem>
                        </Menu> 
                </Toolbar>

        </AppBar>
    </>
    );
}
export default NavBar;