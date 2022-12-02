import React from 'react'
import { Button, Box } from '@mui/material'
import './text.css'
import { useState } from 'react'
import logo1 from "../../pic/logo/logo1.png";

const LoginPage = (props) => {

  const [Username,SetUsername] = useState('')
  const [Password,SetPassword] = useState('')
  const [Warn,SetWarn] = useState(0)

  const InputUsername = event =>{
    SetUsername(event.target.value)
  }

  const Login=()=>{
    if(Username==="admin"&&Password==="12345678"){
      localStorage.setItem("LoginValue",("1"));
    props.LoginCheck(1)
    }
    else {
      localStorage.setItem("LoginValue",null);
      SetWarn(1)
    }
  }

  return (
    <Box sx={{my:2}} display="flex" flexDirection="column" alignItems="center">
      <Box component="img" sx={{height: 100,my:2}} alt="logo" src={logo1}></Box>
      <form>
        <div className="form">
          <label className="text">USERNAME </label>
          <input type="text" onChange={InputUsername} placeholder="username"></input>
        </div>
        <div>
          <label className="text" >PASSWORD </label>
          <input type="password" onChange={(e)=>SetPassword(e.target.value)} placeholder="password"></input>
        </div>
      </form>
    <Button sx={{my:5}} variant="outlined" onClick={Login}><div className="text">Login</div></Button>
    { Warn === 1 && (<Box className="warning"> Username or Password is incorrect.</Box>) }
    </Box>
    
  
  )
}

export default LoginPage