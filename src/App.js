import React from 'react'
import { ThemeProvider } from '@mui/material'
import './App.css'
import NavBarCSSEN from './components/AppBar/complete/NavBarCSSEN'
import NavBarCSSTH from './components/AppBar/complete/NavBarCSSTH'
import theme from './utils/theme'

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import NavBarENAboutUs from './components/AppBar/complete/NavBarENAboutUs'
import NavBarENService from './components/AppBar/complete/NavBarENService'
import NavBarENBook from './components/AppBar/complete/NavBarENBook'
import NavBarENBlog from './components/AppBar/complete/NavBarENBlog'
import NavBarTHAboutUs from './components/AppBar/complete/NavBarTHAboutUs'
import NavBarTHService from './components/AppBar/complete/NavBarTHService'
import NavBarTHBook from './components/AppBar/complete/NavBarTHBook'
import NavBarTHBlog from './components/AppBar/complete/NavBarTHBlog'
import SaleReport from './components/Sale/SaleReport'
import SaleTab from './components/Sale/SaleTab'
import NavbarAbsolute from './components/AppBar/complete/NavbarAbsolute'
import NavbarSticky from './components/AppBar/complete/NavbarSticky'
import LoginPage from './components/Login/LoginPage'

import { useState } from "react"

function App() {

  const [LoginValue,SetLoginValue] = useState(0)
  
  const LoginLocalValue= localStorage.getItem("LoginValue");
  console.log(LoginLocalValue);

  const LoginCheck = (Value)=>{
    
    SetLoginValue(Value)
  }

  const Logout = (Value)=>{
    SetLoginValue(Value)
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<div className="App-header">
            <NavbarAbsolute/>
            <NavbarSticky/>
            <Home />
          </div>} />

          <Route path="/aboutus" element={<div className="App-header">
            <NavBarENAboutUs/>
          </div>} />

          <Route path="/service/enhancement" element={<div className="App-header">
            <NavBarENService/>
          </div>} />

          <Route path="/book/day" element={<div className="App-header">
            <NavBarENBook/>
          </div>} />

          <Route path="/blog" element={<div className="App-header">
            <NavBarENBlog/>
          </div>} />

          <Route path="/TH" element={<div className="App-header">
          <NavBarCSSTH/>
            <Home />
          </div>} />

          <Route path="/TH/aboutus" element={<div className="App-header">
          <NavBarTHAboutUs/>
          </div>} />    

          <Route path="/TH/service/enhancement" element={<div className="App-header">
          <NavBarTHService/>
          </div>} />

          <Route path="/TH/book/day" element={<div className="App-header">
          <NavBarTHBook/>
          </div>} />

          <Route path="/TH/blog" element={<div className="App-header">
          <NavBarTHBlog/>
          </div>} />

          {/*
          <Route path="/sale" element={<div className="App-header">
          <SaleReport/>
          </div>} />
          */}

          <Route path="/sale" element={<div className="App-header">
            
            {LoginLocalValue === null && 
            (<LoginPage LoginCheck={LoginCheck} />
            )}
            {LoginLocalValue === "1" && 
            (<SaleTab Logout={Logout} />
            )}

          </div>} />

        </Routes>
      </BrowserRouter>

    </ThemeProvider>


  );
}

export default App;
