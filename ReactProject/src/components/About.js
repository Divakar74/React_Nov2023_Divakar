import React from 'react';
import { Container, Typography, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '50px',marginLeft:'0,'}}>
        <Typography variant="h4" gutterBottom>
          About Our Flight Booking Portal
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our online flight booking portal! We are dedicated to providing you with a seamless and
          convenient way to book your flights and travel around the world.
        </Typography>
        <Typography variant="body1" paragraph>
          Our platform offers a wide range of features, including easy search and booking, real-time flight
          information, and secure payment options.
        </Typography>
        <Typography variant="body1" paragraph>
          Whether you're planning a business trip or a vacation, we've got you covered. Our user-friendly
          interface ensures that you can quickly find the best flights at the most competitive prices.
        </Typography>
        <Typography variant="body1" paragraph>
          We value your time and strive to make your travel experience hassle-free. If you have any questions or
          need assistance, feel free to reach out to our customer support team.
        </Typography>
        <Typography variant="body1" paragraph>
          Thank you for choosing our flight booking portal. We look forward to helping you make your travel
          dreams a reality!
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/">
          Back to Home
        </Button>
    </Container>
  );
};

export default About;
