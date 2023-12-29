import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import axios from "axios";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
    
    
    const[fname,setFName]=useState("");
    const[lname,setLName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[flag,setFlag]=useState(false);
    const navigate=useNavigate();
    const handleFname=(event)=>
    {
        setFName(event.target.value);
    }
    const handleLname=(event)=>
    {
        setLName(event.target.value);
    }
    const handleEmail=(event)=>
    {
        setEmail(event.target.value);
    }
    const handlePassword=(event)=>
    {
        setPassword(event.target.value);
    }
    const handleSubmit=(event)=>
    {
      if(fname!=="" && lname!=="" && email!="" && password!="")
            {
        event.preventDefault();
        axios.
        post("http://localhost:3001/users",{"fname":fname,"lname":lname,"email":email,"password":password})
        .then((res)=>
        {
            console.log(res.data);
            
            navigate('/')
            

        })
        .catch((error)=>
        {
            console.log("Error: "+error);
        })}
        else
        {
          setFlag(true);
        }
    }
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

  return (
    <div style={{padding:"auto auto",margin:"0%  auto",display:"flex",justifyContent:"center",backgroundImage:'url(https://images.pexels.com/photos/128193/pexels-photo-128193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",backgroundPosition:"center"}}>
    <div className="card shadow p-1" style={{backgroundColor:"paleblue",overflow:"hidden",display:"inline-block",margin:"2% auto",padding:"0%"}}>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
          
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleFname}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleLname}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={type}
                  id="password"
                  autoComplete="new-password"
                  onChange={handlePassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmpassword"
                  label="Confirm Password"
                  type={type}
                  id="password"
                  autoComplete="new-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
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
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I agree to accept Terms & Conditons."
                />
              </Grid>
            </Grid>
            {/* { flag && <p>aa</p>} */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              <Link href="/Loginpg" variant="body2" style={{textDecoration:"none",color:"black"}}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box mt={5}>
          
        </Box>
      </Container>
      <br></br>
    </ThemeProvider>
    </div>
    </div>
  );
}