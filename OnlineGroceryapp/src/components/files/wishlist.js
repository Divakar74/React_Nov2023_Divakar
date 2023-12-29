import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import CartPage from './cart';
import { Justify } from 'react-bootstrap-icons';
const WishlistPage = () => {
  return (
    <section className="wishlist-page">
      <div className="container py-5">
      <h2 className="mb-4">Cart items</h2>
      <Carousel className="carousel-center">
        <Carousel.Item>
          <div className="col-md-4 mb-4 col-lg-3 col-sm-6">
            <Card>
              <img
                src="https://img.freepik.com/free-photo/top-view-tasty-cookies-white-background_1127-302.jpg?size=626&ext=jpg&ga=GA1.1.695998934.1694078597&semt=ais"
                className="card-img-top"
                alt="Product"
              />
              <div className="card-body">
                <Card.Body>
                  <Card.Title>Jim Jam</Card.Title>
                  <Card.Text>1kg of crystal salt</Card.Text>
                  <Card.Text>Price: Rs.20</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                  <Button variant="danger" size="sm">
                    <FaTrash />
                  </Button>
                </Card.Footer>
              </div>
            </Card>
          </div>
        </Carousel.Item>
        {/* Repeat the Carousel.Item for other cards */}
        <Carousel.Item>
          <div className="col-md-4 mb-4 col-lg-3 col-sm-6">
            <Card>
              <img
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSiaeIjbwnZB6_aZTtu6Ffdbmxk1uuJbqIwW8n5CopZhhSHbS4rwXt0UpIM0G3dxv-oVXvu9A7IogHMPgGSjXbQowDxOXO0_7SM7zQr5o8rcOu921c8nQ"
                className="card-img-top"
                alt="Product"
              />
              <div className="card-body">
                <Card.Body>
                  <Card.Title>Axe-Citrus</Card.Title>
                  <Card.Text>1</Card.Text>
                  <Card.Text>Price: Rs.250</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                  <Button variant="danger" size="sm">
                    <FaTrash />
                  </Button>
                </Card.Footer>
              </div>
            </Card>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          
        </Carousel.Item>
        {/* Repeat the Carousel.Item for other cards */}
      </Carousel>
    </div>
    </section>
  );
};

export default WishlistPage;