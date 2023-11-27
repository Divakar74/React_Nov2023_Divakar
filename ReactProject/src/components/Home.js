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
import NavBar from '../pages/Header';
import Footer from '../pages/Footer';
import About from './About';



const cities = [
  'New York',
  'Delhi',
  'Chennai',
  'Bengaluru',
  'Sydney',
];

const defaulttheme = createTheme({
  palette: {
    primary: {
      main: 'rgb(97, 163, 186)',
    }
  },
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
);

const ImageCard = ({ image, title, description }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
const destinations = [
  {
    id: 1,
    name: 'Mumbai to Sydney',
    label: 'Learn More',
    image :'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3lkbmV5fGVufDB8fDB8fHww',
  },
  {
    id: 2,
    name: 'Paris to Washington ',
    label: 'Learn More',
    image :'https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FzaGluZ3RvbnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 3,
    name: 'Chandigarh to Bengaluru',
    label: 'Learn More',
    image: 'https://www.airindia.com/adobe/dynamicmedia/deliver/dm-aid--a30260bd-23f4-4c8c-b8db-0e9965db9beb/Ahmedabad.webp', // Replace with the actual image URL
  },
  {
    id: 4,
    name: 'Dubai to Kolkata ',
    label: 'Learn More',
    image: 'https://images.unsplash.com/photo-1571679654681-ba01b9e1e117?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'Hyderabad to London ',
    label: 'Learn More',
    image :'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9uZG9ufGVufDB8fDB8fHww',
  },
  {
    id: 6,
    name: 'Dubai to Chennai ',
    label: 'Learn More',
    image: 'https://images.unsplash.com/photo-1616843413587-9e3a37f7bbd8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlbm5haXxlbnwwfHwwfHx8MA%3D%3D',
  },
];
const HomePage = () => {

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
    <div>
      <ThemeProvider theme={defaulttheme}>
      <Grid sx={{ backgroundColor:'rgb(246, 244, 235)'}}>
      <CssBaseline />

      {/* Body */}
      <br></br>
      <Container>
      <Card style={{ borderRadius: 15, padding: '25px', backgroundColor: 'rgb(255, 251, 245)' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
            Book Your Flight
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
                <InputLabel id="from-label">From</InputLabel>
                <Select labelId="from-label" id="from" label="From">
                <MenuItem value="new-york">New York</MenuItem>
                <MenuItem value="los-angeles">Los Angeles</MenuItem>
                <MenuItem value="chicago">Chicago</MenuItem>
                <MenuItem value="san-francisco">San Francisco</MenuItem> 
                <MenuItem value="mumbai">Mumbai</MenuItem>
                <MenuItem value="delhi">Delhi</MenuItem>
                <MenuItem value="bangalore">Bangalore</MenuItem>
                <MenuItem value="chennai">Chennai</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel id="to-label">To</InputLabel>
                <Select labelId="to-label" id="to" label="To">
                <MenuItem value="new-york">New York</MenuItem>
                <MenuItem value="los-angeles">Los Angeles</MenuItem>
                <MenuItem value="chicago">Chicago</MenuItem>
                <MenuItem value="san-francisco">San Francisco</MenuItem> 
                <MenuItem value="mumbai">Mumbai</MenuItem>
                <MenuItem value="delhi">Delhi</MenuItem>
                <MenuItem value="bangalore">Bangalore</MenuItem>
                <MenuItem value="chennai">Chennai</MenuItem>
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

  <>
  {tripType === 'round'&&(
    <Grid container spacing={1}>
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
  </>

    <Grid container spacing={2} alignItems="center" justify="center">
      <Grid item xs={6} md={3}>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="passengers-count-label">Passengers Count</InputLabel>
          <Select
            labelId="passengers-count-label"
            id="passengers-count"
            label="Passengers Count"
            value={passengersCount}
            onChange={handlePassengersCountChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} md={3}>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="passenger-type-label">Passenger Type</InputLabel>
          <Select
            labelId="passenger-type-label"
            id="passenger-type"
            label="Passenger Type"
            value={passengerType}
            onChange={handlePassengerTypeChange}
          >
            <MenuItem value="adult">Adult</MenuItem>
            <MenuItem value="child">Child</MenuItem>
            <MenuItem value="infant">Infant</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
    {tripType !== 'oneWay' && (
            <Grid item xs={8} md={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel id="class">Class</InputLabel>
                <Select
                  labelId="class-label"
                  id="class"
                  label="Class"
                  value={passengerclass}
                  onChange={handleclasschange}
                >
                   <MenuItem value="economy">Economy</MenuItem>
    <MenuItem value="premium-economy">Premium Economy</MenuItem>
    <MenuItem value="business">Business</MenuItem>
    <MenuItem value="first">First Class</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          )}
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Promo Code"
                variant="outlined"
                margin="normal"
                value={promoCode}
                onChange={handlePromoCodeChange}
              />
            </Grid>
          </Grid>
          <Grid item xs={6} md={3}>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="concession-type-label">Concession Type</InputLabel>
          <Select
            labelId="concession-type-label"
            id="concession-type"
            label="Concession Type"
          >
            <MenuItem value="armedforces">Armed Forces</MenuItem>
            <MenuItem value="braveryawardee">Bravery Awardee</MenuItem>
            <MenuItem value="para">Para Military force</MenuItem>
            <MenuItem value="reserve">Reserve Engineer</MenuItem>
            <MenuItem value="student">Student</MenuItem>
            <MenuItem value="senior">Senior Citizen</MenuItem>
            <MenuItem value="warwidow">War Widow</MenuItem>
            <MenuItem value="wardisabled">War Disabled Officer</MenuItem>
          </Select>
        </FormControl>
      </Grid>
          <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
            Search Flights
          </Button>
        </CardContent>
      </Card>
    </Container><br></br>
      <h1>Explore Global Destinations</h1>
      <Container>
      <Grid container spacing={4} justifyContent="center" style={{ marginTop: '30px' ,borderRadius:5}}>
        {destinations.map((destination) => (
          <Grid item key={destination.id}>
            <Card style={{ maxWidth: 500 }}>
              <CardMedia
                component="img"
                height="200"
                image={destination.image}
                alt={destination.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {destination.name}<br></br>
                  <Button variant="contained" color="primary" href="/destination1">{destination.label}</Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container><br></br>
    <Grid item xs={12} sm={4} sx={{
  position: 'relative',
  backgroundImage: 'url("https://cdn.pixabay.com/photo/2013/11/30/15/56/airplane-221526_1280.jpg")',
  height: '400px',
  margin: '0 auto',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
  backgroundPosition: 'center',
  overflow: 'hidden' 
}}>
  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
   color: 'black', textAlign: 'right' ,fontFamily:'sans-serif',fontWeight:'15px'}}>
  <h1>Start your Journey</h1>
  <p>"Fly high with ease – book your wings in just a click!"</p> 
  </div>
</Grid>
{/* <Grid container spacing={4} sx={{height:"400px", justifyContent:"center" ,marginTop: '30px' ,borderRadius:5}}>
<Card style={{ maxWidth: 400 }}>
<CardMedia
  component="img"
  height="200"
  width="300"
  image="https://cdn.pixabay.com/photo/2016/12/26/13/28/taxi-1932107_640.jpg"
/>
<CardContent>
                <Typography variant="h6" component="div">
                  London<br></br>
                  <Button variant="contained" color="primary">Book Now</Button>
                </Typography>
              </CardContent>
            </Card>
<br></br><br></br>
<Card style={{ maxWidth: 400 }}>
<CardMedia
  component="img"
  height="200"
  width="300"
  image="https://cdn.pixabay.com/photo/2016/12/26/13/28/taxi-1932107_640.jpg"
/>
<CardContent>
                <Typography variant="h6" component="div">
                  London<br></br>
                  <Button variant="contained" color="primary">Book Now</Button>
                </Typography>
              </CardContent>
            </Card>

</Grid> */}
      <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      padding={2}
      backgroundColor="black"
      textAlign="center"
      sx={{
        backgroundColor:'#rgb(246, 244, 235)'
      }}
    >
      <Avatar sx={{width:'80px',height:'80px'}}>
        <Typography variant="body2" >FAQs</Typography>
      </Avatar>
      <Divider orientation="horizontal" flexItem  />
      <Avatar sx={{width:'80px',height:'80px'}}>
        <Typography variant="body2">Support</Typography>
      </Avatar>
      <Divider orientation="horizontal" flexItem />
      <Avatar sx={{width:'80px',height:'80px'}}>
        <Typography variant="body2">Service</Typography>
      </Avatar>
    </Box>
   
   
      {/* Footer */}
      </Grid>
      </ThemeProvider>
    </div>
  );
};

export default HomePage;