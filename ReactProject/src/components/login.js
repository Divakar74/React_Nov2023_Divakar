import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import Registerpage from './registration';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
const defaultTheme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });

export default function Loginpage() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };
  
  const navigate=useNavigate();
  const [name,setName]=useState();
  const [password,setpass]=useState();
  // const [p,setp]=useState();
  const [success,setSuccess]=useState(false);
  const [error,setError]=useState(false);
  // const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.get('http://localhost:3000/users');
      const user = response.data.find((user) => user.email === name);
     
      if (user) {
        if (user.Password === password) {
        //  alert("login success")
          navigate('/'); // Redirect to dashboard on successful login
          setError(false)
        } else {
          setSuccess(false);
          setError(true);
        }
      } else {
        setSuccess(false);
        setError(true);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle other errors if needed
    }
    console.log("hi");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid>
      <Grid container component="main" sx={{ height: '100vh' }} justifyContent="center" style={{marginTop:"50px",marginBottom:"50px"}} >
        <CssBaseline />
        <Grid>
          
        </Grid>
        <Grid item xs={12} sm={7} md={5} component={Paper} elevation={6} square  borderRadius={10} >
          <Box 
            sx={{
              my: 7,
              mx: 7,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          > 
            <Typography component="h4" variant="h4">
              Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={(e)=>{setName(e.target.value)}}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={(e)=>{setpass(e.target.value)}}
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {error&&<p sx={{fontFamily:'monospace'}}>Error</p>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
              Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Register"}
                  </Link>
                </Grid>
              </Grid><br>
              </br><br>
              </br>
                  <Grid container justifyContent="Center" sx={{padding:'4px',justifyContent:'space-around'}}>
                  <IconButton>
          <Avatar>
          <Link href={`https://www.facebook.com/airasia/`} target="_blank" rel="noopener noreferrer" color="inherit">
            <FacebookIcon />
            </Link>
          </Avatar>
        </IconButton>
        <IconButton>
          <Avatar>
          <Link href={`https://www.instagram.com/flyairasia/`} target="_blank" rel="noopener noreferrer" color="inherit">
            <TwitterIcon />
            </Link>
          </Avatar>
        </IconButton>
        <IconButton>
          <Avatar>
          <Link href={`https://www.instagram.com/flyairasia/`} target="_blank" rel="noopener noreferrer" color="inherit">
            <InstagramIcon />
            </Link>
          </Avatar>
        </IconButton>
                </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid></Grid>
    </ThemeProvider>
  );
}