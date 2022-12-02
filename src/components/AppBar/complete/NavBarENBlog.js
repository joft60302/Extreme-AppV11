import { useEffect, useState } from "react";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';

import Box from '@mui/material/Box';

import './NavBarEN.css';
import { Link } from "@mui/material";

function NavBar(){

    const [Position,SetPosition] = useState('transparent')
    const [Color, SetColor] = useState('primary')

    const [Show, SetShow]= useState(1)

useEffect(()=>{
    const Scroll=()=>{
        if(window.scrollY>200){SetPosition('rgba(255, 255, 255,1)'); SetColor('secondary');SetShow(0);}
        else if(window.scrollY>150){SetPosition('rgba(255, 255, 255,0.75)'); SetColor('secondary');SetShow(0);}
        else if(window.scrollY>50){SetPosition('rgba(255, 255, 255,0.25)'); SetColor('primary');SetShow(1);}
        else {SetPosition('transparent'); SetColor('primary');SetShow(1);}  
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

                                <Box>{Show === 1 && (<Box sx={{mx: 2, borderBottom: 2,  borderColor: 'primary.main'}}><div className="dropdownen" >
                                    <Link href="/blog"><button className="dropbtn1en" >BLOG</button></Link>
                                </div></Box>)}</Box>
                                
                                <Box>{Show === 0 && (<Box sx={{mx: 2, borderBottom: 2,  borderColor: 'secondary.main'}}><div className="dropdownen" >
                                    <Link href="/blog"><button className="dropbtn0en" >BLOG</button></Link>
                                </div></Box>)}</Box>

                        </Box>

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

        </AppBar>

    </>
    );
}
export default NavBar;