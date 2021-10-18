import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/site-logo.png'

const Header = () => {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="light">
          <Container>
            <Navbar.Brand as={Link} to="/home">
              <img src={logo} alt="" className="img-fluid" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link as={Link} to="/home">
                  <span className="navLink-color">Home</span>
                </Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
                <Nav.Link>
                  <i className="fas fa-sign-out-alt navLink-color"></i>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;