import { useEffect, useState } from "react";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';

import Box from '@mui/material/Box';

import './NavBar.css';

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

                            <Box>{Show === 1 && (<Box sx={{mx: 2, borderBottom: 2,  borderColor: 'primary.main' }}><div className="dropdown" >
                                <button className="dropbtn1" >ABOUT US</button>
                            </div></Box>)}</Box>
                            
                            <Box>{Show === 0 && (<Box sx={{mx: 2, borderBottom: 2 }}><div className="dropdown" >
                                <button className="dropbtn0" >ABOUT US</button>
                            </div></Box>)}</Box>

                            <Box>{Show === 1 && (<Box sx={{mx: 2}}><div className="dropdown" >
                                <button className="dropbtn1" >SERVICE</button>
                                    <div className="dropdown-content-service">
                                        <a href="#">Enhancement</a>
                                        <a href="#">Protection</a>
                                        <a href="#">Maintain</a>
                                        <a href="#">Consult</a>
                                        <a href="#">Home Detailer Course</a>
                                    </div>
                            </div></Box>)}</Box>
                            
                            <Box>{Show === 0 && (<Box sx={{mx: 2}}><div className="dropdown" >
                                <button className="dropbtn0" >SERVICE</button>
                                    <div className="dropdown-content-service">
                                        <a href="#">Enhancement</a>
                                        <a href="#">Protection</a>
                                        <a href="#">Maintain</a>
                                        <a href="#">Consult</a>
                                        <a href="#">Home Detailer Course</a>
                                    </div>
                            </div></Box>)}</Box>

                            <Box>{Show === 1 && (<Box sx={{mx: 2}}><div className="dropdown" >
                                <button className="dropbtn1" >BOOK APPOINTMENT</button>
                                    <div className="dropdown-content-book">
                                        <a href="#">Tab: Day Time</a>
                                        <a href="#">Topic: Consult, Wash, Wash&Wax, Wash&Gloss, Other</a>
                                        <a href="#">Customer Contact: Name, phone number, Line</a>
                                    </div>
                            </div></Box>)}</Box>
                            
                            <Box>{Show === 0 && (<Box sx={{mx: 2}}><div className="dropdown" >
                                <button className="dropbtn0" >BOOK APPOINTMENT</button>
                                    <div className="dropdown-content-book">
                                        <a href="#">Tab: Day Time</a>
                                        <a href="#">Topic: Consult, Wash, Wash&Wax, Wash&Gloss, Other</a>
                                        <a href="#">Customer Contact: Name, phone number, Line</a>
                                    </div>
                            </div></Box>)}</Box>

                            <Box>{Show === 1 && (<Box sx={{mx: 2}}><div className="dropdown" >
                                <button className="dropbtn1" >BLOG</button>
                            </div></Box>)}</Box>
                            
                            <Box>{Show === 0 && (<Box sx={{mx: 2}}><div className="dropdown" >
                                <button className="dropbtn0" >BLOG</button>
                            </div></Box>)}</Box>

                        </Box>

                        <Box>{Show === 1 && (<Box><div className="dropdown" >
                                <button className="dropbtn1" > EN &nbsp; ▼ </button>
                                    <div className="dropdown-content-lang">
                                        <a href="#">TH</a>
                                    </div>
                        </div></Box>)}</Box>
                            
                        <Box>{Show === 0 && (<Box><div className="dropdown" >
                                <button className="dropbtn0" >EN &nbsp; ▼</button>
                                    <div className="dropdown-content-lang">
                                        <a href="#">TH</a>
                                    </div>
                        </div></Box>)}</Box>
                    
                </Toolbar>

        </AppBar>

    </>
    );
}
export default NavBar;