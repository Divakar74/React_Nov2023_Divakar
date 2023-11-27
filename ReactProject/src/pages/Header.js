import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Button, CssBaseline, Link, Card, CardContent, CardMedia, rgbToHex, ThemeProvider } from '@mui/material';
import { Paper, TextField } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import  { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import {
  
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  RadioGroup,
  Radio,
  FormControlLabel
} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import About from '../components/About';


const NavBar = () => {
  
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
    const handleDrawerOpen = () => {
      setIsDrawerOpen(true);
    };
  
    const handleDrawerClose = () => {
      setIsDrawerOpen(false);
    };
    return (
      <AppBar position="static" sx={{ backgroundColor: 'rgb(116, 155, 194)' }}>
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerOpen}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/1585/1585550.png"
                alt="Logo"
                style={{ width: '40px', height: '40px' }}
              />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '0px' }}>
              <Box sx={{ display: { xs: 'none', sm: 'block' }, marginRight: 'auto' }}>Glider Wings</Box>
            </Typography>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton size="large" edge="end" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button color="inherit" component={Link} href="/">
                Home
              </Button>
              {/* <Button color="inherit" component={Link} href="/about">
                About
              </Button>
              <Button color="inherit" component={Link} to="/support">
                Support
              </Button> */}
              <Button color="inherit" component={Link} href="/login">
                Sign In
              </Button>
              /
              <Button color="inherit" component={Link} href="/register">
                Sign Up
              </Button>
              {/* <Button color="inherit" component={Link} href="/admin">
                My Bookings
              </Button> */}
            </Box>
          </Toolbar>
        </Container>
  
        <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
          <Box
            sx={{ width: 250, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}
            role="presentation"
            onClick={handleDrawerClose}
            onKeyDown={handleDrawerClose}
          >
            <Button color="inherit" component={Link} href="/">
              Home
            </Button>
            {/* <Button color="inherit" component={Link} href="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/support">
              Support
            </Button> */}
            <Button color="inherit" component={Link} href="/login">
              Sign In
            </Button>
            <Button color="inherit" component={Link} href="/register">
              Sign Up
            </Button>
            <Button color="inherit" component={Link}>
              My Bookings
            </Button>
          </Box>
        </Drawer>
      </AppBar>
    );
  };export default NavBar;