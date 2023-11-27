import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useState} from "react"
import { Paper } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import './register.css'
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import axios from 'axios'
import IconButton from '@mui/material/IconButton'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Register() {
  
  const[visited,setVisited]=useState(true);
         const[type,setType]=useState("password")

  const handleClickPassword=()=>
  {
    if(type==="password")
    {
      setType("text");
      setVisited(true);
    }
    else{
     setType("password");
     setVisited(false);
    }
  }

  const [pass,setPass]=useState();
  const [email,setemail]=useState();
  const [name,setName]=useState();
  const[error,Error]=useState(false);
  const handleSubmit = async (e) => {
    console.log("hi");
    await axios.post("http://localhost:3000/users",{"Name":name,"Password":pass,"email":email});
  }
  return (
   
    <div className="reg">
      <div className="d">
     <div className='regu' style={{width:"400px",height:"250px",borderRadius:"25px",backgroundImage:'url("https://media.gettyimages.com/id/1132934041/photo/passenger-airplane-taking-off-at-sunset.jpg?s=612x612&w=0&k=20&c=HorcmUFwRx0jr5C8_BDl0Y7-9wUa4DH7vkiHHZmKLd4=")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    marginLeft:"35px",
    backgroundPosition: 'center'}}>
      <div sx={{color:"darkblue",marginTop:"90px"}}>
      <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{width:"150px",borderRadius:"25px",color:"black",backgroundColor:'#8ecae6'}}
              sx={{ mt: 3, mb: 2 }} href="/login"
            >SIGN IN</Button>
     </div>
     </div>
    <div className="regi" style={{width:"450px",height:"445px"}}>
      <Container component="main" maxWidth="xs">
        
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}}>
        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '0px' }}>
          <Typography component="h1" variant="h5"  sx={{mt:"30px",color:"white"}}>
            <b>Register Now</b>
          </Typography>
          <div className='ic'>
            <div><FacebookIcon/></div>
            <div><GoogleIcon/></div>
          </div>
          <TextField
            className='name'
            margin='normal'
          placeholder="Username"
          onChange={(e)=>{
            setName(e.target.value);
          }}
          style={{backgroundColor:'#acb1ba',width:"250px",borderRadius:"25px"}}
          InputProps={{
              startAdornment: (
              <InputAdornment position="start">
                <PersonIcon className="icon" />
              </InputAdornment>
            ),
        }}
        />
            <TextField
            className='name'
          placeholder="Email"
          onChange={(e)=>{
            setemail(e.target.value);
          }}
          margin='normal'
          style={{backgroundColor:'#acb1ba',width:"250px",borderRadius:"25px"}}
          InputProps={{
              startAdornment: (
              <InputAdornment position="start">
                <EmailIcon className="icon" />
              </InputAdornment>
            ),
        }}
        />
           
           <TextField
    placeholder="Password"
    margin='normal'
    onChange={(e)=>{
      setPass(e.target.value);
    }}
    style={{borderRadius:"25px",width:"250px",backgroundColor:"#acb1ba"}}
    type={type}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
                <IconButton
                    onClick={
                        handleClickPassword
                    }
                    
                >
                    {visited ? (
                        <VisibilityIcon/>
                    ) : (
                        <VisibilityOffIcon />
                    )}
                </IconButton>
            </InputAdornment>
      ),
    }}
    /> 
            
            <button
              type="submit"
              fullWidth
              
              variant="contained"
              style={{width:"150px",borderRadius:"25px",color:"black",backgroundColor:"#8ecae6"}}
              sx={{ mt: 3, mb: 2 }}
            >SIGN UP</button>
            
        </form>
      </div>
    </Container>
      </div>
      </div>
      </div>
      
      
      
      
  );
}