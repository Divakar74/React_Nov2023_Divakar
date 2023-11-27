import * as React from 'react';
import Avatar from '@mui/material/Avatar';
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
import { Container,InputLabel } from '@mui/material';


const defaultTheme = createTheme({
    palette: {
        primary: {
          light: '#757ce8',
          main: '#3f50b5',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        },
      },
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
  

export default function Registerpage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '80px' }} justifyContent="center" style={{marginTop:"70px",
      backgroundColor:"lightskyblue"
          }}>
        <CssBaseline />
        
        <Grid item xs={12} sm={9} md={5} component={Paper} elevation={7} square  borderRadius={7}>
          <Box
            sx={{
              my: 6,
              mx: 7,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          > 
            <Typography component="h4" variant="h4">
             Register
            </Typography>
            <Typography component="h4" variant="h6">
             Start your Journey
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Box>
            <InputLabel htmlFor="username"sx={{marginRight:'400px'}}>User Name</InputLabel>
             <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <InputLabel htmlFor="emailaddress"sx={{marginRight:'400px'}}>Email Address</InputLabel>

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="create password"
                label="Create Password"
                type="password"
                id="create password"
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirm password"
                label="Confirm Password"
                type="password"
                id="confirm password"
                autoComplete="current-password"
              />
              <InputLabel sx={{marginRight:'400px'}}>Enter your D.O.B</InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                name="dob"
                type="date"
                id="dob"
                autoComplete="dob"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button></Box>
              <br>
              </br><br>
              </br>
                 
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
