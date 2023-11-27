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

const Footer = ()=>{
    return(
<Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are Voyagers, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Main Street, Chennai, India
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: voyagers@hotmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +91 934 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>)};
    export default Footer;