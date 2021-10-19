import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/site-logo.png'
import { HashLink } from "react-router-hash-link";
import useAuth from '../../../Hooks/useAuth';
import defaultimg from '../../../images/profile-default-image.png'

const Header = () => {
    const { user, Logout } = useAuth();
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="light" fixed="top">
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
                <Nav.Link as={HashLink} to="/home#product">
                  <span className="navLink-color">Products</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/aboutus">
                  <span className="navLink-color">About Us</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  <span className="navLink-color">Contact</span>
                </Nav.Link>
                
              </Nav>

              <Nav>
                {user?.uid ? (
                  <div className="d-flex justify-content-center align-items-center">
                    <h6 className="fw-bold">{user.displayName}</h6>
                    <div>
                      {user?.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt={user.photoURL}
                          className="w-50 rounded-circle"
                        />
                      ) : (
                        <img
                          src={defaultimg}
                          alt={defaultimg}
                          className=" rounded-circle default-img"
                        />
                      )}
                    </div>
                    <button className="btn" onClick={Logout}>
                      <i className="fas fa-sign-out-alt navLink-color"></i>
                    </button>
                  </div>
                ) : (
                  <Link to="/register">
                    <button className="btn btn-color">Sign Up</button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;