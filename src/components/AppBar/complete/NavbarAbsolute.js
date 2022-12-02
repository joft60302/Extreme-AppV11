import { useEffect, useState } from "react";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';

import Box from '@mui/material/Box';

import './NavBarEN.css';
import { IconButton, Link } from "@mui/material";
import logo0 from "../../../pic/logo/logo0.png"
import logo1 from "../../../pic/logo/logo1.png"

import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

function NavBar(){

    const [Position,SetPosition] = useState('transparent')
    const [Color, SetColor] = useState('primary')

    const [Show, SetShow]= useState(1)

    const [open, setOpen] = React.useState(false)
	const handleClick = () => {setOpen(!open);SetPosition('#fafafa');SetColor('secondary');SetShow(0);}

    const [OpenService, setOpenService] = React.useState(false)
	const handleClickService = () => { setOpenService(!OpenService);}

    const [OpenBook, setOpenBook] = React.useState(false)
	const handleClickBook = () => { setOpenBook(!OpenBook);}

useEffect(()=>{
    const Scroll=()=>{
        if(window.scrollY>64){setOpen(false);SetShow(2);}
        else {SetPosition('transparent'); SetColor('primary');setOpen(false);SetShow(1);}
    }
    document.addEventListener('scroll', Scroll)
    return ()=>{
        document.removeEventListener('scroll', Scroll)
    }
},[])

return(
    <>
        <AppBar position="absolute" style={{ background: Position, boxShadow: 'none'}}>
            
                <Toolbar>
                        {/*PC LOGO*/}
                        <Link  href="/"><Box>{Show === 1 && (<Box herf="/" component="img" sx={{height: 64, display: { xs: 'none', md: 'flex' }}} alt="logo" src={logo1}></Box>)}</Box></Link>
                        <Link  href="/"><Box>{Show === 0 && (<Box herf="/" component="img" sx={{height: 64, display: { xs: 'none', md: 'flex' }}} alt="logo" src={logo0}></Box>)}</Box></Link>
                        
                        {/*PC Menu*/}
                        <Box flexDirection="row" justifyContent="center" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>

                                <Box>{Show === 1 && (<Box sx={{mx: 2}}><div className="dropdownen" >
                                    <Link href="/aboutus"><button className="dropbtn1en" >ABOUT US</button></Link>
                                </div></Box>)}</Box>
                                
                                <Box>{Show === 0 && (<Box sx={{mx: 2}}><div className="dropdownen" >
                                    <Link href="/aboutus"><button className="dropbtn0en" >ABOUT US</button></Link>
                                </div></Box>)}</Box>

                                <Box>{Show === 1 && (<Box sx={{mx: 2}}><div className="dropdownen" >
                                    <button className="dropbtn1en" >SERVICE</button>
                                        <div className="dropdown-content-serviceen">
                                            <a href="/service/enhancement">Enhancement</a>
                                            <a href="/service/protection">Protection</a>
                                            <a href="/service/maintain">Maintain</a>
                                            <a href="/service/consult">Consult</a>
                                            <a href="/service/course">Home Detailer Course</a>
                                        </div>
                                </div></Box>)}</Box>
                                
                                <Box>{Show === 0 && (<Box sx={{mx: 2}}><div className="dropdownen" >
                                    <button className="dropbtn0en" >SERVICE</button>
                                        <div className="dropdown-content-serviceen">
                                            <a href="/service/enhancement">Enhancement</a>
                                            <a href="/service/protection">Protection</a>
                                            <a href="/service/maintain">Maintain</a>
                                            <a href="/service/consult">Consult</a>
                                            <a href="/service/course">Home Detailer Course</a>
                                        </div>
                                </div></Box>)}</Box>

                                <Box>{Show === 1 && (<Box sx={{mx: 2}}><div className="dropdownen" >
                                    <button className="dropbtn1en" >BOOK APPOINTMENT</button>
                                        <div className="dropdown-content-booken">
                                            <a href="/book/day">Tab: Day Time</a>
                                            <a href="/book/topic">Topic: Consult, Wash, Wash&Wax, Wash&Gloss, Other</a>
                                            <a href="/book/contact">Customer Contact: Name, phone number, Line</a>
                                        </div>
                                </div></Box>)}</Box>
                                
                                <Box>{Show === 0 && (<Box sx={{mx: 2}}><div className="dropdownen" >
                                    <button className="dropbtn0en" >BOOK APPOINTMENT</button>
                                        <div className="dropdown-content-booken">
                                            <a href="/book/day">Tab: Day Time</a>
                                            <a href="/book/topic">Topic: Consult, Wash, Wash&Wax, Wash&Gloss, Other</a>
                                            <a href="/book/contact">Customer Contact: Name, phone number, Line</a>
                                        </div>
                                </div></Box>)}</Box>

                                <Box>{Show === 1 && (<Box sx={{mx: 2}}><div className="dropdownen" >
                                    <Link href="/blog"><button className="dropbtn1en" >BLOG</button></Link>
                                </div></Box>)}</Box>
                                
                                <Box>{Show === 0 && (<Box sx={{mx: 2}}><div className="dropdownen" >
                                    <Link href="/blog"><button className="dropbtn0en" >BLOG</button></Link>
                                </div></Box>)}</Box>

                        </Box>

                        {/*Mobile Menu*/}
                        <Box sx={{width:74, display: { xs: 'flex', md: 'none' }}}>
                            <IconButton onClick={handleClick}>
                                <MenuIcon color={Color} />
                            </IconButton>
                        </Box>

                        {/*Mobile LOGO*/}
                        <Box sx={{justifyContent: 'center', flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
                            <Link  href="/"><Box>{Show === 1 && (
                                <Box component="img" sx={{justifyContent: 'center',flexGrow: 1, height: 64, display: { xs: 'flex', md: 'none' }}} alt="logo" src={logo1}></Box>
                            )}</Box></Link>

                            <Link  href="/"><Box>{Show === 0 && (
                                <Box component="img" sx={{flexGrow: 1, height: 64, display: { xs: 'flex', md: 'none' }}} alt="logo" src={logo0}></Box>
                            )}</Box></Link>
                        </Box>
 
                        {/*Language Menu*/}
                        <Box>{Show === 1 && (<Box><div className="dropdownen" >
                                <button className="dropbtn1en" > EN &nbsp; ▼ </button>
                                    <div className="dropdown-content-langen">
                                        <a href="/TH">TH</a>
                                    </div>
                        </div></Box>)}</Box>
                            
                        <Box>{Show === 0 && (<Box><div className="dropdownen" >
                                <button className="dropbtn0en" >EN &nbsp; ▼</button>
                                    <div className="dropdown-content-langen">
                                        <a href="/TH">TH</a>
                                    </div>
                        </div></Box>)}</Box>
                    
                </Toolbar>

                {/*Mobile Dropdown Menu*/}                    
                <Collapse in={open} timeout="auto" unmountOnExit sx={{display: { xs: 'flex', md: 'none' }}}>
                    <List disablePadding>

                        <ListItem disablePadding sx={{justifyContent: 'center'}}><Divider style={{width:'50%'}}/></ListItem>
                        <ListItemButton sx={{height:50 ,justifyContent: 'center'}}>
                            <Link href="/aboutus"><div className="dropbtn0en">ABOUT US</div></Link>
                        </ListItemButton>
                        <ListItem disablePadding sx={{justifyContent: 'center'}}><Divider style={{width:'50%'}}/></ListItem>

                        <ListItemButton onClick={handleClickService} sx={{height:50, justifyContent: 'center'}}>
                            <div className="dropbtn0en">SERVICE &nbsp; ▼</div>                            
                        </ListItemButton>
                                <Collapse in={OpenService} timeout="auto" unmountOnExit sx={{display: { xs: 'flex', md: 'none' }}}>
                                    <List disablePadding>
                                        <ListItemButton sx={{height:50 ,justifyContent: 'center'}}>
                                            <div className="dropbtn0en">Enhancement</div>
                                        </ListItemButton>
                                        <ListItemButton sx={{height:50 ,justifyContent: 'center'}}>
                                            <div className="dropbtn0en">Protection</div>
                                        </ListItemButton>
                                        <ListItemButton sx={{height:50 ,justifyContent: 'center'}}>
                                            <div className="dropbtn0en">Maintain</div>
                                        </ListItemButton>
                                        <ListItemButton sx={{height:50 ,justifyContent: 'center'}}>
                                            <div className="dropbtn0en">Consult</div>
                                        </ListItemButton>
                                        <ListItemButton sx={{height:50 ,justifyContent: 'center'}}>
                                            <div className="dropbtn0en">Home Detailer Course</div>
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            <ListItem disablePadding sx={{justifyContent: 'center'}}><Divider style={{width:'50%'}}/></ListItem>


                        <ListItemButton onClick={handleClickBook} sx={{height:50 ,justifyContent: 'center'}}>
                            <div className="dropbtn0en">BOOK APPOINTMENT &nbsp; ▼</div>  
                        </ListItemButton>
                                <Collapse in={OpenBook} timeout="auto" unmountOnExit sx={{display: { xs: 'flex', md: 'none' }}}>
                                    <List disablePadding>
                                        <ListItemButton sx={{height:50 ,justifyContent: 'center'}}>
                                            <div className="dropbtn0en">Tab: Day Time</div>
                                        </ListItemButton>
                                        <ListItemButton sx={{height:50 ,justifyContent: 'center'}}>
                                            <div className="dropbtn0en">Topic: Consult, Wash, Wash&Wax, Wash&Gloss, Other</div>
                                        </ListItemButton>
                                        <ListItemButton sx={{height:50 ,justifyContent: 'center'}}>
                                            <div className="dropbtn0en">Customer Contact: Name, phone number, Line</div>
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            <ListItem disablePadding sx={{justifyContent: 'center'}}><Divider style={{width:'50%'}}/></ListItem>

                        <ListItemButton sx={{height:50 ,justifyContent: 'center'}}>
                            <div className="dropbtn0en">BLOG</div>
                        </ListItemButton>
                        
                    </List>
                </Collapse>

        </AppBar>

    </>
    );
}
export default NavBar;