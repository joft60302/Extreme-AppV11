import { useEffect, useState } from "react";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';

import Box from '@mui/material/Box';

import './NavBarTH.css';

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

                                <Box>{Show === 1 && (<Box sx={{mx: 2}}><div className="dropdownth" >
                                    <Link href="/TH/aboutus"><button className="dropbtn1th" >เกี่ยวกับฉัน</button></Link>
                                </div></Box>)}</Box>
                                
                                <Box>{Show === 0 && (<Box sx={{mx: 2}}><div className="dropdownth" >
                                    <Link href="/TH/aboutus"><button className="dropbtn0th" >เกี่ยวกับฉัน</button></Link>
                                </div></Box>)}</Box>

                                <Box>{Show === 1 && (<Box sx={{mx: 2, borderBottom: 2,  borderColor: 'primary.main'}}><div className="dropdownth" >
                                    <button className="dropbtn1th" >บริการ</button>
                                        <div className="dropdown-content-serviceth">
                                            <a href="/TH/service/enhancement">พัฒนา</a>
                                            <a href="/TH/service/protectio">ป้องกัน</a>
                                            <a href="/TH/service/maintain">บำรุง</a>
                                            <a href="/TH/service/consult">ปรึกษา</a>
                                            <a href="/TH/service/course">รายละเอียดคอร์ส</a>
                                        </div>
                                </div></Box>)}</Box>
                                
                                <Box>{Show === 0 && (<Box sx={{mx: 2, borderBottom: 2,  borderColor: 'secondary.main'}}><div className="dropdownth" >
                                    <button className="dropbtn0th" >บริการ</button>
                                        <div className="dropdown-content-serviceth">
                                            <a href="/TH/service/enhancement">พัฒนา</a>
                                            <a href="/TH/service/protectio">ป้องกัน</a>
                                            <a href="/TH/service/maintain">บำรุง</a>
                                            <a href="/TH/service/consult">ปรึกษา</a>
                                            <a href="/TH/service/course">รายละเอียดคอร์ส</a>
                                        </div>
                                </div></Box>)}</Box>

                                <Box>{Show === 1 && (<Box sx={{mx: 2}}><div className="dropdownth" >
                                    <button className="dropbtn1th" >นัดหมาย</button>
                                        <div className="dropdown-content-bookth">
                                            <a href="/TH/book/day">วัน-เวลา</a>
                                            <a href="/TH/book/topic">ปรึกษา, ล้างรถ, ล้างรถ&ขัดเงา, ล้างรถ&เคลือบเงา, อื่นๆ</a>
                                            <a href="/TH/book/contact">รายชื่อติดต่อ</a>
                                        </div>
                                </div></Box>)}</Box>
                                
                                <Box>{Show === 0 && (<Box sx={{mx: 2}}><div className="dropdownth" >
                                    <button className="dropbtn0th" >นัดหมาย</button>
                                        <div className="dropdown-content-bookth">
                                            <a href="/TH/book/day">วัน-เวลา</a>
                                            <a href="/TH/book/topic">ปรึกษา, ล้างรถ, ล้างรถ&ขัดเงา, ล้างรถ&เคลือบเงา, อื่นๆ</a>
                                            <a href="/TH/book/contact">รายชื่อติดต่อ</a>
                                        </div>
                                </div></Box>)}</Box>

                                <Box>{Show === 1 && (<Box sx={{mx: 2}}><div className="dropdownth" >
                                    <Link href="/TH/blog"><button className="dropbtn1th" >บล็อก</button></Link>
                                </div></Box>)}</Box>
                                
                                <Box>{Show === 0 && (<Box sx={{mx: 2}}><div className="dropdownth" >
                                    <Link href="/TH/blog"><button className="dropbtn0th" >บล็อก</button></Link>
                                </div></Box>)}</Box>

                        </Box>

                        <Box>{Show === 1 && (<Box><div className="dropdownth" >
                                <button className="dropbtn1th" >TH &nbsp; ▼ </button>
                                    <div className="dropdown-content-langth">
                                        <a href="/">EN</a>
                                    </div>
                        </div></Box>)}</Box>
                            
                        <Box>{Show === 0 && (<Box><div className="dropdownth" >
                                <button className="dropbtn0th" >TH &nbsp; ▼</button>
                                    <div className="dropdown-content-langth">
                                        <a href="/">EN</a>
                                    </div>
                        </div></Box>)}</Box>
                    
                </Toolbar>

        </AppBar>

    </>
    );
}
export default NavBar;