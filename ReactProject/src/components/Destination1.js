// Install Material-UI using: npm install @mui/material @emotion/react @emotion/styled

import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Container,
  Paper,
  Card,
  Grid,
} from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const FlightInfoPage = () => {
  const [destination, setDestination] = useState('');
  const [flightInfo, setFlightInfo] = useState(null);

  const handleSearch = () => {
    const mockFlightInfo = {
      destination: destination,
      flights: [
        { flightNumber: 'ABC123', departureTime: '10:00 AM', arrivalTime: '12:00 PM' },
        { flightNumber: 'XYZ456', departureTime: '02:30 PM', arrivalTime: '04:30 PM' },
      ],
    };

    setFlightInfo(mockFlightInfo);
  };
   
  const cards = [
    {
      title: 'Land of Temples',
      description: 'Chennai, the capital city of Tamil Nadu is a hub of temples of various faiths. Built in the unique South Indian architectural styles, these Chennai temples are a symbol of spirituality, culture and art.',
      imageUrl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2018/01/Ekambareswarar-Temple-kb6592.jpg',
    },
    {
      title: 'Marina Maniac',
      description: 'There are certain attractions that define a city in many unique ways; reflecting the essence, the character and the very soul of that destination. That is what Marina Beach is to Chennai – the city’s heart that reflects everything that is best about the city.',
      imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/96/26/64/marina-beach.jpg?w=900&h=600&s=1',
    },
    {
      title: 'Finest Silk',
      description: 'We Customise design of sarees as per customer specification. We have wide range of collections with unique, outstanding and quality designs. We are Manufacturers of Original Kanchi Silk Sarees and Ours is the Best Silk Saree Shop in Kanchi, Chennai, Tamilnadu, India.',
      imageUrl: 'https://m.media-amazon.com/images/I/61UQfqJjFVL._AC_UL480_FMwebp_QL65_.jpg',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const ServicesSlider = ({ services }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
  }};
    const services = [
      {
        title: 'In-Flight Entertainment',
        description: 'Enjoy a wide selection of movies, TV shows, and music during your flight.',
        imageUrl: 'https://images.unsplash.com/photo-1592985684811-6c0f98adb014?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmxpZ2h0JTIwdHZ8ZW58MHx8MHx8fDA%3D',
      },
      {
        title: 'Onboard Dining',
        description: 'Delicious meals and snacks served during the flight to satisfy your taste buds.',
        imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.am61PmvMhE63k_FgkV-oOQHaFj&pid=Api&P=0&h=180',
      },
      {
        title: 'Comfortable Seating',
        description: 'Relax in our spacious and comfortable seats designed for your utmost comfort.',
        imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.rqZu4nvOXz-Zu_4un9-pTwHaFS&pid=Api&P=0&h=180',
      },
    ];
  
  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
        <Typography variant="h4" gutterBottom>
          Flight Information
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Destination"
              fullWidth
              variant="outlined"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSearch}>
              Search Flights
            </Button>
          </Grid>
           <br></br>
          {flightInfo && (
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Flights to {flightInfo.destination}
              </Typography>

              {flightInfo.flights.map((flight, index) => (
                <div key={index}>
                  <Typography variant="subtitle1">
                    Flight Number: {flight.flightNumber}
                  </Typography>
                  <Typography variant="body2">
                    Departure Time: {flight.departureTime} | Arrival Time: {flight.arrivalTime}
                  </Typography>
                  <br />
                </div>
              ))}
            </Grid>
          )}
        </Grid><br></br>
        <Typography variant="h4" gutterBottom>Experience the best of Chennai</Typography>
        <Slider {...settings}>
  {cards.map((card, index) => (
    <div key={index} style={{ width: '100%', padding: '10px' }}>
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '100%' }}>
        <img src={card.imageUrl} alt={card.title} style={{ width: '100%', borderRadius: '8px' }} />
        <h3 style={{ marginTop: '8px' }}>{card.title}</h3>
        <p>{card.description}</p>
      </div>
    </div>
  ))}
</Slider><br></br><br></br>
<Typography variant='h4' gutterBottom>Services Offered</Typography>
<Container sx={{backgroundColor:'#bde0fe', width: '100%', padding: '20px'}}>
<Slider {...settings}>
      {services.map((service, index) => (
        <div key={index} style={{ width: '100%', padding: '10px' }}>
          <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '100%' }}>
            <img src={service.imageUrl} alt={service.title} style={{ width: '100%', borderRadius: '8px' }} />
            <h3 style={{ marginTop: '8px' }}>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </Slider>
    </Container>
  </Container>
  );
};

export default FlightInfoPage;
