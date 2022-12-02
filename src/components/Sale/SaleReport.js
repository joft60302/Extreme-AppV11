import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box'
import { Button } from '@mui/material'

const SaleReport = () => {

    const [X, SetX] = useState(0)
    const [Y, SetY] = useState(0)
    const [Z, SetZ] = useState(0)
    const [Course, SetCoures] = useState(null)  
    const SelectX = () => {SetX(1);SetY(0);SetZ(0);SetCoures('X.png');}
    const SelectY = () => {SetX(0);SetY(1);SetZ(0);SetCoures('Y.png');}
    const SelectZ = () => {SetX(0);SetY(0);SetZ(1);SetCoures('Z.png');}

    const [A, SetA] = useState(0)
    const [B, SetB] = useState(0)
    const [C, SetC] = useState(0)
    const [Body, SetBody] = useState(null)
    const SelectA = () => {if(A===0){SetI(0);SetJ(0);SetK(0);SetExtra1(0);SetExtra2(0);SetExtra3(0);} SetA(1);SetB(0);SetC(0);SetBody('A.png');}
    const SelectB = () => {if(B===0){SetI(0);SetJ(0);SetK(0);SetExtra1(0);SetExtra2(0);SetExtra3(0);} SetA(0);SetB(1);SetC(0);SetBody('B.png');}
    const SelectC = () => {if(C===0){SetI(0);SetJ(0);SetK(0);SetExtra1(0);SetExtra2(0);SetExtra3(0);} SetA(0);SetB(0);SetC(1);SetBody('C.png');}

    const [I, SetI] = useState(0)
    const [J, SetJ] = useState(0)
    const [K, SetK] = useState(0)   
    const [Extra1, SetExtra1] = useState(0)
    const [Extra2, SetExtra2] = useState(0)
    const [Extra3, SetExtra3] = useState(0)
    const SelectI = (Extra) => {if(I===1){SetI(0);SetExtra1(0);} else {SetI(1);SetExtra1(Extra);}}
    const SelectJ = (Extra) => {if(J===1){SetJ(0);SetExtra2(0);} else {SetJ(1);SetExtra2(Extra);}}
    const SelectK = (Extra) => {if(K===1){SetK(0);SetExtra3(0);} else {SetK(1);SetExtra3(Extra);}}

    const Report = () => {
        console.log("-----------");
        console.log(Course);
        console.log(Body);
        if(Extra1!==0)console.log(Extra1);
        if(Extra2!==0)console.log(Extra2);
        if(Extra3!==0)console.log(Extra3);
    }

  return (
    <>
        {/*Course*/}
        <Box>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{height: 100, width: '100%' }}><Button>EXTERIOR PAINT CORRECTION</Button></Box>

            <Box display="flex"flexDirection="column" justifyContent="center" alignItems="center" sx={{width: '100%' }}>
                <Box onClick={SelectX} border={X} sx={{my:2}}><Button>X</Button></Box>
                <Box onClick={SelectY} border={Y} sx={{my:2}}><Button>Y</Button></Box>
                <Box onClick={SelectZ} border={Z} sx={{my:2}}><Button>Z</Button></Box>
            </Box>
        </Box>

        {/*1st Choice*/}
        <Box>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{height: 100, width: '100%' }}><Button>BODY CERAMIC</Button></Box>

            <Box display="flex"flexDirection="column" justifyContent="center" alignItems="center" sx={{width: '100%' }}>
                <Box onClick={SelectA} border={A} sx={{my:2}}><Button>A</Button></Box>
                <Box onClick={SelectB} border={B} sx={{my:2}}><Button>B</Button></Box>
                <Box onClick={SelectC} border={C} sx={{my:2}}><Button>C</Button></Box>
            </Box>
        </Box>

        {/*2nd for A*/}
        <Box>{A === 1 && (<Box>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{height: 100, width: '100%' }}><Button>EXTRA CERAMIC</Button></Box>

            <Box display="flex"flexDirection="column" justifyContent="center" alignItems="center" sx={{width: '100%' }}>
                <Box onClick={()=>SelectI('A1.png')} border={I} sx={{my:2}}> <Button>A1</Button></Box>
                <Box onClick={()=>SelectJ('A2.png')} border={J} sx={{my:2}}> <Button>A2</Button></Box>
                <Box onClick={()=>SelectK('A3.png')} border={K} sx={{my:2}}> <Button>A3</Button></Box>
            </Box>
        </Box>)}</Box>

        {/*2rd for B*/}
        <Box>{B === 1 && (<Box>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{height: 100, width: '100%' }}><Button>EXTRA CERAMIC</Button></Box>

            <Box display="flex"flexDirection="column" justifyContent="center" alignItems="center" sx={{width: '100%' }}>
                <Box onClick={()=>SelectI('B1.png')} border={I} sx={{my:2}}> <Button>B1</Button></Box>
                <Box onClick={()=>SelectJ('B2.png')} border={J} sx={{my:2}}> <Button>B2</Button></Box>
                <Box onClick={()=>SelectK('B3.png')} border={K} sx={{my:2}}> <Button>B3</Button></Box>
            </Box>
        </Box>)}</Box>

        {/*2rd for C*/}
        <Box>{C === 1 && (<Box>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{height: 100, width: '100%' }}><Button>EXTRA CERAMIC</Button></Box>

            <Box display="flex"flexDirection="column" justifyContent="center" alignItems="center" sx={{width: '100%' }}>
                <Box onClick={()=>SelectI('C1.png')} border={I} sx={{my:2}}> <Button>C1</Button></Box>
                <Box onClick={()=>SelectJ('C2.png')} border={J} sx={{my:2}}> <Button>C2</Button></Box>
                <Box onClick={()=>SelectK('C3.png')} border={K} sx={{my:2}}> <Button>C3</Button></Box>
            </Box>
        </Box>)}</Box>

        {/*Test Report Variable*/}
        <Button onClick={Report}>Report</Button>
    </>
  )
}

export default SaleReport