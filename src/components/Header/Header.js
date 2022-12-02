import { useEffect, useState } from "react";
import car from '../video/car.mp4'
import './Header.css'
import { Box, keyframes } from "@mui/material";
import styled from "@mui/material/styles/styled";

const textSlide = keyframes`
0% {
  -webkit-transform: translateX(-1000px) scale(0.25);
          transform: translateX(-1000px) scale(0.25);
  opacity: 0;
}
70% {
  -webkit-transform: translateX(0) scale(0.7);
          transform: translateX(0) scale(0.7);
  opacity: 1;
}

71% {
  -webkit-transform: scale(0.7);
          transform: scale(0.7);
}
100% {
  -webkit-transform: scale(1);
          transform: scale(1);
}
`;

const BoxSlide = styled(Box)(({ slide }) => ({
  animation: slide && `${textSlide} 3s ease-out both`
}));

export const Header = () => {

const [slide, setSlide] = useState(0);

useEffect(()=>{
  setTimeout(()=>{
    //animation
    setSlide(1);
  },500);
},[]);

  return (
    <div className="main">
      {/* <div className="overlay"></div> */}
        <video src={car} autoPlay loop muted/>
         <BoxSlide slide={slide} sx={{my: -10}}><div className="content">
          <h1>EXTREME</h1>
          <h5>CAR BEAUTY CENTER</h5></div>
        </BoxSlide>
        
    </div>
  )
}
