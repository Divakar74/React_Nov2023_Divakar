import React from 'react';
import { Navbar, Container, Nav, InputGroup, FormControl, Button } from 'react-bootstrap';
import { BagDash, PersonCircle, Search } from 'react-bootstrap-icons'
import { Person, Bag,Cart } from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
  return (
    <div>
    <Navbar collapseOnSelect expand="md" style={{backgroundColor:"lightblue"}}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contactus">Contact</Nav.Link>
            <Nav.Link href="/aboutus">About</Nav.Link>
            
            <Nav.Link></Nav.Link>
            
            {/* Add more Nav.Link components for additional navigation items */}
          </Nav>
          <Nav>
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-primary" id="button">
                <Search />
              </Button>
            </InputGroup>
          </Nav>
          <Nav>
          <Button variant="link" className="me-2" href='/wishlist'>
      <Cart size={22} color='green' />
    </Button>
            <Button variant="link"   className="me-2" href='/Loginpg'>
              <PersonCircle size={24} color='green' />
            </Button>
            <Button variant="link" className="me-2" href='/cart'>
              <BagDash size={24} color='green'/>
            </Button>
          </Nav>

        </Navbar.Collapse>
      </Container>

    </Navbar>    
</div>
  );
};

export default Header;