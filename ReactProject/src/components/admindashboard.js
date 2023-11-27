// Import necessary dependencies from Material-UI
import React from 'react';
import { styled } from '@mui/system';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline, IconButton,Container,Card,CardContent,Grid,Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FlightIcon from '@mui/icons-material/Flight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Paper, TextField } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { useState } from 'react';
import {
  
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  RadioGroup,
  Radio,
  FormControlLabel
} from '@mui/material';
import About from '../components/About';

const drawerWidth = 240;

const Root = styled('div')({
  display: 'flex',
});

const Appbar = styled(AppBar)({
  zIndex: (theme) => theme.zIndex.drawer + 1,
});

const DrawerContainer = styled('div')({
  width: drawerWidth,
  flexShrink: 0,
});

const DrawerPaper = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
  },
}));

const Content = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const ToolbarStyled = styled(Toolbar)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
});
const AdminDashboard = () => {
const handleBooking = () => {
  alert('Booking confirmed!');
};
 
const [tripType, setTripType] = useState('round');
const [passengersCount, setPassengersCount] = useState(1);
const [passengerType, setPassengerType] = useState('adult');
const [passengerclass, setpassengerclass] = useState('economy');
const [promoCode, setPromoCode] = useState('');
const [departureDate, setDepartureDate] = useState('');
const [returnDate, setReturnDate] = useState('');
const [adultCount, setAdultCount] = useState(1);
const [childCount, setChildCount] = useState(0);
const [infantCount, setInfantCount] = useState(0);

const handlePassengerTypeChange = (event) => {
  const selectedPassengerType = event.target.value;

  if (selectedPassengerType === 'adult') {
    setAdultCount(adultCount + 1);
  } else if (selectedPassengerType === 'child') {
    setChildCount(childCount + 1);
  } else if (selectedPassengerType === 'infant') {
    setInfantCount(infantCount + 1);
  }
  setPassengerType(selectedPassengerType);
}

const handleTripTypeChange = (event) => {
  setTripType(event.target.value);
};

const handlePassengersCountChange = (event) => {
  setPassengersCount(event.target.value);
};

const handleclasschange = (event) => {
  setpassengerclass(event.target.value);
};

const handlePromoCodeChange = (event) => {
  setPromoCode(event.target.value);
};

const handleDepartureDateChange = (event) => {
  setDepartureDate(event.target.value);
};

const handleReturnDateChange = (event) => {
  setReturnDate(event.target.value);
};

  return (
    <Root>
      <CssBaseline />

      <Appbar position="fixed">
        <ToolbarStyled>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // Add functionality to open/close the drawer
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Flight Booking Admin
          </Typography>
        </ToolbarStyled>
      </Appbar>
      <DrawerContainer>
        <DrawerPaper variant="permanent">
          <div />
          <List>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FlightIcon />
              </ListItemIcon>
              <ListItemText primary="Flights" />
            </ListItem>
            {/* Add more menu items as needed */}
          </List>
        </DrawerPaper>
      </DrawerContainer>
      <Content>
        {/* Add your main content here */}
        <Container>
      <Card style={{ borderRadius: 15, padding: '25px', backgroundColor: 'rgb(255, 251, 245)' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
            Air India Flight Booking
          </Typography>
          <FormControl component="fieldset" fullWidth>
            <RadioGroup
              row
              aria-label="trip-type"
              name="trip-type"
              value={tripType}
              onChange={handleTripTypeChange}
            >
              <FormControlLabel value="round" control={<Radio />} label="Round Trip" />
              <FormControlLabel value="oneWay" control={<Radio />} label="One Way" />
            </RadioGroup>
          </FormControl>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel id="from-label">Departure From</InputLabel>
                <Select labelId="from-label" id="from" label="Departure From">
                  {/* Add your departure locations */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel id="to-label">Arrival To</InputLabel>
                <Select labelId="to-label" id="to" label="Arrival To">
                  {/* Add your arrival locations */}
                </Select>
              </FormControl>
            </Grid>
           
          </Grid>
          {tripType === 'oneWay' && (
                 <Grid item xs={12}>
                 <FormControl fullWidth variant="outlined" margin="normal">
                   <InputLabel id="travel-date-label">Date of Travel</InputLabel>
                   <TextField
                     fullWidth
                     type="date"
                     variant="outlined"
                     margin="normal"
                   />
                 </FormControl>
               </Grid>
          )}
          {tripType === 'round' && (
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="outlined" margin="normal">
                  <InputLabel id="departure-date-label">Departure Date</InputLabel>
                  <TextField
                    fullWidth
                    type="date"
                    variant="outlined"
                    margin="normal"
                    value={departureDate}
                    onChange={handleDepartureDateChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="outlined" margin="normal">
                  <InputLabel id="return-date-label">Return Date</InputLabel>
                  <TextField
                    fullWidth
                    type="date"
                    variant="outlined"
                    margin="normal"
                    value={returnDate}
                    onChange={handleReturnDateChange}
                  />
                </FormControl>
              </Grid>
            </Grid>
          )}

          {/* Other form fields go here */}

          <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
            Search Flights
          </Button>
        </CardContent>
      </Card>
    </Container>
        <Typography variant="h4">Welcome to the Admin Dashboard</Typography>
      </Content>
    </Root>
  );
};

export default AdminDashboard;
